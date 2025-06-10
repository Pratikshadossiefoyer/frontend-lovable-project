
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RefreshCw,
  Clock,
  Database,
  Activity,
  Zap
} from "lucide-react";

interface CrawlStatusCardProps {
  isCrawling: boolean;
  onStartCrawling: () => void;
}

export function CrawlStatusCard({ isCrawling, onStartCrawling }: CrawlStatusCardProps) {
  return (
    <Card className="xl:col-span-2 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Crawl Analytics
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-500" />
                <span>Crawl #1</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>6/10/2025, 5:01:49 PM</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-semibold">
              <Activity className="w-4 h-4 mr-2" />
              70 URLs
            </Badge>
            <Button 
              onClick={onStartCrawling}
              disabled={isCrawling}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6"
            >
              {isCrawling ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Crawling...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Start Crawl
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isCrawling ? (
          <div className="text-center py-12">
            <div className="relative mx-auto mb-6">
              <div className="w-20 h-20 border-4 border-emerald-200 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Crawling in Progress</h3>
            <p className="text-slate-600">Analyzing your website structure and content...</p>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-orange-800">Crawl Cooldown Active</p>
                <p className="text-sm text-orange-600">Next crawl available in: 11h 39m 37s</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
