
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">DecideGlobal</h1>
              <p className="text-sm text-gray-500">Democracy in Action</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Today's Decisions
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Past Results
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Submit Topic
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 hover:bg-red-500">
                3
              </Badge>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
