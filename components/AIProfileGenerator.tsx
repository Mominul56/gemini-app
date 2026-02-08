import React, { useState } from 'react';
import { Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { ProfileCard } from './ProfileCard';
import { UserProfile } from '../types';
import { generateAIProfile } from '../services/geminiService';

export const AIProfileGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const result = await generateAIProfile(prompt);
      setProfile(result);
    } catch (err) {
      setError("প্রোফাইল তৈরি করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">কাস্টম AI প্রোফাইল জেনারেটর</h2>
        <p className="text-slate-500 mt-2">আপনার কী ধরণের প্রোফাইল দরকার তা লিখুন, AI সেটি তৈরি করে দেবে।</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="space-y-4">
            <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 mb-1">
                    প্রোফাইলের বিবরণ লিখুন (ইংরেজিতে লিখলে ভালো হয়)
                </label>
                <textarea
                    id="prompt"
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none"
                    placeholder="যেমন: A 30-year-old software engineer living in Seattle, WA..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </div>
            <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white py-3 rounded-lg font-medium transition-colors flex justify-center items-center gap-2"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        তৈরি হচ্ছে...
                    </>
                ) : (
                    <>
                        <Sparkles className="w-5 h-5" />
                        AI দিয়ে জেনারেট করুন
                    </>
                )}
            </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
        </div>
      )}

      {profile && (
        <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">ফলাফল</span>
                <span className="text-sm text-slate-500">আপনার তথ্যের ভিত্তিতে তৈরি</span>
            </div>
            <div className="max-w-md mx-auto">
                 <ProfileCard profile={profile} />
            </div>
        </div>
      )}
      
      {!profile && !loading && (
         <div className="text-center py-10 opacity-50">
             <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto text-sm">
                 <div className="bg-slate-100 p-3 rounded cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => setPrompt("A wealthy doctor living in Beverly Hills, CA")}>
                    "বেভারলি হিলসের একজন ধনী ডাক্তার"
                 </div>
                 <div className="bg-slate-100 p-3 rounded cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => setPrompt("A university student in Boston, MA")}>
                    "বোস্টনের একজন ছাত্র"
                 </div>
                 <div className="bg-slate-100 p-3 rounded cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => setPrompt("A jazz musician in New Orleans, LA")}>
                    "নিউ অরলিন্সের একজন জাজ মিউজিশিয়ান"
                 </div>
                 <div className="bg-slate-100 p-3 rounded cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => setPrompt("A ranch owner in Texas")}>
                    "টেক্সাসের একজন খামারি"
                 </div>
             </div>
         </div>
      )}
    </div>
  );
};