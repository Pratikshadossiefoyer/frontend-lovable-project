
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Search,
  Copy,
  ExternalLink,
  BarChart3,
  Image,
  Code,
  Link,
  FileText,
  AlertCircle,
  CheckCircle2,
  Eye,
  Smartphone,
  Monitor
} from "lucide-react";

const headingsData = [
  {
    level: "H1",
    text: "IT Training",
    status: "duplicate",
    tags: ["IT Training", "in Pune: Technolearn"]
  },
  {
    level: "H2", 
    text: "Heading",
    status: "normal",
    tags: [
      "Why we are the Best Software Training Institute in Pune?",
      "Placements",
      "Software Training Institute in Pune with Placement: Your Career Launchpad",
      "Why Choose Technolearn?",
      "What Student Say About Our IT Training Institute",
      "WANT TO BECOME A TECHNICAL EXPERT?"
    ]
  },
  {
    level: "H3",
    text: "Heading", 
    status: "normal",
    tags: ["Our Software Courses in Pune: A Diverse Range of Options", "Contact Us"]
  }
];

const pageMetrics = [
  { title: "Word Count", value: "1454", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "CSS Links", value: "7", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "Image Links", value: "234", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "JS Links", value: "9", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "Inbound Links", value: "0", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "Outbound Links", value: "28", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "Video Links", value: "0", color: "text-orange-600", bgColor: "bg-orange-50" },
  { title: "Search Index Tag", value: "Meta Tag Not Found", color: "text-white", bgColor: "bg-gradient-to-r from-blue-500 to-teal-500" }
];

export function WebsiteAnalysisContent() {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Breadcrumb */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Home</span>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Dashboard</span>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Manage Project</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">technolearn</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">https://www.technolearn.in/</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('desktop')}
              className="h-10"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Desktop
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('mobile')}
              className="h-10"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile
            </Button>
          </div>
        </div>

        {/* URL Analysis Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Analyzed URL
              </CardTitle>
              <Badge className="bg-emerald-500 text-white px-4 py-2 font-semibold">
                200 Success
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-slate-700 font-medium">https://www.technolearn.in/</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Copy className="w-4 h-4 text-slate-600" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ExternalLink className="w-4 h-4 text-slate-600" />
                </Button>
              </div>
            </div>
            
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">technolearn.in</h3>
                  <p className="text-blue-700 text-sm mb-3">https://www.technolearn.in/</p>
                  <h4 className="text-xl font-bold text-orange-600 mb-2">
                    Best IT training Institute in Pune with placement: Technolearn
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    Technolearn: the best IT training institute in Pune. Discover a wide range of IT courses with expert faculty at our software training institute in Pune.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Title Word Count:</span>
                      <span className="font-bold text-slate-800">9</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Description Word Count:</span>
                      <span className="font-bold text-slate-800">25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Headings Analysis */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Headings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {headingsData.map((heading, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-slate-100 text-slate-700 font-bold px-3 py-1">
                    {heading.level} - Heading
                  </Badge>
                  {heading.status === 'duplicate' && (
                    <Badge className="bg-red-500 text-white font-medium px-3 py-1">
                      Duplicate
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {heading.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1 font-medium transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {index < headingsData.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Canonical URL */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Canonical URL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <Link className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                https://www.technolearn.in/
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Page Metrics */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Page Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pageMetrics.map((metric, index) => (
                <div key={index} className={`p-4 rounded-xl border ${metric.bgColor} transition-all hover:scale-105 cursor-pointer`}>
                  <div className="text-center">
                    <h3 className={`text-lg font-bold ${metric.color} mb-1`}>{metric.title}</h3>
                    <p className={`text-2xl font-bold ${metric.color === 'text-white' ? 'text-white' : 'text-slate-800'}`}>
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schema Markup */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Schema Markup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <AlertCircle className="w-6 h-6 text-slate-500" />
              <span className="text-slate-600 italic font-medium">No Schema Markup Detected</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-200/60">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <p className="font-medium">© 2025 SEO Detective - SEO TOOL</p>
            <div className="flex items-center gap-6">
              <a href="/terms-of-service" className="text-blue-600 hover:text-blue-700 underline font-medium">
                Terms & Conditions
              </a>
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                Privacy Policy
              </a>
              <p className="font-medium">Powered by <span className="text-blue-600 font-semibold">GrowBizz</span></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
