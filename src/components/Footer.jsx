import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold">Verde</span>
          </div>
          <p className="text-center text-xs text-gray-500 md:text-right">© {new Date().getFullYear()} Verde, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
