
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";

interface KeywordFileUploadProps {
  selectedFile: File | null;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function KeywordFileUpload({ selectedFile, onFileUpload }: KeywordFileUploadProps) {
  return (
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
                onChange={onFileUpload}
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
  );
}
