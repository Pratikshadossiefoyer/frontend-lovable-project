

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
              return '<div class="text-danger text-center">❌</div>';
            }
            return `<img src="${data}" alt="Preview" style="width:40px; height:auto; cursor:pointer; border-radius: 4px;" onerror="this.style.display='none'; this.nextSibling.style.display='block';" /><div style="display:none; font-size:0.7rem; color:#666;">No img</div>`;
          },
          searchable: false,
          orderable: false,
        },
        {
          title: "Image Link",
          data: "src",
          render: (data) => {
            if (data === "No image links found") return "N/A";

            const isMobile = window.innerWidth < 768;
            const maxLength = isMobile ? 25 : 40;
            const displayUrl = data.length > maxLength ? data.substring(0, maxLength) + "..." : data;

            return `
              <div class="d-flex align-items-center flex-wrap">
                <div class="text-truncate me-2 mb-1 mb-md-0" style="max-width: ${isMobile ? '150px' : '250px'}; font-size: ${isMobile ? '0.8rem' : '0.875rem'};">
                  ${displayUrl}
                </div>
                <div class="d-flex gap-2">
                  <button class="copy-url-btn btn btn-outline-primary btn-sm rounded-pill px-3 py-1" data-url="${data}" title="Copy URL">
                    <i class="fas fa-copy me-1"></i>Copy
                  </button>
                  <button class="external-link-icon btn btn-outline-secondary btn-sm rounded-pill px-3 py-1" data-url="${data}" title="Open link">
                    <i class="fas fa-external-link-alt me-1"></i>Open
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
              return `<span class="badge bg-light text-muted">NULL</span>`;
            }
            const isMobile = window.innerWidth < 768;
            const maxLength = isMobile ? 20 : 30;
            const displayText = data.length > maxLength ? data.substring(0, maxLength) + "..." : data;
            return `<span class="text-dark" title="${data}">${displayText}</span>`;
          },
        },
        {
          title: "Status",
          data: "status_code",
          render: (data) => {
            if (data === "NULL" || data === "") return `<span class="badge bg-secondary">NULL</span>`;
            const numericData = Number(data);
            let badgeClass = "bg-secondary";
            if (numericData >= 400) badgeClass = "bg-danger";
            else if (numericData >= 300) badgeClass = "bg-warning";
            else if (numericData >= 200) badgeClass = "bg-success";
            return `<span class="badge ${badgeClass}">${data}</span>`;
          },
        },
      ],
      order: [[2, "asc"]],
      drawCallback: function () {
        $(tableRef.current)
          .find("img")
          .off("click")
          .on("click", function () {
            const src = $(this).attr("src");
            setSelectedImage(src);
          });

        $(tableRef.current)
          .find(".copy-url-btn")
          .off("click")
          .on("click", function () {
            const $this = $(this);
            const url = $this.data("url");
            if (!url) {
              setAlert({ message: "No URL to copy", type: "warning" });
              return;
            }
            navigator.clipboard.writeText(url).then(() => {
              setCopiedUrl(url);
              $this.html('<i class="fas fa-check me-1"></i>Copied!');
              setTimeout(() => {
                $this.html('<i class="fas fa-copy me-1"></i>Copy');
                setCopiedUrl(null);
              }, 2000);
            }).catch(() => {
              setAlert({ message: "Failed to copy URL", type: "danger" });
            });
          });

        $(tableRef.current)
          .find(".external-link-icon")
          .off("click")
          .on("click", function () {
            const url = $(this).data("url");
            if (url) {
              window.open(url, "_blank", "noopener,noreferrer");
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
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: none;
        }

        .table thead th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          letter-spacing: 0.5px;
          border: none;
          padding: 16px 12px;
          text-transform: uppercase;
          font-size: 0.85rem;
          position: relative;
        }

        .table thead th:first-child {
          border-top-left-radius: 12px;
        }

        .table thead th:last-child {
          border-top-right-radius: 12px;
        }

        .table tbody tr {
          transition: all 0.3s ease;
          border: none;
          border-bottom: 1px solid #f1f5f9;
        }

        .table tbody tr:hover {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .table tbody td {
          padding: 16px 12px;
          vertical-align: middle;
          border: none;
          font-size: 0.9rem;
        }

        .table tbody tr:last-child td:first-child {
          border-bottom-left-radius: 12px;
        }

        .table tbody tr:last-child td:last-child {
          border-bottom-right-radius: 12px;
        }

        /* Status Badges */
        .badge {
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .badge.bg-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .badge.bg-danger {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
        }

        .badge.bg-warning {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }

        .badge.bg-secondary {
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%) !important;
          box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);
        }

        .badge.bg-light {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
          color: #64748b !important;
          border: 1px solid #e2e8f0;
        }

        /* Action Buttons */
        .btn {
          transition: all 0.3s ease;
          font-weight: 500;
          letter-spacing: 0.3px;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .btn-outline-primary {
          color: #3b82f6;
          border: 2px solid #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }

        .btn-outline-primary:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-outline-secondary {
          color: #6b7280;
          border: 2px solid #6b7280;
          background: rgba(107, 114, 128, 0.05);
        }

        .btn-outline-secondary:hover {
          background: #6b7280;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
        }

        .btn-sm {
          font-size: 0.75rem;
          padding: 6px 12px;
        }

        /* DataTables Styling */
        .dataTables_wrapper .dataTables_paginate .paginate_button {
          border-radius: 8px !important;
          margin: 0 2px;
          transition: all 0.2s ease;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border: none !important;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border: none !important;
        }

        .dataTables_wrapper .dataTables_length select,
        .dataTables_wrapper .dataTables_filter input {
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 12px;
          transition: all 0.2s ease;
        }

        .dataTables_wrapper .dataTables_length select:focus,
        .dataTables_wrapper .dataTables_filter input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          outline: none;
        }

        /* Image Preview Styling */
        .table img {
          border-radius: 8px;
          transition: all 0.2s ease;
          border: 2px solid #f1f5f9;
        }

        .table img:hover {
          transform: scale(1.05);
          border-color: #667eea;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .table thead th {
            padding: 12px 8px;
            font-size: 0.75rem;
          }

          .table tbody td {
            padding: 12px 8px;
            font-size: 0.8rem;
          }

          .btn-sm {
            font-size: 0.7rem;
            padding: 4px 8px;
          }

          .badge {
            font-size: 0.7rem;
            padding: 4px 8px;
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
          <thead className="table-dark">
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
