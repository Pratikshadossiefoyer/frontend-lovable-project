
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Upload, 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Filter,
  Download,
  RefreshCw,
  Key,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const keywordData = [
  { keyword: "SEO tools", position: 3, change: 2, volume: 12000, difficulty: "Medium", url: "/seo-tools" },
  { keyword: "website analysis", position: 7, change: -1, volume: 8500, difficulty: "High", url: "/analysis" },
  { keyword: "digital marketing", position: 12, change: 5, volume: 25000, difficulty: "High", url: "/marketing" },
  { keyword: "web optimization", position: 15, change: 0, volume: 6200, difficulty: "Low", url: "/optimization" },
  { keyword: "site performance", position: 9, change: 3, volume: 4100, difficulty: "Medium", url: "/performance" }
];

export function KeywordRankingContent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [apiKeyGenerated, setApiKeyGenerated] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleGenerateApiKey = () => {
    setIsGeneratingKey(true);
    // Simulate API key generation
    setTimeout(() => {
      setIsGeneratingKey(false);
      setApiKeyGenerated(true);
      setHasApiKey(true);
    }, 2000);
  };

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

  // Show API Key generation interface first
  if (!hasApiKey) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-end">
          <Button 
            onClick={handleGenerateApiKey}
            disabled={isGeneratingKey}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-8"
          >
            {isGeneratingKey ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Key className="w-4 h-4 mr-2" />
            )}
            {isGeneratingKey ? 'Generating...' : 'Generate API Key'}
          </Button>
        </div>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 min-h-[400px] flex items-center justify-center">
          <CardContent className="text-center space-y-6 p-12">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Key className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Generate API Key
              </h2>
              <p className="text-lg text-slate-600 max-w-md mx-auto">
                Click the button below to generate your Google Custom Search API key to start searching.
              </p>
            </div>

            <Button 
              onClick={handleGenerateApiKey}
              disabled={isGeneratingKey}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-10 py-6 text-lg font-semibold"
            >
              {isGeneratingKey ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-3 animate-spin" />
                  Generating API Key...
                </>
              ) : (
                <>
                  <Key className="w-5 h-5 mr-3" />
                  Generate API Key
                </>
              )}
            </Button>

            {apiKeyGenerated && (
              <Alert className="max-w-md mx-auto bg-emerald-50 border-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <AlertDescription className="text-emerald-700">
                  API Key generated successfully! Loading keyword tracker...
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show the main keyword ranking interface after API key is generated
  return (
    <div className="space-y-6">
      {/* File Upload Section */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Keyword Ranking Tracker
          </CardTitle>
          <p className="text-slate-600">Upload your keyword file (CSV/TXT) to track rankings</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Keyword File (CSV/TXT)
              </label>
              <div className="relative">
                <Input
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileUpload}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-8"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Track Rankings
            </Button>
          </div>
          {selectedFile && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Keywords Table */}
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
    </div>
  );
}
