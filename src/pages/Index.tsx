
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, MessageSquare, Check, Clock } from "lucide-react";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";
import StatsOverview from "@/components/StatsOverview";

const Index = () => {
  const featuredTopics = [
    {
      id: 1,
      title: "Should cities worldwide implement car-free zones to combat climate change?",
      description: "Major cities are considering expanding pedestrian-only areas. What's the global consensus?",
      category: "Environment",
      timeLeft: "18 hours",
      totalVotes: 24567,
      yesVotes: 15890,
      comments: 892,
      status: "active"
    },
    {
      id: 2,
      title: "Universal Basic Income pilot programs: Should they be expanded globally?",
      description: "Multiple countries have tested UBI. Should this become a worldwide standard?",
      category: "Economics",
      timeLeft: "2 days",
      totalVotes: 18234,
      yesVotes: 12456,
      comments: 1203,
      status: "active"
    },
    {
      id: 3,
      title: "Mandatory digital literacy education in all schools by 2025?",
      description: "As technology advances, should digital skills be a required part of global curriculum?",
      category: "Education",
      timeLeft: "5 days",
      totalVotes: 31245,
      yesVotes: 24890,
      comments: 756,
      status: "trending"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The World Decides
            <span className="text-blue-600"> Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Every day, our world faces decisions that affect us all. Join millions of people 
            in thoughtful discussion and democratic decision-making on the issues that matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Join the Discussion
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Submit a Topic
            </Button>
          </div>
        </div>
      </section>

      <StatsOverview />

      {/* Today's Featured Decisions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Today's Global Decisions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the most important decisions the world is making today. Your voice matters.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discuss</h3>
              <p className="text-gray-600">
                Engage in meaningful conversations about global issues with people from around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Decide</h3>
              <p className="text-gray-600">
                Cast your vote on important decisions using our democratic voting systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                See how collective decisions influence real-world policies and changes globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Shape the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of engaged global citizens making decisions that matter.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started Today
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
