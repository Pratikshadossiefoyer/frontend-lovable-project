
import React, { useState } from 'react';
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
import { 
  Calendar,
  Clock,
  FileText,
  Download,
  Eye,
  BarChart3,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const crawlHistory = [
  {
    id: 1,
    crawlId: "CRL-001",
    timestamp: "6/10/2025, 5:42:22 PM",
    status: "Completed",
    pagesFound: 45,
    issuesFound: 8,
    duration: "2m 34s"
  },
  {
    id: 2,
    crawlId: "CRL-002",
    timestamp: "6/09/2025, 3:15:18 PM", 
    status: "Completed",
    pagesFound: 42,
    issuesFound: 12,
    duration: "2m 18s"
  },
  {
    id: 3,
    crawlId: "CRL-003",
    timestamp: "6/08/2025, 1:30:45 PM",
    status: "Completed", 
    pagesFound: 40,
    issuesFound: 15,
    duration: "3m 02s"
  },
  {
    id: 4,
    crawlId: "CRL-004",
    timestamp: "6/07/2025, 11:22:10 AM",
    status: "Failed",
    pagesFound: 0,
    issuesFound: 0,
    duration: "0m 45s"
  },
  {
    id: 5,
    crawlId: "CRL-005",
    timestamp: "6/06/2025, 4:18:33 PM",
    status: "Completed",
    pagesFound: 38,
    issuesFound: 9,
    duration: "2m 55s"
  }
];

export function HistoryContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      case 'Running': return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const filteredHistory = crawlHistory.filter(item =>
    item.crawlId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.timestamp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-1">127</h3>
            <p className="text-emerald-100 text-sm">Total Crawls</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-1">2.3m</h3>
            <p className="text-blue-100 text-sm">Avg Duration</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-1">1,247</h3>
            <p className="text-purple-100 text-sm">Pages Analyzed</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-1">234</h3>
            <p className="text-orange-100 text-sm">Issues Found</p>
          </CardContent>
        </Card>
      </div>

      {/* Crawl History Table */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Crawl History
              </CardTitle>
              <p className="text-slate-600 mt-1">View your previous crawl results and historical data</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search crawls..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 border-slate-200 focus:border-blue-500"
                />
              </div>
              <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-900 hover:to-slate-800">
                  <TableHead className="text-white font-bold">Crawl ID</TableHead>
                  <TableHead className="text-white font-bold">Timestamp</TableHead>
                  <TableHead className="text-white font-bold">Status</TableHead>
                  <TableHead className="text-white font-bold">Pages</TableHead>
                  <TableHead className="text-white font-bold">Issues</TableHead>
                  <TableHead className="text-white font-bold">Duration</TableHead>
                  <TableHead className="text-white font-bold text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.map((crawl) => (
                  <TableRow key={crawl.id} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-medium text-blue-600 hover:text-blue-700">
                      {crawl.crawlId}
                    </TableCell>
                    <TableCell className="text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {crawl.timestamp}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(crawl.status)} font-medium`}>
                        {crawl.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-slate-800">
                      {crawl.pagesFound}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`${
                        crawl.issuesFound > 10 ? 'bg-red-100 text-red-700' :
                        crawl.issuesFound > 5 ? 'bg-orange-100 text-orange-700' :
                        'bg-emerald-100 text-emerald-700'
                      } font-medium`}>
                        {crawl.issuesFound}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-700 font-medium">
                      {crawl.duration}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-emerald-50">
                          <FileText className="w-4 h-4 text-emerald-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
