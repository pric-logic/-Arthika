
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { BudgetTracker } from '@/components/modules/BudgetTracker';
import { BusinessPlanning } from '@/components/modules/BusinessPlanning';
import { CommunityFeed } from '@/components/modules/CommunityFeed';
import { SkillLearning } from '@/components/modules/SkillLearning';
import { DocumentSimplifier } from '@/components/modules/DocumentSimplifier';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'budget':
        return <BudgetTracker />;
      case 'business':
        return <BusinessPlanning />;
      case 'community':
        return <CommunityFeed />;
      case 'learning':
        return <SkillLearning />;
      case 'documents':
        return <DocumentSimplifier />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          activeModule={activeModule}
          onModuleChange={setActiveModule}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            {renderActiveModule()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
