
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Clock, TrendingUp, Users } from "lucide-react";

interface TopicCardProps {
  topic: {
    id: number;
    title: string;
    description: string;
    category: string;
    timeLeft: string;
    totalVotes: number;
    yesVotes: number;
    comments: number;
    status: string;
  };
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const yesPercentage = (topic.yesVotes / topic.totalVotes) * 100;
  const noPercentage = 100 - yesPercentage;

  const getCategoryColor = (category: string) => {
    const colors = {
      Environment: 'bg-green-100 text-green-800',
      Economics: 'bg-blue-100 text-blue-800',
      Education: 'bg-purple-100 text-purple-800',
      Healthcare: 'bg-red-100 text-red-800',
      Technology: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getCategoryColor(topic.category)}>
                {topic.category}
              </Badge>
              {topic.status === 'trending' && (
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl leading-tight mb-2">
              {topic.title}
            </CardTitle>
            <CardDescription className="text-base">
              {topic.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Voting Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-green-600">Yes: {yesPercentage.toFixed(1)}%</span>
              <span className="text-red-600">No: {noPercentage.toFixed(1)}%</span>
            </div>
            <div className="flex h-3 rounded-full overflow-hidden bg-gray-200">
              <div 
                className="bg-green-500 transition-all duration-300"
                style={{ width: `${yesPercentage}%` }}
              />
              <div 
                className="bg-red-500 transition-all duration-300"
                style={{ width: `${noPercentage}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {topic.totalVotes.toLocaleString()} votes
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {topic.comments} comments
              </span>
            </div>
            <span className="flex items-center gap-1 text-orange-600 font-medium">
              <Clock className="w-4 h-4" />
              {topic.timeLeft} left
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              Vote Yes
            </Button>
            <Button variant="destructive" className="flex-1">
              Vote No
            </Button>
            <Button variant="outline" className="px-6">
              Discuss
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
