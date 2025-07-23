
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, Users, Lightbulb, Calendar, CheckCircle2 } from 'lucide-react';

export const BusinessPlanning = () => {
  const businessGoals = [
    { title: 'Launch Online Store', progress: 75, deadline: '2 weeks', status: 'In Progress' },
    { title: 'Complete Business Plan', progress: 90, deadline: '1 week', status: 'Almost Done' },
    { title: 'Secure Initial Funding', progress: 30, deadline: '1 month', status: 'Planning' },
    { title: 'Build Marketing Strategy', progress: 45, deadline: '3 weeks', status: 'In Progress' },
  ];

  const milestones = [
    { title: 'Business Registration', completed: true, date: 'Completed' },
    { title: 'Market Research', completed: true, date: 'Completed' },
    { title: 'Product Development', completed: false, date: 'In Progress' },
    { title: 'First Sale', completed: false, date: 'Upcoming' },
    { title: 'Scale Operations', completed: false, date: 'Future' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Business & Career Planning</h1>
        <p className="text-gray-600">Build your entrepreneurial journey with AI-powered insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm">Active Goals</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <Target className="h-8 w-8 text-emerald-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Progress Score</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Mentors Connected</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Users className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Ideas Generated</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Lightbulb className="h-8 w-8 text-pink-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Business Goals */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Current Business Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {businessGoals.map((goal, index) => (
              <div key={index} className="space-y-3 p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-purple-800">{goal.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={goal.status === 'Almost Done' ? 'default' : 'secondary'}>
                      {goal.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {goal.deadline}
                    </div>
                  </div>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="text-sm text-gray-600">{goal.progress}% complete</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Milestone Tracker */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-800">Business Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {milestone.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${milestone.completed ? 'text-green-700' : 'text-gray-700'}`}>
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-500">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="border-purple-200 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-purple-800">AI-Powered Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-700 mb-2">Market Opportunity</h4>
              <p className="text-sm text-gray-600 mb-3">
                Based on current trends, consider expanding into sustainable products - 67% growth potential identified.
              </p>
              <Button size="sm" variant="outline" className="border-purple-300 text-purple-700">
                Learn More
              </Button>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-700 mb-2">Skill Development</h4>
              <p className="text-sm text-gray-600 mb-3">
                Enhance your digital marketing skills to boost business reach. 3 relevant courses found.
              </p>
              <Button size="sm" variant="outline" className="border-purple-300 text-purple-700">
                View Courses
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl">
          <div className="text-center">
            <p className="font-medium">Create Business Plan</p>
            <p className="text-xs opacity-90">AI-assisted planning</p>
          </div>
        </Button>
        
        <Button className="h-16 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-xl">
          <div className="text-center">
            <p className="font-medium">Find Mentor</p>
            <p className="text-xs opacity-90">Connect with experts</p>
          </div>
        </Button>
        
        <Button className="h-16 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-xl">
          <div className="text-center">
            <p className="font-medium">Generate Ideas</p>
            <p className="text-xs opacity-90">AI brainstorming</p>
          </div>
        </Button>
      </div>
    </div>
  );
};
