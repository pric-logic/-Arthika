import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, Briefcase, Globe, ArrowRight, Star, Users, TrendingUp, BookOpen } from 'lucide-react';
const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    agreeToTerms: false
  });
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Navigate to dashboard after successful login
    window.location.href = '/dashboard';
  };
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', registerData);
    // Navigate to dashboard after successful registration
    window.location.href = '/dashboard';
  };
  const features = [{
    icon: TrendingUp,
    title: "Smart Budget Tracking",
    description: "AI-powered insights to optimize your spending and savings",
    bgColor: "bg-pastel-mint"
  }, {
    icon: Briefcase,
    title: "Career Planning",
    description: "Strategic guidance for business growth and career advancement",
    bgColor: "bg-pastel-blue"
  }, {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with like-minded women on similar financial journeys",
    bgColor: "bg-pastel-lavender"
  }, {
    icon: BookOpen,
    title: "Skill Development",
    description: "Learn new skills to boost your earning potential",
    bgColor: "bg-pastel-pink"
  }];
  return <div className="min-h-screen bg-pastel-yellow/30">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              NISA
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-pastel-mint/50 px-3 py-2 rounded-full">
            <Globe className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">English</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Empower Your
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent block">
                  Financial Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of women taking control of their finances with AI-powered insights, 
                personalized guidance, and a supportive community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-pastel-pink/50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-pink-600">10K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center bg-pastel-mint/50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-green-600">$2M+</div>
                <div className="text-sm text-gray-600">Money Saved</div>
              </div>
              <div className="text-center bg-pastel-lavender/50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => <div key={index} className={`flex items-start gap-3 p-6 ${feature.bgColor}/50 rounded-2xl border border-white/50 shadow-sm`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur-md rounded-3xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">Welcome to NISA</CardTitle>
                <CardDescription className="text-gray-600">
                  Start your journey to financial empowerment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100/50 rounded-2xl p-1">
                    <TabsTrigger value="login" className="rounded-xl">Sign In</TabsTrigger>
                    <TabsTrigger value="register" className="rounded-xl">Sign Up</TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login" className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="login-email" type="email" placeholder="Enter your email" className="pl-10 rounded-2xl border-gray-200/50 bg-gray-50/50" value={loginData.email} onChange={e => setLoginData({
                          ...loginData,
                          email: e.target.value
                        })} required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="login-password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pl-10 pr-10 rounded-2xl border-gray-200/50 bg-gray-50/50" value={loginData.password} onChange={e => setLoginData({
                          ...loginData,
                          password: e.target.value
                        })} required />
                          <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 rounded-xl" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />
                          <Label htmlFor="remember" className="text-sm">Remember me</Label>
                        </div>
                        <Button variant="link" className="p-0 h-auto text-purple-500 hover:text-purple-600">
                          Forgot password?
                        </Button>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 rounded-2xl h-12 shadow-lg text-cyan-200">
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Register Tab */}
                  <TabsContent value="register" className="space-y-4">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="register-name" type="text" placeholder="Enter your full name" className="pl-10 rounded-2xl border-gray-200/50 bg-gray-50/50" value={registerData.name} onChange={e => setRegisterData({
                          ...registerData,
                          name: e.target.value
                        })} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="register-email" type="email" placeholder="Enter your email" className="pl-10" value={registerData.email} onChange={e => setRegisterData({
                          ...registerData,
                          email: e.target.value
                        })} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-occupation">Occupation</Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="register-occupation" type="text" placeholder="Your profession" className="pl-10" value={registerData.occupation} onChange={e => setRegisterData({
                          ...registerData,
                          occupation: e.target.value
                        })} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="register-password" type={showPassword ? "text" : "password"} placeholder="Create a password" className="pl-10 pr-10" value={registerData.password} onChange={e => setRegisterData({
                          ...registerData,
                          password: e.target.value
                        })} required />
                          <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="register-confirm-password" type={showPassword ? "text" : "password"} placeholder="Confirm your password" className="pl-10" value={registerData.confirmPassword} onChange={e => setRegisterData({
                          ...registerData,
                          confirmPassword: e.target.value
                        })} required />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" checked={registerData.agreeToTerms} onCheckedChange={checked => setRegisterData({
                        ...registerData,
                        agreeToTerms: checked as boolean
                      })} />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{' '}
                          <Button variant="link" className="p-0 h-auto text-purple-600">
                            Terms & Conditions
                          </Button>
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 rounded-2xl h-12 shadow-lg" disabled={!registerData.agreeToTerms}>
                        Create Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-pastel-blue/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Members Say</h2>
            <p className="text-gray-600">Join thousands of women who've transformed their financial lives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: "Sarah Johnson",
            role: "Small Business Owner",
            quote: "NISA helped me organize my finances and grow my business by 150% in just 6 months!",
            rating: 5,
            bgColor: "bg-pastel-yellow"
          }, {
            name: "Maria Garcia",
            role: "Marketing Professional",
            quote: "The community support and AI insights have been game-changing for my financial planning.",
            rating: 5,
            bgColor: "bg-pastel-pink"
          }, {
            name: "Aisha Patel",
            role: "Freelance Designer",
            quote: "Finally, a platform that understands the unique financial challenges women face.",
            rating: 5,
            bgColor: "bg-pastel-mint"
          }].map((testimonial, index) => <Card key={index} className={`${testimonial.bgColor}/50 border-0 shadow-lg rounded-3xl`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Landing;