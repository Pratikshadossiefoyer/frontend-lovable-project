
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy
} from "lucide-react";

interface SpeedMetric {
  name: string;
  score: number;
  color: string;
  description: string;
}

interface PerformanceIssue {
  title: string;
  impact: 'high' | 'medium' | 'low';
  description: string;
  element?: string;
  value: string;
  expanded?: boolean;
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

const performanceIssues: PerformanceIssue[] = [
  {
    title: "Largest Contentful Paint element",
    impact: 'high',
    description: "This is the largest contentful paint element observed on the page.",
    value: "27,750 ms",
    expanded: false
  },
  {
    title: "Avoid large layout shifts",
    impact: 'high',
    description: "These are the largest layout shifts observed on the page. Each table item represents a single layout shift.",
    value: "1 layout shift found",
    expanded: false
  },
  {
    title: "Reduce unused JavaScript",
    impact: 'medium',
    description: "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes.",
    value: "Est. savings of 385 KiB",
    expanded: false
  }
];

export function WebsiteSpeedContent() {
  const [activeDevice, setActiveDevice] = useState("mobile");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [expandedIssues, setExpandedIssues] = useState<number[]>([]);

  const currentMetrics = activeDevice === "mobile" ? mobileMetrics : desktopMetrics;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const toggleIssueExpanded = (index: number) => {
    setExpandedIssues(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "stroke-emerald-500";
    if (score >= 70) return "stroke-orange-500";
    return "stroke-red-500";
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">PageSpeed Insights</h1>
                <p className="text-slate-600">Analyze your website's performance across devices</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm">
                Docs
              </Button>
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Gauge className="w-4 h-4 mr-2" />
                    Analyze
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Device Toggle */}
        <Tabs value={activeDevice} onValueChange={setActiveDevice} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
              <TabsTrigger 
                value="mobile" 
                className="flex items-center gap-2 px-6 py-3 rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="desktop" 
                className="flex items-center gap-2 px-6 py-3 rounded-md data-[state=active]:bg-slate-600 data-[state=active]:text-white transition-all"
              >
                <Monitor className="w-4 h-4" />
                Desktop
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeDevice} className="space-y-8">
            {/* Speed Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {currentMetrics.map((metric, index) => (
                <Card key={index} className="bg-white shadow-sm border border-slate-200">
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
                    <h3 className="font-semibold text-slate-900 mb-1">{metric.name}</h3>
                    <p className="text-xs text-slate-600">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Issues */}
            <Card className="bg-white shadow-sm border border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  Opportunities
                </CardTitle>
                <p className="text-sm text-slate-600">
                  These suggestions can help your page load faster. They don't directly affect the Performance score.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {performanceIssues.map((issue, index) => (
                    <div key={index} className="p-6">
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleIssueExpanded(index)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-4 h-4 rounded-full mt-1 ${
                            issue.impact === 'high' ? 'bg-red-500' : 
                            issue.impact === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-900">{issue.title}</h4>
                            <p className="text-sm text-slate-600 mt-1">{issue.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-slate-700">{issue.value}</span>
                          {expandedIssues.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>
                      
                      {expandedIssues.includes(index) && (
                        <div className="mt-4 ml-8 p-4 bg-slate-50 rounded-lg">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700">Element</span>
                              <span className="text-sm font-medium text-slate-700">Layout shift score</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded border">
                              <div className="flex items-center space-x-3">
                                <div className="w-16 h-12 bg-yellow-200 rounded flex items-center justify-center text-xs font-medium">
                                  Technolearn
                                </div>
                                <div>
                                  <p className="text-sm text-slate-900">Are you looking to upskill or reskill in the dynamic world of Information Techn...</p>
                                  <code className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                    &lt;p class="mb-5"&gt;
                                  </code>
                                </div>
                              </div>
                              <span className="text-sm font-mono">0.161</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded border">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-orange-200 rounded flex items-center justify-center">
                                  <img src="/placeholder.svg" alt="logo" className="w-8 h-8" />
                                </div>
                                <div>
                                  <p className="text-sm text-slate-900">logo</p>
                                  <code className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                    &lt;img src="assets/img/techno-logo.png" alt="logo" width="137" height="33"&gt;
                                  </code>
                                  <p className="text-xs text-slate-500 mt-1">Media element lacking an explicit size</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Diagnostics */}
            <Card className="bg-white shadow-sm border border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                  Diagnostics
                </CardTitle>
                <p className="text-sm text-slate-600">
                  More information about the performance of your application.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">First Contentful Paint</span>
                      <span className="text-sm font-medium text-emerald-600">1.8s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Largest Contentful Paint</span>
                      <span className="text-sm font-medium text-red-600">27.8s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">First Input Delay</span>
                      <span className="text-sm font-medium text-emerald-600">10ms</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Cumulative Layout Shift</span>
                      <span className="text-sm font-medium text-red-600">0.161</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Speed Index</span>
                      <span className="text-sm font-medium text-orange-600">4.2s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Total Blocking Time</span>
                      <span className="text-sm font-medium text-emerald-600">20ms</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
