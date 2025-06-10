
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Gauge,
  History,
  FileText,
  PieChart
} from "lucide-react";

interface ProjectTabsPlaceholderProps {
  icon: 'keyword' | 'speed' | 'history' | 'report' | 'compare';
  title: string;
  description: string;
}

const iconMap = {
  keyword: TrendingUp,
  speed: Gauge,
  history: History,
  report: FileText,
  compare: PieChart
};

const colorMap = {
  keyword: "from-emerald-500 to-emerald-600",
  speed: "from-blue-500 to-blue-600",
  history: "from-purple-500 to-purple-600",
  report: "from-orange-500 to-orange-600",
  compare: "from-pink-500 to-pink-600"
};

export function ProjectTabsPlaceholder({ icon, title, description }: ProjectTabsPlaceholderProps) {
  const IconComponent = iconMap[icon];
  const colorClass = colorMap[icon];

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
      <CardContent className="p-12 text-center">
        <div className={`w-20 h-20 bg-gradient-to-r ${colorClass} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}>
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 text-lg">{description}</p>
      </CardContent>
    </Card>
  );
}
