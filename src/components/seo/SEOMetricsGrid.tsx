
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Palette, 
  Image, 
  Code, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Video,
  Search
} from "lucide-react";

interface SEOMetricsGridProps {
  data: {
    word_count: number;
    css_links: string[];
    image_links: string[];
    js_links: string[];
    inbound_links: string[];
    outbound_links: string[];
    video_links: string[];
    search_engine_index: {
      content: string;
    };
  };
  projectId?: string;
  url?: string;
  url1?: string;
}

export function SEOMetricsGrid({ data, projectId, url, url1 }: SEOMetricsGridProps) {
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Word Count",
      value: data.word_count || 0,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      clickable: false
    },
    {
      title: "CSS Links",
      value: data.css_links?.length || 0,
      icon: Palette,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      clickable: true,
      route: "css-urls",
      data: data.css_links
    },
    {
      title: "Image Links",
      value: data.image_links?.length || 0,
      icon: Image,
      color: "text-green-600",
      bgColor: "bg-green-50",
      clickable: true,
      route: "images-link",
      data: data.image_links
    },
    {
      title: "JS Links",
      value: data.js_links?.length || 0,
      icon: Code,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      clickable: true,
      route: "javascript-urls",
      data: data.js_links
    },
    {
      title: "Inbound Links",
      value: data.inbound_links?.length || 0,
      icon: ArrowDownLeft,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      clickable: true,
      route: "inlink",
      data: data.inbound_links
    },
    {
      title: "Outbound Links",
      value: data.outbound_links?.length || 0,
      icon: ArrowUpRight,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      clickable: true,
      route: "outlink",
      data: data.outbound_links
    },
    {
      title: "Video Links",
      value: data.video_links?.length || 0,
      icon: Video,
      color: "text-red-600",
      bgColor: "bg-red-50",
      clickable: true,
      route: "video-link",
      data: data.video_links
    },
    {
      title: "Search Index Tag",
      value: data.search_engine_index?.content || "Not Found",
      icon: Search,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      clickable: false,
      isText: true
    }
  ];

  const handleMetricClick = (metric: any) => {
    if (!metric.clickable || metric.value === 0 || !projectId || !url || !url1) return;

    navigate(
      `/dashboard/manage-project/${projectId}/${encodeURIComponent(url)}/${encodeURIComponent(url1)}/${metric.route}`,
      { state: { [metric.route.replace('-', '')]: metric.data } }
    );
  };

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900">Page Metrics</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isClickable = metric.clickable && metric.value !== 0;
            
            return (
              <Card 
                key={index}
                className={`relative transition-all duration-200 ${
                  isClickable 
                    ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 border-slate-200 hover:border-slate-300' 
                    : 'cursor-default border-slate-100'
                }`}
                onClick={() => handleMetricClick(metric)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <Icon className={`h-5 w-5 ${metric.color}`} />
                    </div>
                    {isClickable && (
                      <Badge variant="secondary" className="text-xs">
                        View Details
                      </Badge>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">
                      {metric.title}
                    </p>
                    <p className={`text-2xl font-bold ${metric.color}`}>
                      {metric.isText ? (
                        <span className="text-sm font-medium">
                          {typeof metric.value === 'string' && metric.value.length > 20
                            ? `${metric.value.substring(0, 20)}...`
                            : metric.value
                          }
                        </span>
                      ) : (
                        metric.value
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
