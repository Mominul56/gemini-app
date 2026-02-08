import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import { ProfileCard } from './ProfileCard';
import { generateProfile } from '../utils/generator';
import { UserProfile } from '../types';

export const ProfileGenerator: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  const handleGenerate = () => {
    const newProfiles = Array(3).fill(null).map(() => generateProfile());
    setProfiles(newProfiles);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            USA Real Address Generator
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full border border-green-200">Verified</span>
          </h2>
          <p className="text-slate-500 mt-1">সাইন-আপ বা ফর্ম ফিলাপের জন্য ১০০% রিয়েল অ্যাড্রেস এবং জিপ কোড।</p>
        </div>
        <button
          onClick={handleGenerate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors flex items-center gap-2 active:transform active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          নতুন ডেটা লোড করুন
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 flex items-start gap-3 text-sm text-emerald-900">
          <div className="bg-emerald-100 p-1.5 rounded-full shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
              <p className="font-bold">১০০% ভ্যালিড অ্যাড্রেস (Valid Address):</p>
              <p className="mt-1 opacity-90">
                এই অ্যাড্রেসগুলো রিয়েল ডেটাবেস থেকে নেওয়া। <strong>Zip Code</strong> এর সাথে <strong>City</strong> এবং <strong>State</strong> পুরোপুরি মিলবে। যেকোনো সাইন-আপে "Address Not Found" এরর আসবে না।
              </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3 text-sm text-blue-900">
          <div className="bg-blue-100 p-1.5 rounded-full shrink-0">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <div>
              <p className="font-bold">সঠিক এরিয়া কোড (Correct Phone Area):</p>
              <p className="mt-1 opacity-90">
                জেনারেট করা ফোন নাম্বারের শুরু (Area Code) ঠিকানার শহরের সাথে মিল রাখা হয়েছে। যেমন: নিউ ইয়র্কের জন্য ২১২ (212) এবং লস এঞ্জেলেসের জন্য ২১৩ (213)।
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};