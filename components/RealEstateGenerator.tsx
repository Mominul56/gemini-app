import React, { useState } from 'react';
import { Home, Search, Loader2, ExternalLink, MapPin } from 'lucide-react';
import { searchRealEstate, RealEstateResult } from '../services/geminiService';

export const RealEstateGenerator: React.FC = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<RealEstateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await searchRealEstate(location);
      setResult(data);
    } catch (err) {
      setError("তথ্য খুঁজে পেতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন বা শহরের নাম চেক করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4">
            <Home className="w-6 h-6 text-rose-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">USA রিয়েল এস্টেট সার্চ (Zillow Data)</h2>
        <p className="text-slate-500 mt-2">শহরের নাম বা জিপ কোড দিন, আমরা রিয়েল বিক্রয়যোগ্য বাড়ির তথ্য খুঁজে দেব।</p>
      </div>

      <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 sm:text-sm transition-all"
                    placeholder="City, State or Zip Code (e.g. Dallas, TX or 90210)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <button
                type="submit"
                disabled={loading || !location.trim()}
                className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 text-white px-6 py-3 rounded-lg font-medium transition-colors flex justify-center items-center gap-2 shrink-0"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        খোঁজা হচ্ছে...
                    </>
                ) : (
                    <>
                        <Search className="w-5 h-5" />
                        বাড়ি খুঁজুন
                    </>
                )}
            </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3">
            <Search className="w-5 h-5" />
            <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="animate-fade-in space-y-6">
            {/* Main Content */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">ফলাফল (Results)</h3>
                    <span className="text-xs font-medium bg-rose-100 text-rose-700 px-2 py-1 rounded">Live Search</span>
                </div>
                <div className="p-6 prose prose-slate max-w-none">
                    <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-sans text-sm md:text-base">
                        {result.text}
                    </div>
                </div>
            </div>

            {/* Sources / Zillow Links */}
            {result.sources.length > 0 && (
                <div className="bg-blue-50 rounded-xl border border-blue-100 p-5">
                    <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        সোর্স লিংক (Source Links) - Zillow/Redfin
                    </h4>
                    <div className="grid gap-2">
                        {result.sources.map((source, idx) => (
                            <a 
                                key={idx} 
                                href={source.uri} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-white p-3 rounded border border-blue-200 hover:border-blue-400 hover:shadow-sm transition-all group"
                            >
                                <span className="text-sm text-slate-700 truncate font-medium">{source.title}</span>
                                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-blue-700 mt-3 opacity-80">
                        * এই লিংকগুলোতে ক্লিক করে আপনি সরাসরি রিয়েল এস্টেট সাইটে গিয়ে বিস্তারিত দেখতে পারেন।
                    </p>
                </div>
            )}
        </div>
      )}
      
      {!result && !loading && (
         <div className="text-center py-8">
             <p className="text-sm text-slate-400">Google Search এর মাধ্যমে সরাসরি Zillow/Redfin থেকে রিয়েল ডেটা আনা হবে।</p>
         </div>
      )}
    </div>
  );
};