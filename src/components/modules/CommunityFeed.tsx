
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share2, Bookmark, Plus, Users, TrendingUp } from 'lucide-react';

export const CommunityFeed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const posts = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: '👩🏽‍💼',
      time: '2 hours ago',
      content: 'Just hit my first ₹1L in savings! 🎉 Thanks to the budget tracking tips from this community. Remember, small steps lead to big wins! #FinancialGoals',
      likes: 234,
      comments: 18,
      tags: ['motivation', 'savings'],
      category: 'Success Story'
    },
    {
      id: 2,
      author: 'Anita Desai',
      avatar: '👩🏻‍💻',
      time: '4 hours ago',
      content: 'Looking for advice on starting a home-based bakery business. What licenses do I need? Any fellow food entrepreneurs here? 🧁',
      likes: 89,
      comments: 32,
      tags: ['business', 'food', 'help'],
      category: 'Question'
    },
    {
      id: 3,
      author: 'Meera Patel',
      avatar: '👩🏽‍🎓',
      time: '6 hours ago',
      content: 'Completed my digital marketing certification! Now targeting freelance clients. Here\'s my journey and tips for fellow learners 📚✨',
      likes: 156,
      comments: 24,
      tags: ['learning', 'career', 'freelance'],
      category: 'Achievement'
    }
  ];

  const trendingTopics = [
    { name: 'Investment Tips', posts: 145 },
    { name: 'Side Hustles', posts: 89 },
    { name: 'Career Growth', posts: 234 },
    { name: 'Financial Planning', posts: 167 },
    { name: 'Women Entrepreneurs', posts: 78 }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-800">Community Feed</h1>
          <p className="text-gray-600">Connect, share, and grow together</p>
        </div>
        <Button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Active Members</p>
                <p className="text-2xl font-bold">12,547</p>
              </div>
              <Users className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Posts Today</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <MessageCircle className="h-8 w-8 text-pink-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-indigo-100 text-sm">Your Connections</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <TrendingUp className="h-8 w-8 text-indigo-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Create Post Form */}
          {showCreatePost && (
            <Card className="border-purple-200 shadow-lg animate-scale-in">
              <CardHeader>
                <CardTitle className="text-purple-800">Share with Community</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="What's on your mind? Share your thoughts, achievements, or questions..." className="min-h-24" />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">#motivation</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">#business</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">#finance</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">#career</Badge>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                    Post
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreatePost(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts */}
          {posts.map((post) => (
            <Card key={post.id} className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-purple-800">{post.author}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">• {post.time}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-purple-300 text-purple-700">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 text-gray-600">
                      <Button variant="ghost" size="sm" className="hover:text-red-500 hover:bg-red-50">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-blue-500 hover:bg-blue-50">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-green-500 hover:bg-green-50">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-purple-500 hover:bg-purple-50">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors">
                    <span className="font-medium text-gray-700">#{topic.name}</span>
                    <span className="text-sm text-gray-500">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Connections */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Suggested Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Kavya Reddy', role: 'Financial Advisor', avatar: '👩🏽‍💼' },
                  { name: 'Riya Gupta', role: 'Tech Entrepreneur', avatar: '👩🏻‍💻' },
                  { name: 'Sneha Jain', role: 'Investment Banker', avatar: '👩🏽‍🎓' }
                ].map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-lg">{person.avatar}</div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{person.name}</p>
                      <p className="text-xs text-gray-500">{person.role}</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs border-purple-300 text-purple-700">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
