import React from 'react';
import { ShieldCheck, AlertTriangle, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

export const BengaliGuide: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-emerald-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">USA ট্রাফিক ডেটা গাইড (Bengali Guide)</h2>
          <p className="text-emerald-100 text-sm mt-1">আপনার প্রশ্নের উত্তর এবং নিরাপদ সমাধান</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="prose prose-slate max-w-none">
            <h3 className="text-lg font-bold text-slate-800">প্রশ্ন: এগুলো কি ১০০% রিয়েল ডেটা (100% Real Data)?</h3>
            <p className="text-slate-600">
              উত্তরটি একটু বোঝার বিষয়। নিচে সহজ করে দেওয়া হলো:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="flex items-center gap-2 font-bold text-green-800 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  যা ১০০% রিয়েল (Real)
                </h4>
                <ul className="text-sm text-green-700 space-y-2 list-disc list-inside">
                  <li><strong>লোকেশন:</strong> এখানের জিপ কোড (Zip Code), শহরের নাম এবং স্টেটের নাম ১০০% সঠিক।</li>
                  <li><strong>ম্যাপিং:</strong> নিউ ইয়র্কের জিপ কোড ক্যালিফোর্নিয়ায় দেখাবে না। এটি সঠিকভাবেই ম্যাপ করা।</li>
                  <li><strong>ফোন এরিয়া কোড:</strong> টেক্সাসের নাম্বারে টেক্সাসের এরিয়া কোডই থাকবে।</li>
                  <li><strong>ফরম্যাট:</strong> সব অ্যাড্রেস এবং নাম্বার আমেরিকার স্ট্যান্ডার্ড ফরম্যাটে।</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="flex items-center gap-2 font-bold text-red-800 mb-2">
                  <XCircle className="w-5 h-5" />
                  যা রিয়েল নয় (Fake/Mock)
                </h4>
                <ul className="text-sm text-red-700 space-y-2 list-disc list-inside">
                  <li><strong>ব্যক্তিগত পরিচয়:</strong> এই নামের কোনো ব্যক্তি ঐ ঠিকানায় থাকেন না।</li>
                  <li><strong>মালিকানা:</strong> এই ফোন নাম্বারটি বর্তমানে কারো ব্যক্তিগত ব্যবহারে নেই (সেফটি)।</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-700 font-medium">
              সহজ কথায়: সাইন-আপ করার সময় ওয়েবসাইট চেক করে "জিপ কোড এবং শহর মিলছে কিনা"। এই অ্যাপের ডেটা দিয়ে সেটা ১০০% কাজ করবে। কিন্তু তারা যদি পুলিশ ভেরিফিকেশন বা ব্যাংক চেক করে, তবে কাজ করবে না।
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 text-lg mb-2">সতর্কতা (Warning)</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  কারও সম্মতি ছাড়া তার আসল ব্যক্তিগত তথ্য (Real Private Data) ব্যবহার করা সম্পূর্ণ <strong>বেআইনি (Illegal)</strong>। একে Identity Theft বলে। ইন্টারনেটে কেউ "আসল মানুষের তথ্য" বিক্রি করলে তা কিনবেন না, এতে আপনার আইনি সমস্যা হতে পারে।
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              সাইন-আপ (Sign Up) বা টেস্টিং করবেন কীভাবে?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">এই অ্যাপ কীভাবে সাহায্য করবে?</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>উপরে <strong>"জেনারেটর"</strong> ট্যাবে যান।</li>
                        <li>সেখান থেকে সঠিক জিপ কোড ও অ্যাড্রেস কপি করুন।</li>
                        <li>বেশিরভাগ সাধারণ সাইন-আপে এটি কাজ করবে।</li>
                    </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">OTP বা SMS এর জন্য কী করব?</h4>
                    <p className="text-sm text-slate-600">
                        যেহেতু এই নাম্বারগুলো জেনারেটেড, তাই এতে SMS আসবে না। রিয়েল SMS ভেরিফিকেশনের জন্য আপনাকে <strong>Google Voice</strong> বা পেইড <strong>Virtual Number</strong> সার্ভিস ব্যবহার করতে হবে।
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};