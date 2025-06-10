
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

const socialMediaStats = [
  { platform: "Facebook", color: "from-blue-600 to-blue-700", count: "1.2K", growth: "+12%" },
  { platform: "Instagram", color: "from-pink-500 to-pink-600", count: "856", growth: "+8%" },
  { platform: "LinkedIn", color: "from-blue-700 to-blue-800", count: "2.1K", growth: "+15%" }
];

export function SocialMediaStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {socialMediaStats.map((social, index) => (
        <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{social.platform}</h3>
            <div className="space-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{social.count}</p>
              <p className="text-sm font-semibold text-emerald-600">{social.growth} this month</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
