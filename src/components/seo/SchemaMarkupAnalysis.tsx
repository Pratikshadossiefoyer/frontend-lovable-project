
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react";

interface SchemaMarkupAnalysisProps {
  schemaMarkup: any[];
}

export function SchemaMarkupAnalysis({ schemaMarkup }: SchemaMarkupAnalysisProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const hasSchema = schemaMarkup && schemaMarkup.length > 0;

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Code className="w-5 h-5 mr-2" />
          Schema Markup Analysis
          <Badge 
            variant={hasSchema ? "default" : "secondary"} 
            className={`ml-3 flex items-center ${hasSchema ? 'bg-green-100 text-green-700' : ''}`}
          >
            {hasSchema ? (
              <>
                <CheckCircle className="w-3 h-3 mr-1" />
                Found
              </>
            ) : (
              <>
                <XCircle className="w-3 h-3 mr-1" />
                Not Found
              </>
            )}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {!hasSchema ? (
          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
            <div className="flex items-center mb-2">
              <XCircle className="w-5 h-5 text-slate-500 mr-2" />
              <h4 className="font-semibold text-slate-700">No Schema Markup Detected</h4>
            </div>
            <p className="text-sm text-slate-600">
              Consider adding structured data markup to help search engines better understand your content.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-green-700">Schema Markup Found</h4>
              </div>
              <p className="text-sm text-green-600">
                {schemaMarkup.length} schema markup{schemaMarkup.length > 1 ? 's' : ''} detected on this page.
              </p>
            </div>

            <div className="space-y-3">
              {schemaMarkup.map((schema, index) => {
                const schemaItems = schema["@graph"] ? schema["@graph"] : [schema];
                const isExpanded = expandedItems.includes(index);

                return schemaItems.map((item: any, subIndex: number) => {
                  const itemIndex = index * 1000 + subIndex; // Unique index
                  const isItemExpanded = expandedItems.includes(itemIndex);

                  return (
                    <div key={itemIndex} className="border border-slate-200 rounded-lg">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {item["@type"]} Schema
                            </h4>
                            <p className="text-sm text-slate-600 mt-1">
                              Type: {item["@type"]} | Context: {item["@context"] || 'Not specified'}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(itemIndex)}
                            className="flex items-center"
                          >
                            {isItemExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Hide Code
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                View Code
                              </>
                            )}
                          </Button>
                        </div>

                        {isItemExpanded && (
                          <div className="mt-4">
                            <div className="p-4 bg-slate-900 rounded-lg overflow-x-auto">
                              <pre className="text-sm text-slate-100 whitespace-pre-wrap">
                                {JSON.stringify(item, null, 2)}
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
