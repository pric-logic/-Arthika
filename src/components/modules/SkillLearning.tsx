
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, CheckCircle2, Star, Play, Users, Trophy } from 'lucide-react';

export const SkillLearning = () => {
  const courses = [
    {
      title: 'Personal Finance Mastery',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      duration: '6 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 1245,
      category: 'Finance'
    },
    {
      title: 'Digital Marketing Basics',
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      duration: '8 hours',
      level: 'Beginner',
      rating: 4.6,
      students: 2156,
      category: 'Marketing'
    },
    {
      title: 'Entrepreneurship 101',
      progress: 20,
      totalLessons: 10,
      completedLessons: 2,
      duration: '5 hours',
      level: 'Beginner',
      rating: 4.9,
      students: 987,
      category: 'Business'
    }
  ];

  const todoTasks = [
    { task: 'Complete Module 3: Investment Strategies', course: 'Personal Finance Mastery', priority: 'High', dueDate: 'Today' },
    { task: 'Watch: Social Media Marketing Trends', course: 'Digital Marketing Basics', priority: 'Medium', dueDate: 'Tomorrow' },
    { task: 'Assignment: Create Business Model Canvas', course: 'Entrepreneurship 101', priority: 'High', dueDate: '3 days' },
    { task: 'Practice: Excel Financial Modeling', course: 'Personal Finance Mastery', priority: 'Low', dueDate: '1 week' },
  ];

  const achievements = [
    { title: 'First Course Completed', icon: '🎓', date: 'Last week' },
    { title: 'Finance Expert', icon: '💰', date: '2 weeks ago' },
    { title: 'Quick Learner', icon: '⚡', date: '1 month ago' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Skill Learning Hub</h1>
        <p className="text-gray-600">Master new skills with personalized learning paths</p>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Courses Enrolled</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Completed</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Learning Hours</p>
                <p className="text-2xl font-bold">45</p>
              </div>
              <Clock className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Certificates</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <Trophy className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Courses */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Current Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="p-4 bg-purple-50 rounded-lg space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-purple-800 mb-2">{course.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </div>
                          <Badge variant="outline" className="border-purple-300 text-purple-700">
                            {course.level}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {course.students}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning To-Do */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Learning To-Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todoTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="w-4 h-4 border-2 border-purple-400 rounded"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{task.task}</h4>
                      <p className="text-sm text-gray-600">{task.course}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                        className="mb-1"
                      >
                        {task.priority}
                      </Badge>
                      <p className="text-xs text-gray-500">{task.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-purple-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended Courses */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Recommended for You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'Advanced Excel for Finance', category: 'Finance', duration: '4 hours' },
                  { title: 'Leadership Skills', category: 'Career', duration: '6 hours' },
                  { title: 'Data Analysis Basics', category: 'Technology', duration: '8 hours' }
                ].map((course, index) => (
                  <div key={index} className="p-3 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                    <h4 className="font-medium text-sm mb-1">{course.title}</h4>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                        {course.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{course.duration}</span>
                    </div>
                    <Button size="sm" className="w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-xs">
                      Enroll Now
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Study Streak */}
          <Card className="border-purple-200 shadow-lg bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg">Study Streak 🔥</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">7 Days</div>
                <p className="text-sm text-orange-700 mb-4">Keep it up! You're on fire!</p>
                <div className="flex justify-center gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
