import React from 'react';
import { Home, DollarSign, Briefcase, Users, BookOpen, FileText, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  activeModule: string;
  onModuleChange: (module: string) => void;
  onClose: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'budget', label: 'Budget Tracker', icon: DollarSign },
  { id: 'business', label: 'Business Planning', icon: Briefcase },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'learning', label: 'Skill Learning', icon: BookOpen },
  { id: 'documents', label: 'Document Helper', icon: FileText },
  { id: 'chatbot', label: 'Chatbot', icon: MessageCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeModule,
  onModuleChange,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-md border-r border-purple-100 z-50 transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-purple-100 lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-purple-800">Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <nav className="p-4 pt-20 lg:pt-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeModule === item.id ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-12 rounded-xl transition-all duration-200",
                    activeModule === item.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200"
                      : "hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                  )}
                  onClick={() => {
                    if (item.id === 'chatbot') {
                      navigate('/chatbot');
                      onClose();
                    } else {
                      onModuleChange(item.id);
                      onClose();
                    }
                  }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};
