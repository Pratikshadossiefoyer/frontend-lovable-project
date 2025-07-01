
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net";
import "datatables.net-bs5";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CFormSelect, CFormLabel, CButton } from "@coreui/react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { CAlert } from "@coreui/react";

export const CrawledUrlsTable = () => {
  const location = useLocation();
  const tableRef = useRef(null);
  const tableInstance = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [alert, setAlert] = useState(null);
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageLinksFromState = location.state?.imageLinks;

  let linkData = imageLinksFromState;

  // Ensure imageLinks is always an array
  const imageLinks = Array.isArray(linkData) ? linkData : [];

  const filteredImageLinks = imageLinks.filter((img) => {
    const alt = img.alt || "";
    const status = Number(img.status_code) || 0;

    const altFilterPass =
      filter === "all" ||
      (filter === "present" && alt !== "" && alt !== null) ||
      (filter === "null" && (alt === "" || alt === null));

    const statusFilterPass =
      statusFilter === "all" ||
      (statusFilter === "200" && status === 200) ||
      (statusFilter === "400" && status === 400) ||
      (statusFilter === "+others" && status !== 200 && status !== 400 && status !== 0);

    return altFilterPass && statusFilterPass;
  });

  const downloadImageLinks = async () => {
    setLoading(true);

    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Image Links');

      worksheet.columns = [
        { header: 'Image Link', key: 'src', width: 60 },
        { header: 'Alt Text', key: 'alt', width: 30 },
        { header: 'Status Code', key: 'status', width: 15 }
      ];

      worksheet.getRow(1).font = { bold: true };
      worksheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFD3D3D3' }
      };

      imageLinks.forEach(item => {
        const row = worksheet.addRow({
          src: item.src,
          alt: item.alt || "NULL",
          status: item.status_code || "NULL"
        });

        const statusCell = row.getCell('status');
        const statusCode = Number(item.status_code) || 0;

        if (statusCode >= 400) {
          statusCell.font = { color: { argb: 'FFFF0000' } };
        } else if (statusCode >= 300) {
          statusCell.font = { color: { argb: 'FFFF9900' } };
        } else if (statusCode >= 200) {
          statusCell.font = { color: { argb: 'FF008000' } };
        }
      });

      worksheet.eachRow({ includeEmpty: true }, row => {
        row.eachCell({ includeEmpty: true }, cell => {
          cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };
        });
      });

      worksheet.autoFilter = {
        from: { row: 1, column: 1 },
        to: { row: 1, column: 3 }
      };

      const buffer = await workbook.xlsx.writeBuffer();

      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'image_links.xlsx');

      setAlert({ message: "Export successful!", type: "success" });

    } catch (error) {
      setAlert({ message: `Export failed: ${error.message}`, type: "danger" });
    } finally {
      setLoading(false);

      // Fixed the condition check
      if (alert?.message === "Export successful!") {
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  useEffect(() => {
    if (!tableRef.current) return;

    if (tableInstance.current) {
      tableInstance.current.destroy();
      tableInstance.current = null;
    }

    $.fn.dataTable.ext.type.order["alt-text-pre"] = function (data) {
      if (data === "NULL" || data === null || data === "") {
        return "zzzzzzzzz";
      }
      return data.toLowerCase();
    };

    tableInstance.current = $(tableRef.current).DataTable({
      paging: true,
      searching: true,
      ordering: true,
      scrollX: true,
      data: filteredImageLinks.length > 0
        ? filteredImageLinks.map((img) => ({
            src: img.src,
            alt: img.alt || "NULL",
            status_code: img.status_code || "NULL",
          }))
        : [{ src: "No image links found", alt: "NULL", status_code: "NULL" }],
      columns: [
        {
          title: "Preview",
          data: "src",
          render: (data, type, row) => {
            if (data === "No image links found") return data;
            if (Number(row.status_code) >= 400) {
              return '<div class="text-danger text-center fs-5">❌</div>';
            }
            return `<div class="preview-container"><img src="${data}" alt="Preview" class="preview-image" onerror="this.style.display='none'; this.nextSibling.style.display='block';" /><div class="no-image-text">No img</div></div>`;
          },
          searchable: false,
          orderable: false,
        },
        {
          title: "Image Link",
          data: "src",
          render: (data) => {
            if (data === "No image links found") return "N/A";

            // Adjust URL display length based on screen size
            const isMobile = window.innerWidth < 768;
            const maxLength = isMobile ? 25 : 40;
            const displayUrl = data.length > maxLength ? data.substring(0, maxLength) + "..." : data;

            return `
              <div class="link-container">
                <div class="url-text" title="${data}">
                  ${displayUrl}
                </div>
                <div class="action-buttons">
                  <button class="copy-url-btn action-btn" data-url="${data}" title="Copy URL" role="button" aria-label="Copy URL">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                      <rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
                      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </button>
                  <button class="external-link-icon action-btn" data-url="${data}" title="Open link in new tab" aria-label="Open link in new tab">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            `;
          },
        },
        {
          title: "Alt Text",
          data: "alt",
          type: "alt-text",
          render: (data) => {
            if (!data || data === "NULL") {
              return `<span class="null-text">NULL</span>`;
            }
            const isMobile = window.innerWidth < 768;
            const maxLength = isMobile ? 20 : 30;
            const displayText = data.length > maxLength ? data.substring(0, maxLength) + "..." : data;
            return `<span class="alt-text" title="${data}">${displayText}</span>`;
          },
        },
        {
          title: "Status",
          data: "status_code",
          render: (data) => {
            if (data === "NULL" || data === "") return `<span class="status-badge status-null">${data}</span>`;
            const numericData = Number(data);
            let statusClass = "status-default";
            if (numericData >= 400) statusClass = "status-error";
            else if (numericData >= 300) statusClass = "status-warning";
            else if (numericData >= 200) statusClass = "status-success";
            return `<span class="status-badge ${statusClass}">${data}</span>`;
          },
        },
      ],
      order: [[2, "asc"]],
      drawCallback: function () {
        try {
          $(tableRef.current)
            .find('[data-bs-toggle="tooltip"]')
            .tooltip({ trigger: "manual" });
        } catch (error) {
          $(tableRef.current)
            .find(".copy-url-btn")
            .each(function () {
              $(this).attr("title", copiedUrl === $(this).data("url") ? "Copied!" : "Copy URL");
            });
        }

        $(tableRef.current)
          .find("img")
          .off("click")
          .on("click", function () {
            const src = $(this).attr("src");
            setSelectedImage(src);
          });

        $(tableRef.current)
          .find(".copy-url-btn")
          .off("click keydown")
          .on("click", function () {
            const $this = $(this);
            const url = $this.data("url");
            if (!url) {
              setAlert({ message: "No URL to copy", type: "warning" });
              return;
            }
            navigator.clipboard.writeText(url).then(() => {
              setCopiedUrl(url);
              try {
                $this.tooltip("hide").attr("data-bs-title", "Copied!").tooltip("show");
                setTimeout(() => {
                  $this.tooltip("hide").attr("data-bs-title", "Copy URL");
                }, 2000);
              } catch (error) {
                $this.attr("title", "Copied!");
                setTimeout(() => {
                  $this.attr("title", "Copy URL");
                }, 2000);
              }
              setTimeout(() => {
                setAlert(null);
                setCopiedUrl(null);
              }, 1000);
            }).catch(() => {
              setAlert({ message: "Failed to copy URL", type: "danger" });
            });
          })
          .on("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
              const $this = $(this);
              const url = $this.data("url");
              if (!url) {
                setAlert({ message: "No URL to copy", type: "warning" });
                return;
              }
              navigator.clipboard.writeText(url).then(() => {
                setAlert({ message: "URL copied successfully!", type: "success" });
                setCopiedUrl(url);
                try {
                  $this.tooltip("hide").attr("data-bs-title", "Copied!").tooltip("show");
                  setTimeout(() => {
                    $this.tooltip("hide").attr("data-bs-title", "Copy URL");
                  }, 2000);
                } catch (error) {
                  $this.attr("title", "Copied!");
                  setTimeout(() => {
                    $this.attr("title", "Copy URL");
                  }, 2000);
                }
                setTimeout(() => {
                  setAlert(null);
                  setCopiedUrl(null);
                }, 2000);
              }).catch(() => {
                setAlert({ message: "Failed to copy URL", type: "danger" });
              });
            }
          });

        $(tableRef.current)
          .find(".external-link-icon")
          .off("click keydown")
          .on("click", function () {
            const url = $(this).data("url");
            if (url) {
              window.open(url, "_blank", "noopener,noreferrer");
            }
          })
          .on("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
              const url = $(this).data("url");
              if (url) {
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }
          });

      },
    });

    return () => {
      if (tableInstance.current) {
        tableInstance.current.destroy();
        tableInstance.current = null;
      }
    };
  }, [filteredImageLinks, copiedUrl]);

  const closeImage = () => setSelectedImage(null);

  // Show a message if no data is available
  if (!imageLinks || imageLinks.length === 0) {
    return (
      <div className="container-fluid px-2 px-md-3 mt-2 mt-md-3">
        {alert && (
          <CAlert color={alert.type} dismissible onClose={() => setAlert(null)} className="custom-alert mb-2">
            {alert.message}
          </CAlert>
        )}
        <div className="alert alert-info">
          <h5 className="mb-2">No Image Links Found</h5>
          <p className="mb-0 small">No image link data is available. Please ensure data is passed through navigation state or stored in localStorage.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-2 px-md-3 mt-2 mt-md-3">
      <style>
        {`
        /* Enhanced Table Styling */
        .table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: none;
        }

        .table thead th {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 16px 12px;
          border: none;
          position: relative;
        }

        .table thead th:first-child {
          border-top-left-radius: 12px;
        }

        .table thead th:last-child {
          border-top-right-radius: 12px;
        }

        .table tbody tr {
          border-bottom: 1px solid #e8ecf0;
          transition: all 0.2s ease;
        }

        .table tbody tr:hover {
          background-color: #f8fafc;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .table tbody tr:last-child {
          border-bottom: none;
        }

        .table tbody td {
          padding: 16px 12px;
          vertical-align: middle;
          border: none;
        }

        /* Preview Container */
        .preview-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }

        .preview-image {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid #e2e8f0;
        }

        .preview-image:hover {
          transform: scale(1.1);
          border-color: #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .no-image-text {
          display: none;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Link Container */
        .link-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 40px;
        }

        .url-text {
          flex: 1;
          font-size: 0.875rem;
          color: #334155;
          font-weight: 500;
          word-break: break-all;
          line-height: 1.4;
        }

        .action-buttons {
          display: flex;
          gap: 6px;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .link-container:hover .action-buttons {
          opacity: 1;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .action-btn:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
          color: #374151;
          transform: translateY(-1px);
        }

        .copy-url-btn:hover {
          background: #dbeafe;
          border-color: #3b82f6;
          color: #1d4ed8;
        }

        .external-link-icon:hover {
          background: #ecfdf5;
          border-color: #10b981;
          color: #047857;
        }

        /* Alt Text */
        .alt-text {
          font-size: 0.875rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.4;
        }

        .null-text {
          font-size: 0.8rem;
          color: #94a3b8;
          font-style: italic;
          font-weight: 400;
          background: #f1f5f9;
          padding: 4px 8px;
          border-radius: 4px;
        }

        /* Status Badges */
        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          min-width: 60px;
        }

        .status-success {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .status-warning {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .status-error {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .status-null {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }

        .status-default {
          background: #f8fafc;
          color: #475569;
          border: 1px solid #cbd5e1;
        }

        /* DataTables Overrides */
        .dataTables_wrapper .dataTables_length,
        .dataTables_wrapper .dataTables_filter,
        .dataTables_wrapper .dataTables_info,
        .dataTables_wrapper .dataTables_paginate {
          margin: 12px 0;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button {
          padding: 8px 12px;
          margin: 0 2px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          background: white;
          color: #374151;
          transition: all 0.2s ease;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
          transform: translateY(-1px);
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .table thead th {
            padding: 12px 8px;
            font-size: 0.8rem;
          }
          
          .table tbody td {
            padding: 12px 8px;
          }

          .preview-image {
            width: 35px;
            height: 35px;
          }

          .action-btn {
            width: 28px;
            height: 28px;
          }

          .status-badge {
            padding: 4px 8px;
            font-size: 0.75rem;
            min-width: 50px;
          }
        }
        `}
      </style>

      {alert && (
        <CAlert color={alert.type} dismissible onClose={() => setAlert(null)} className="custom-alert mb-2">
          {alert.message}
        </CAlert>
      )}

      {/* Mobile-optimized filters */}
      <div className="mb-2 mb-md-3">
        <div className="row g-2">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="d-flex flex-column">
              <CFormLabel htmlFor="altTextFilter" className="mb-1 small">Alt Text:</CFormLabel>
              <CFormSelect
                id="altTextFilter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                size="sm"
                aria-label="Filter by Alt Text"
              >
                <option value="all">All</option>
                <option value="present">Present</option>
                <option value="null">Null</option>
              </CFormSelect>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="d-flex flex-column">
              <CFormLabel htmlFor="statusFilter" className="mb-1 small">Status:</CFormLabel>
              <CFormSelect
                id="statusFilter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                size="sm"
                aria-label="Filter by Status Code"
              >
                <option value="all">All</option>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="+others">Others</option>
              </CFormSelect>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column">
              <div className="mb-1" style={{ height: "1.25rem" }}></div>
              <CButton
                color="success"
                size="sm"
                className="text-white"
                onClick={downloadImageLinks}
                disabled={loading || !imageLinks || imageLinks.length === 0}
              >
                {loading ? "Exporting..." : "Export"}
              </CButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-responsive table wrapper */}
      <div>
        <table
          ref={tableRef}
          className="table table-striped table-bordered table-sm"
          style={{ width: "100%", minWidth: "600px" }}
        >
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Preview</th>
              <th style={{ minWidth: "200px" }}>Image Link</th>
              <th style={{ minWidth: "120px" }}>Alt Text</th>
              <th style={{ width: "80px" }}>Status</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>

       {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "50%",
            backgroundColor: "rgba(255,255,255,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          }}
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Enlarged Preview"
            style={{ maxWidth: "90%", maxHeight: "90%", cursor: "pointer" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#000",
              fontSize: "32px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={closeImage}
            title="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default CrawledUrlsTable;
