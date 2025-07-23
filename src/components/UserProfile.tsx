
import React, { useState } from 'react';
import { User, Settings, Camera, Globe, Edit3, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface UserProfileData {
  name: string;
  occupation: string;
  age: string;
  photo?: string;
  language: string;
  interests: string[];
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh', name: '中文' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' }
];

const interestOptions = [
  'Personal Finance', 'Investing', 'Real Estate', 'Entrepreneurship', 
  'Career Development', 'Tech Skills', 'Marketing', 'Leadership',
  'Health & Wellness', 'Education', 'Travel', 'Art & Creativity',
  'Sustainability', 'Cryptocurrency', 'Side Hustles', 'Networking'
];

export const UserProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newInterest, setNewInterest] = useState('');
  
  const [profile, setProfile] = useState<UserProfileData>({
    name: 'Sarah Johnson',
    occupation: 'Marketing Manager',
    age: '28',
    photo: '',
    language: 'en',
    interests: ['Personal Finance', 'Career Development', 'Investing']
  });

  const [editProfile, setEditProfile] = useState<UserProfileData>(profile);

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const addInterest = (interest: string) => {
    if (interest && !editProfile.interests.includes(interest)) {
      setEditProfile({
        ...editProfile,
        interests: [...editProfile.interests, interest]
      });
    }
    setNewInterest('');
  };

  const removeInterest = (interest: string) => {
    setEditProfile({
      ...editProfile,
      interests: editProfile.interests.filter(i => i !== interest)
    });
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === profile.language)?.name || 'English';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-purple-100 relative">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {profile.photo ? (
                <AvatarImage src={profile.photo} alt={profile.name} />
              ) : (
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              User Profile
            </span>
            {!isEditing ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="hover:bg-purple-100"
              >
                <Edit3 className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCancel}
                  className="hover:bg-red-100 text-red-600"
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSave}
                  className="hover:bg-green-100 text-green-600"
                >
                  <Save className="h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Profile Picture */}
          <div className="flex flex-col items-center space-y-3">
            <Avatar className="h-20 w-20">
              {(isEditing ? editProfile.photo : profile.photo) ? (
                <AvatarImage 
                  src={isEditing ? editProfile.photo : profile.photo} 
                  alt={isEditing ? editProfile.name : profile.name} 
                />
              ) : (
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl">
                  {(isEditing ? editProfile.name : profile.name).split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
            {isEditing && (
              <Button variant="outline" size="sm" className="gap-2">
                <Camera className="h-4 w-4" />
                Change Photo
              </Button>
            )}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            {isEditing ? (
              <Input
                id="name"
                value={editProfile.name}
                onChange={(e) => setEditProfile({...editProfile, name: e.target.value})}
                className="border-purple-200 focus:border-purple-400"
              />
            ) : (
              <p className="text-lg font-semibold text-gray-800">{profile.name}</p>
            )}
          </div>

          {/* Occupation */}
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            {isEditing ? (
              <Input
                id="occupation"
                value={editProfile.occupation}
                onChange={(e) => setEditProfile({...editProfile, occupation: e.target.value})}
                className="border-purple-200 focus:border-purple-400"
              />
            ) : (
              <p className="text-gray-700">{profile.occupation}</p>
            )}
          </div>

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            {isEditing ? (
              <Input
                id="age"
                type="number"
                value={editProfile.age}
                onChange={(e) => setEditProfile({...editProfile, age: e.target.value})}
                className="border-purple-200 focus:border-purple-400"
              />
            ) : (
              <p className="text-gray-700">{profile.age} years old</p>
            )}
          </div>

          {/* Language */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Language
            </Label>
            {isEditing ? (
              <Select
                value={editProfile.language}
                onValueChange={(value) => setEditProfile({...editProfile, language: value})}
              >
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <p className="text-gray-700 flex items-center gap-2">
                <Globe className="h-4 w-4 text-purple-600" />
                {getCurrentLanguageName()}
              </p>
            )}
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <Label>Interests</Label>
            <div className="flex flex-wrap gap-2">
              {(isEditing ? editProfile.interests : profile.interests).map((interest) => (
                <Badge 
                  key={interest} 
                  variant="secondary" 
                  className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                >
                  {interest}
                  {isEditing && (
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            
            {isEditing && (
              <div className="space-y-2">
                <Select onValueChange={addInterest}>
                  <SelectTrigger className="border-purple-200 focus:border-purple-400">
                    <SelectValue placeholder="Add an interest..." />
                  </SelectTrigger>
                  <SelectContent>
                    {interestOptions
                      .filter(option => !editProfile.interests.includes(option))
                      .map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Or type custom interest..."
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addInterest(newInterest);
                      }
                    }}
                  />
                  <Button
                    onClick={() => addInterest(newInterest)}
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Add
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
