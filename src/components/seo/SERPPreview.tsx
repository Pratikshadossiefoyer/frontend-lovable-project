
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface SERPPreviewProps {
  data: {
    found_link: string;
    title: string | string[];
    description: string | string[];
  };
  viewMode: 'desktop' | 'mobile';
  domain: string;
}

export function SERPPreview({ data, viewMode, domain }: SERPPreviewProps) {
  const titles = Array.isArray(data.title) 
    ? data.title 
    : typeof data.title === 'string' && data.title.trim()
      ? [data.title.trim()]
      : ['No Title Available'];

  const descriptions = Array.isArray(data.description)
    ? data.description
    : typeof data.description === 'string' && data.description.trim()
      ? [data.description.trim()]
      : ['No Description Available'];

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <ExternalLink className="w-5 h-5 mr-2" />
          SERP Preview ({viewMode === 'desktop' ? 'Desktop' : 'Mobile'})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className={`border border-slate-200 rounded-lg p-4 bg-white ${
          viewMode === 'mobile' ? 'max-w-sm mx-auto' : 'max-w-2xl'
        }`}>
          {/* Favicon and URL */}
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-slate-200 rounded-full mr-2 flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <div className="text-sm text-green-700 truncate font-medium">
                {domain}
              </div>
              <div className="text-xs text-slate-500 truncate">
                {data.found_link}
              </div>
            </div>
          </div>

          {/* Title and Description pairs */}
          <div className="space-y-4">
            {Math.max(titles.length, descriptions.length) > 0 && 
              Array.from({ length: Math.max(titles.length, descriptions.length) }).map((_, index) => (
                <div key={index} className="space-y-1">
                  {/* Title */}
                  {titles[index] && (
                    <div className="flex items-start justify-between">
                      <h3 className={`text-blue-600 hover:underline cursor-pointer font-medium leading-tight ${
                        viewMode === 'mobile' ? 'text-base' : 'text-lg'
                      }`}>
                        <a href={data.found_link} target="_blank" rel="noopener noreferrer">
                          {titles[index]}
                        </a>
                      </h3>
                      <span className="text-xs text-slate-400 ml-2 flex-shrink-0">
                        {titles[index].split(' ').length} words
                      </span>
                    </div>
                  )}
                  
                  {/* Description */}
                  {descriptions[index] && (
                    <div className="flex items-start justify-between">
                      <p className={`text-slate-600 leading-relaxed ${
                        viewMode === 'mobile' ? 'text-sm' : 'text-base'
                      }`}>
                        {descriptions[index]}
                      </p>
                      <span className="text-xs text-slate-400 ml-2 flex-shrink-0">
                        {descriptions[index].split(' ').length} words
                      </span>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
