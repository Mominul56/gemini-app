import React, { useState } from 'react';
import { LayoutDashboard, Users, Sparkles, ShieldAlert, Globe, Home } from 'lucide-react';
import { ProfileGenerator } from './components/ProfileGenerator';
import { AIProfileGenerator } from './components/AIProfileGenerator';
import { BengaliGuide } from './components/BengaliGuide';
import { RealEstateGenerator } from './components/RealEstateGenerator';

enum Tab {
  GENERATOR = 'generator',
  AI_GENERATOR = 'ai-generator',
  REAL_ESTATE = 'real-estate',
  GUIDE = 'guide'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.GENERATOR);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none">MockUS</h1>
                <p className="text-xs text-slate-500 font-medium">USA Data Generator</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-1">
              <button
                onClick={() => setActiveTab(Tab.GENERATOR)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === Tab.GENERATOR
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  জেনারেটর
                </div>
              </button>
              <button
                onClick={() => setActiveTab(Tab.AI_GENERATOR)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === Tab.AI_GENERATOR
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI কাস্টম
                </div>
              </button>
              <button
                onClick={() => setActiveTab(Tab.REAL_ESTATE)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === Tab.REAL_ESTATE
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  রিয়েল এস্টেট (Real)
                </div>
              </button>
              <button
                onClick={() => setActiveTab(Tab.GUIDE)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === Tab.GUIDE
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  গাইড
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden bg-white border-b border-slate-200 p-2 flex justify-around">
         <button
            onClick={() => setActiveTab(Tab.GENERATOR)}
            className={`flex flex-col items-center p-2 rounded-lg ${activeTab === Tab.GENERATOR ? 'text-blue-600 bg-blue-50' : 'text-slate-500'}`}
          >
            <LayoutDashboard className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">জেনারেটর</span>
          </button>
          <button
            onClick={() => setActiveTab(Tab.AI_GENERATOR)}
            className={`flex flex-col items-center p-2 rounded-lg ${activeTab === Tab.AI_GENERATOR ? 'text-purple-600 bg-purple-50' : 'text-slate-500'}`}
          >
            <Sparkles className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">AI</span>
          </button>
          <button
            onClick={() => setActiveTab(Tab.REAL_ESTATE)}
            className={`flex flex-col items-center p-2 rounded-lg ${activeTab === Tab.REAL_ESTATE ? 'text-rose-600 bg-rose-50' : 'text-slate-500'}`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">বাড়ি</span>
          </button>
          <button
            onClick={() => setActiveTab(Tab.GUIDE)}
            className={`flex flex-col items-center p-2 rounded-lg ${activeTab === Tab.GUIDE ? 'text-emerald-600 bg-emerald-50' : 'text-slate-500'}`}
          >
            <ShieldAlert className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">গাইড</span>
          </button>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === Tab.GENERATOR && <ProfileGenerator />}
        {activeTab === Tab.AI_GENERATOR && <AIProfileGenerator />}
        {activeTab === Tab.REAL_ESTATE && <RealEstateGenerator />}
        {activeTab === Tab.GUIDE && <BengaliGuide />}
      </main>
    </div>
  );
};

export default App;