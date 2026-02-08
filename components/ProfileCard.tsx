import React from 'react';
import { Copy, MapPin, Phone, Mail, User } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileCardProps {
  profile: UserProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const Field = ({ label, value, icon: Icon }: { label: string, value: string, icon: any }) => (
    <div className="flex items-start group">
      <div className="mt-1 mr-3 text-slate-400">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="text-sm font-semibold text-slate-900 break-all">{value}</p>
      </div>
      <button 
        onClick={() => copyToClipboard(value)}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600"
        title="Copy"
      >
        <Copy className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                {profile.firstName[0]}{profile.lastName[0]}
            </div>
            <h3 className="font-bold text-slate-700">{profile.firstName} {profile.lastName}</h3>
        </div>
        <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-0.5 rounded">US-RESIDENT</span>
      </div>
      
      <div className="p-4 space-y-4">
        <Field label="নাম (Name)" value={`${profile.firstName} ${profile.lastName}`} icon={User} />
        <Field label="ইমেইল (Email)" value={profile.email} icon={Mail} />
        <Field label="ফোন (Phone)" value={profile.phone} icon={Phone} />
        
        <div className="pt-2 border-t border-slate-100 mt-2">
          <Field 
            label="ঠিকানা (Address)" 
            value={profile.street} 
            icon={MapPin} 
          />
          <div className="grid grid-cols-2 gap-4 mt-3 ml-7">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">শহর (City)</p>
              <p className="text-sm font-semibold text-slate-900">{profile.city}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">স্টেট (State)</p>
              <p className="text-sm font-semibold text-slate-900">{profile.state}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">জিপ কোড (Zip)</p>
              <p className="text-sm font-semibold text-slate-900">{profile.zipCode}</p>
            </div>
             <div>
              <p className="text-xs font-medium text-slate-500 uppercase">দেশ (Country)</p>
              <p className="text-sm font-semibold text-slate-900">{profile.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};