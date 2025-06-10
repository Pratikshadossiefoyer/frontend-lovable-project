
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Link
} from "lucide-react";

const projectStats = [
  { title: "SSL Certificate", value: "Secured", color: "text-emerald-600", icon: Shield, bgColor: "bg-emerald-50" },
  { title: "Google Analytics", value: "Connected", color: "text-blue-600", icon: BarChart3, bgColor: "bg-blue-50" },
  { title: "Favicon", value: "Present", color: "text-emerald-600", icon: CheckCircle2, bgColor: "bg-emerald-50" },
  { title: "Broken Pages", value: "1 Found", color: "text-red-600", icon: AlertCircle, bgColor: "bg-red-50" },
  { title: "Total Pages", value: "28 Links", color: "text-purple-600", icon: Link, bgColor: "bg-purple-50" }
];

export function SiteHealthCard() {
  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Site Health
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projectStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${stat.bgColor} transition-all hover:scale-105 cursor-pointer`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <IconComponent className={`w-4 h-4 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-slate-700">{stat.title}</span>
              </div>
              <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
