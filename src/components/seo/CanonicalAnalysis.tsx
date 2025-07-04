
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, AlertTriangle, CheckCircle } from "lucide-react";

interface CanonicalAnalysisProps {
  canonical: string;
  currentUrl: string;
}

export function CanonicalAnalysis({ canonical, currentUrl }: CanonicalAnalysisProps) {
  const canonicalUrls = canonical ? canonical.split(',').map(url => url.trim()) : [];
  const hasMultipleCanonicals = canonicalUrls.length > 1;
  const isCanonicalized = canonical && currentUrl !== canonicalUrls[0];

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Link2 className="w-5 h-5 mr-2" />
          Canonical URL Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {!canonical ? (
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
              <h4 className="font-semibold text-yellow-700">No Canonical URL Found</h4>
            </div>
            <p className="text-sm text-yellow-600">
              Consider adding a canonical URL to help search engines understand the preferred version of this page.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900">Canonical URL</h4>
                <div className="flex items-center space-x-2">
                  {!hasMultipleCanonicals && !isCanonicalized && (
                    <Badge variant="default" className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Valid
                    </Badge>
                  )}
                  {isCanonicalized && (
                    <Badge variant="secondary">
                      Canonicalized
                    </Badge>
                  )}
                  {hasMultipleCanonicals && (
                    <Badge variant="destructive" className="flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Multiple
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                {canonicalUrls.map((url, index) => (
                  <div key={index} className="p-2 bg-slate-50 rounded border text-sm font-mono">
                    {url}
                  </div>
                ))}
              </div>
            </div>

            {isCanonicalized && (
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-700 mb-2">Canonicalization Detected</h4>
                <p className="text-sm text-blue-600">
                  The current URL differs from the canonical URL. This indicates that this page 
                  is canonicalized to another URL.
                </p>
              </div>
            )}

            {hasMultipleCanonicals && (
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <h4 className="font-semibold text-red-700 mb-2">Multiple Canonical URLs</h4>
                <p className="text-sm text-red-600">
                  Multiple canonical URLs detected. This can confuse search engines and should be fixed.
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
