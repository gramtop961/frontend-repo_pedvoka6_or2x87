import React from 'react';
import { Leaf, MessageCircle, MapPin, PenSquare, User } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="supports-backdrop-blur:bg-white/60 sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Verde</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#profiles" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"><User className="h-4 w-4"/>Profiles</a>
          <a href="#chat" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"><MessageCircle className="h-4 w-4"/>Chat</a>
          <a href="#map" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"><MapPin className="h-4 w-4"/>Live Map</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 md:inline-flex">
            <PenSquare className="mr-2 h-4 w-4"/>Write
          </button>
          <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
