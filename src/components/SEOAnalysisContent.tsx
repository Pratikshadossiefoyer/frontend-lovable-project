
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Copy, ExternalLink, Monitor, Smartphone, CheckCircle, XCircle } from "lucide-react";
import { SEOMetricsGrid } from "./seo/SEOMetricsGrid";
import { SERPPreview } from "./seo/SERPPreview";
import { HeadingsAnalysis } from "./seo/HeadingsAnalysis";
import { CanonicalAnalysis } from "./seo/CanonicalAnalysis";
import { SchemaMarkupAnalysis } from "./seo/SchemaMarkupAnalysis";

interface SEOData {
  found_link: string;
  status_code: number;
  title: string | string[];
  description: string | string[];
  word_count: number;
  css_links: string[];
  image_links: string[];
  js_links: string[];
  inbound_links: string[];
  outbound_links: string[];
  video_links: string[];
  canonical: string;
  headings: Record<string, string[]>;
  schema_markup: any[];
  search_engine_index: {
    content: string;
  };
}

export function SEOAnalysisContent() {
  const { projectId, url1, url } = useParams();
  const location = useLocation();
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copySuccess, setCopySuccess] = useState(false);

  // Mock data loading - replace with your actual data fetching logic
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Mock data - replace with actual data from your context/API
      setSeoData({
        found_link: url1 || 'https://example.com',
        status_code: 200,
        title: 'Example Page Title',
        description: 'Example page description for SEO analysis',
        word_count: 1234,
        css_links: ['style1.css', 'style2.css'],
        image_links: ['image1.jpg', 'image2.png'],
        js_links: ['script1.js', 'script2.js'],
        inbound_links: ['link1.com', 'link2.com'],
        outbound_links: ['external1.com', 'external2.com'],
        video_links: ['video1.mp4'],
        canonical: 'https://example.com/canonical',
        headings: {
          h1: ['Main Heading'],
          h2: ['Subheading 1', 'Subheading 2'],
          h3: ['Sub-subheading 1']
        },
        schema_markup: [],
        search_engine_index: {
          content: 'index, follow'
        }
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url1]);

  const handleCopyUrl = async () => {
    if (seoData?.found_link) {
      try {
        await navigator.clipboard.writeText(seoData.found_link);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy URL:', err);
      }
    }
  };

  const handleExternalLink = () => {
    if (seoData?.found_link) {
      window.open(seoData.found_link, '_blank', 'noopener,noreferrer');
    }
  };

  const getDomain = (url: string) => {
    try {
      const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
      return parsedUrl.hostname.replace('www.', '');
    } catch {
      return url || 'No Domain Available';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-slate-600">Loading SEO Analysis...</p>
        </div>
      </div>
    );
  }

  if (!seoData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
          <p className="text-slate-600">No SEO data found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">SEO Analysis</h1>
              <p className="text-slate-600">Comprehensive SEO analysis for your webpage</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Export Report
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Refresh Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* URL Status Card */}
        <Card className="bg-white shadow-sm border border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-900">Analyzed URL</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg border">
                  <span className="text-sm text-slate-700 flex-1 truncate">
                    {seoData.found_link}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyUrl}
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleExternalLink}
                    className="h-8 w-8 p-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                {copySuccess && (
                  <p className="text-xs text-green-600 mt-1">URL copied to clipboard!</p>
                )}
              </div>
              <div className="ml-6">
                <div className="text-sm text-slate-600 mb-1">Status</div>
                <Badge 
                  variant={seoData.status_code >= 400 ? "destructive" : "default"}
                  className="flex items-center space-x-1"
                >
                  {seoData.status_code >= 400 ? (
                    <XCircle className="h-3 w-3" />
                  ) : (
                    <CheckCircle className="h-3 w-3" />
                  )}
                  <span>{seoData.status_code} {seoData.status_code >= 400 ? 'Error' : 'Success'}</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device Toggle */}
        <div className="flex justify-center">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'desktop' | 'mobile')}>
            <TabsList className="bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
              <TabsTrigger 
                value="desktop" 
                className="flex items-center gap-2 px-6 py-3 rounded-md data-[state=active]:bg-slate-600 data-[state=active]:text-white transition-all"
              >
                <Monitor className="w-4 h-4" />
                Desktop
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                className="flex items-center gap-2 px-6 py-3 rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Mobile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* SERP Preview */}
        <SERPPreview 
          data={seoData}
          viewMode={viewMode}
          domain={getDomain(seoData.found_link)}
        />

        {/* SEO Metrics Grid */}
        <SEOMetricsGrid 
          data={seoData}
          projectId={projectId}
          url={url}
          url1={url1}
        />

        {/* Headings Analysis */}
        <HeadingsAnalysis headings={seoData.headings} />

        {/* Canonical Analysis */}
        <CanonicalAnalysis 
          canonical={seoData.canonical}
          currentUrl={seoData.found_link}
        />

        {/* Schema Markup Analysis */}
        <SchemaMarkupAnalysis schemaMarkup={seoData.schema_markup} />
      </div>
    </div>
  );
}
