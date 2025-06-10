
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Eye, ExternalLink } from "lucide-react";

const crawledUrls = [
  {
    id: 1,
    url: "https://www.technolearn.in/",
    status: "200",
    h1: "Improving Operations Through Digital Innovation",
    index: "No",
    wordCount: 2151,
    canonical: "https://www.technolearn.in/",
    statusColor: "bg-emerald-500"
  },
  {
    id: 2,
    url: "https://www.technolearn.in/about.php",
    status: "200", 
    h1: "Navigate your next in Aerospace Technology",
    index: "No",
    wordCount: 1122,
    canonical: "https://www.technolearn.in/about.php",
    statusColor: "bg-emerald-500"
  },
  {
    id: 3,
    url: "https://www.technolearn.in/services/digital-services",
    status: "200",
    h1: "Infosys Sustainability Services",
    index: "No", 
    wordCount: 1023,
    canonical: "https://www.technolearn.in/services/",
    statusColor: "bg-emerald-500"
  },
  {
    id: 4,
    url: "https://www.technolearn.in/contact",
    status: "404",
    h1: "Page Not Found",
    index: "No", 
    wordCount: 0,
    canonical: "N/A",
    statusColor: "bg-red-500"
  },
];

export function CrawledUrlsTable() {
  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Crawled URLs
            </CardTitle>
            <p className="text-sm text-slate-600 mt-1">Detailed analysis of your website pages</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
              <Search className="w-4 h-4 mr-2" />
              Search URLs
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-900 hover:to-slate-800">
                <TableHead className="text-white font-bold text-sm">URL</TableHead>
                <TableHead className="text-white font-bold text-sm">Status</TableHead>
                <TableHead className="text-white font-bold text-sm">H1 Tag</TableHead>
                <TableHead className="text-white font-bold text-sm">Indexed</TableHead>
                <TableHead className="text-white font-bold text-sm">Words</TableHead>
                <TableHead className="text-white font-bold text-sm">Canonical</TableHead>
                <TableHead className="text-white font-bold text-sm text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crawledUrls.map((url) => (
                <TableRow key={url.id} className="hover:bg-slate-50/80 transition-colors">
                  <TableCell className="max-w-xs">
                    <div className="flex items-center gap-2">
                      <a 
                        href={url.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm truncate font-medium transition-colors"
                      >
                        {url.url}
                      </a>
                      <ExternalLink className="w-3 h-3 text-slate-400 hover:text-slate-600 transition-colors" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${url.statusColor} text-white text-xs font-semibold px-3 py-1`}>
                      {url.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <span className="text-sm text-slate-700 truncate block font-medium">{url.h1}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-700">
                      {url.index}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold text-slate-800">{url.wordCount.toLocaleString()}</span>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <span className="text-sm text-slate-600 truncate block">{url.canonical}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50">
                      <Eye className="w-4 h-4 text-blue-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
