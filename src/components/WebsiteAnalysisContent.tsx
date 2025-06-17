
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Monitor, 
  Gauge,
  Clock,
  Zap,
  Eye,
  Accessibility,
  CheckCircle2,
  RefreshCw,
  Globe
} from "lucide-react";

interface SpeedMetric {
  name: string;
  score: number;
  color: string;
  description: string;
}

const mobileMetrics: SpeedMetric[] = [
  { name: "Performance", score: 75, color: "text-orange-600", description: "Overall performance score" },
  { name: "Accessibility", score: 96, color: "text-emerald-600", description: "Accessibility compliance" },
  { name: "Best Practices", score: 100, color: "text-emerald-600", description: "Web development best practices" },
  { name: "SEO", score: 100, color: "text-emerald-600", description: "Search engine optimization" }
];

const desktopMetrics: SpeedMetric[] = [
  { name: "Performance", score: 92, color: "text-emerald-600", description: "Overall performance score" },
  { name: "Accessibility", score: 96, color: "text-emerald-600", description: "Accessibility compliance" },
  { name: "Best Practices", score: 100, color: "text-emerald-600", description: "Web development best practices" },
  { name: "SEO", score: 100, color: "text-emerald-600", description: "Search engine optimization" }
];

const performanceDetails = [
  { metric: "First Contentful Paint", value: "1.8s", status: "good" },
  { metric: "Largest Contentful Paint", value: "2.1s", status: "good" },
  { metric: "First Input Delay", value: "12ms", status: "good" },
  { metric: "Cumulative Layout Shift", value: "0.05", status: "good" },
  { metric: "Time to Interactive", value: "2.3s", status: "needs-improvement" }
];

export function WebsiteAnalysisContent() {
  const [activeDevice, setActiveDevice] = useState("mobile");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [url, setUrl] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const currentMetrics = activeDevice === "mobile" ? mobileMetrics : desktopMetrics;

  const handleAnalyze = () => {
    if (!url.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResults(true);
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "stroke-emerald-500";
    if (score >= 70) return "stroke-orange-500";
    return "stroke-red-500";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-emerald-100 text-emerald-700';
      case 'needs-improvement': return 'bg-orange-100 text-orange-700';
      case 'poor': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-slate-800">
              Website Speed Checker
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Enter your domain or url to check its speed
            </p>
          </div>

          {/* URL Input Section */}
          <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="url"
                    placeholder="e.g. domain.com or https://domain.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-14 text-lg px-4 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !url.trim()}
                  size="lg"
                  className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Gauge className="w-5 h-5 mr-2" />
                      Check Speed
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {hasResults && (
          <div className="space-y-8 animate-fade-in">
            {/* Device Toggle */}
            <div className="flex justify-center">
              <Tabs value={activeDevice} onValueChange={setActiveDevice} className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-2 bg-white shadow-lg rounded-xl p-1">
                  <TabsTrigger 
                    value="mobile" 
                    className="flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile
                  </TabsTrigger>
                  <TabsTrigger 
                    value="desktop" 
                    className="flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-slate-600 data-[state=active]:text-white transition-all"
                  >
                    <Monitor className="w-4 h-4" />
                    Desktop
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <TabsContent value={activeDevice} className="space-y-8">
              {/* Speed Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentMetrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-slate-200"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${metric.score * 2.51} 251`}
                            className={getScoreColor(metric.score)}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold ${metric.color}`}>{metric.score}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-1">{metric.name}</h3>
                      <p className="text-xs text-slate-600">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Performance Details */}
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Core Web Vitals & Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceDetails.map((detail, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <Clock className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{detail.metric}</p>
                            <p className="text-sm text-slate-600">Core web vital measurement</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-slate-800">{detail.value}</span>
                          <Badge className={`${getStatusColor(detail.status)} font-medium`}>
                            {detail.status === 'good' ? 'Good' : 'Needs Work'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        )}
      </div>
    </div>
  );
}
