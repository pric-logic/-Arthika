
import React from 'react';
import { Menu, Bell, Search, Mic, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/components/UserProfile';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-purple-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              NISA
            </h1>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search anything..."
              className="pl-10 pr-12 bg-white/50 border-purple-200 focus:border-purple-400"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 hover:bg-purple-100"
            >
              <Mic className="h-4 w-4 text-purple-600" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-purple-100 relative">
            <Globe className="h-5 w-5 text-purple-600" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-purple-100 relative">
            <Bell className="h-5 w-5 text-purple-600" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-pink-500 text-xs">
              3
            </Badge>
          </Button>
          
          <UserProfile />
        </div>
      </div>
    </header>
  );
};
