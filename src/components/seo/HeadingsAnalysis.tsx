
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Heading } from "lucide-react";

interface HeadingsAnalysisProps {
  headings: Record<string, string[]>;
}

export function HeadingsAnalysis({ headings }: HeadingsAnalysisProps) {
  const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Heading className="w-5 h-5 mr-2" />
          Headings Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {headingLevels.map((level) => {
          const levelHeadings = headings[level] || [];
          const hasMultiple = levelHeadings.length > 1;
          const isH1 = level === 'h1';
          
          if (levelHeadings.length === 0) {
            if (isH1) {
              return (
                <div key={level} className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-700">H1 Heading</h4>
                    <Badge variant="destructive" className="flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Missing
                    </Badge>
                  </div>
                  <p className="text-sm text-red-600">No H1 heading found. This is important for SEO.</p>
                </div>
              );
            }
            return null;
          }

          return (
            <div key={level} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">
                  {level.toUpperCase()} Heading{levelHeadings.length > 1 ? 's' : ''}
                </h4>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">
                    {levelHeadings.length} found
                  </Badge>
                  {isH1 && hasMultiple && (
                    <Badge variant="destructive" className="flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Multiple H1s
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {levelHeadings.map((heading, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200"
                  >
                    {heading}
                  </span>
                ))}
              </div>
              {isH1 && hasMultiple && (
                <p className="text-sm text-red-600 mt-2">
                  Multiple H1 headings detected. Consider using only one H1 per page for better SEO.
                </p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
