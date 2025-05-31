
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, CheckCircle, Globe } from "lucide-react";

const StatsOverview = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Participants",
      value: "2.4M",
      change: "+12% this week",
      color: "text-blue-600"
    },
    {
      icon: CheckCircle,
      label: "Decisions Made",
      value: "15,847",
      change: "+45 today",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      label: "Comments Posted",
      value: "892K",
      change: "+2.3K today",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      label: "Countries Participating",
      value: "193",
      change: "Global reach",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">
                  {stat.label}
                </div>
                <div className={`text-xs ${stat.color}`}>
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default StatsOverview;
