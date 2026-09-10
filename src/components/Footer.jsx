import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-100 text-slate-500 border-t border-slate-200 text-center text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        <p className="font-hindi text-sm text-slate-700 font-medium">
          Horse Fire Tablet Copyright © 2026. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600 transition-colors">Report Issues</a>
        </div>
      </div>
    </footer>
  );
}
