
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Filter,
  Download
} from "lucide-react";

interface KeywordData {
  keyword: string;
  position: number;
  change: number;
  volume: number;
  difficulty: string;
  url: string;
}

const keywordData: KeywordData[] = [
  { keyword: "SEO tools", position: 3, change: 2, volume: 12000, difficulty: "Medium", url: "/seo-tools" },
  { keyword: "website analysis", position: 7, change: -1, volume: 8500, difficulty: "High", url: "/analysis" },
  { keyword: "digital marketing", position: 12, change: 5, volume: 25000, difficulty: "High", url: "/marketing" },
  { keyword: "web optimization", position: 15, change: 0, volume: 6200, difficulty: "Low", url: "/optimization" },
  { keyword: "site performance", position: 9, change: 3, volume: 4100, difficulty: "Medium", url: "/performance" }
];

export function KeywordsTable() {
  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-emerald-500" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-slate-400" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-emerald-600 bg-emerald-50";
    if (change < 0) return "text-red-600 bg-red-50";
    return "text-slate-600 bg-slate-50";
  };

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Keyword Rankings
            </CardTitle>
            <p className="text-slate-600 mt-1">Monitor your keyword positions and track changes</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search keywords..."
              className="pl-10 border-slate-200 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-900 hover:to-slate-800">
                <TableHead className="text-white font-bold">Keyword</TableHead>
                <TableHead className="text-white font-bold">Position</TableHead>
                <TableHead className="text-white font-bold">Change</TableHead>
                <TableHead className="text-white font-bold">Volume</TableHead>
                <TableHead className="text-white font-bold">Difficulty</TableHead>
                <TableHead className="text-white font-bold">URL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywordData.map((keyword, index) => (
                <TableRow key={index} className="hover:bg-slate-50/80 transition-colors">
                  <TableCell className="font-medium text-slate-800">{keyword.keyword}</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800 font-semibold">
                      #{keyword.position}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getChangeIcon(keyword.change)}
                      <Badge className={`${getChangeColor(keyword.change)} font-medium`}>
                        {keyword.change > 0 ? '+' : ''}{keyword.change}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">
                    {keyword.volume.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        keyword.difficulty === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                        keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      } font-medium`}
                    >
                      {keyword.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-blue-600 hover:text-blue-700 font-medium">
                    {keyword.url}
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
