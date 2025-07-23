
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, Brain, CheckCircle2, AlertCircle, Download, Mic } from 'lucide-react';

export const DocumentSimplifier = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const recentDocuments = [
    {
      name: 'Insurance Policy Terms',
      type: 'Insurance',
      status: 'Simplified',
      date: '2 hours ago',
      complexity: 'High',
      keyPoints: ['Coverage details', 'Premium structure', 'Claim process']
    },
    {
      name: 'Loan Agreement',
      type: 'Finance',
      status: 'Processing',
      date: '1 day ago',
      complexity: 'Medium',
      keyPoints: ['Interest rates', 'Repayment terms', 'Penalties']
    },
    {
      name: 'Investment Prospectus',
      type: 'Investment',
      status: 'Simplified',
      date: '3 days ago',
      complexity: 'High',
      keyPoints: ['Risk factors', 'Expected returns', 'Lock-in period']
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Document Simplifier</h1>
        <p className="text-gray-600">AI-powered document analysis and simplification</p>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Documents Processed</p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <FileText className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Simplified Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Time Saved</p>
                <p className="text-2xl font-bold">24h</p>
              </div>
              <Brain className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Accuracy Rate</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? 'border-purple-400 bg-purple-50' : 'border-gray-300 hover:border-purple-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 mx-auto text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Drop your document here
                </h3>
                <p className="text-gray-600 mb-4">
                  Support for PDF, DOC, DOCX, TXT files up to 10MB
                </p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Choose File
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  or paste text directly below
                </div>
              </div>
              
              {uploadedFile && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-600" />
                    <span className="text-green-800 font-medium">{uploadedFile}</span>
                    <Badge className="bg-green-100 text-green-800">Ready to process</Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Text Input */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Or Paste Text Directly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Paste your complex document text here..."
                  className="min-h-32 pr-12"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-2 top-2 p-1 hover:bg-purple-100"
                >
                  <Mic className="h-4 w-4 text-purple-600" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Brain className="h-4 w-4 mr-2" />
                  Simplify Document
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700">
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis Result */}
          <Card className="border-purple-200 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-purple-800">AI Analysis Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-purple-700 mb-2">Document Summary</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    This insurance policy document outlines coverage for health insurance with premium payments, claim procedures, and exclusions. The policy provides comprehensive medical coverage with a 2-year waiting period for pre-existing conditions.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-purple-700 mb-2">Key Points</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Monthly premium: ₹2,500</li>
                    <li>• Coverage amount: ₹5,00,000</li>
                    <li>• Waiting period: 2 years for pre-existing conditions</li>
                    <li>• Claim processing: 15-30 days</li>
                    <li>• Network hospitals: 3,000+ across India</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-purple-700 mb-2">Important Warnings</h4>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      Pre-existing conditions require 2-year waiting period. Make sure to declare all medical conditions during application.
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download Simplified Version
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Documents */}
        <div className="space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div key={index} className="p-3 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{doc.name}</h4>
                      <Badge 
                        variant={doc.status === 'Simplified' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {doc.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                        {doc.type}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          doc.complexity === 'High' ? 'border-red-300 text-red-700' : 
                          doc.complexity === 'Medium' ? 'border-yellow-300 text-yellow-700' : 
                          'border-green-300 text-green-700'
                        }`}
                      >
                        {doc.complexity}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{doc.date}</p>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Key points:</span> {doc.keyPoints.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Analyze Contract
              </Button>
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Legal Document Help
              </Button>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Financial Terms Guide
              </Button>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border-purple-200 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-orange-700">
                <p>• Use voice input for faster text entry</p>
                <p>• Upload multiple pages for batch processing</p>
                <p>• Save simplified versions for future reference</p>
                <p>• Ask follow-up questions about unclear terms</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
