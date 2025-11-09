import React from 'react';
import { ShieldCheck, Sparkles, Globe2, Verified, Wifi, MessageSquare, MapPin } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
  </div>
);

export default function Features() {
  const items = [
    { icon: Sparkles, title: 'Apple-clean aesthetics', desc: 'Minimal, calm and premium visuals with thoughtful motion.' },
    { icon: Verified, title: 'Verified profiles', desc: 'Holographic identity cards and blue checks for trusted creators.' },
    { icon: MessageSquare, title: 'Realtime chat', desc: 'Instant conversations powered by websockets with presence.' },
    { icon: MapPin, title: 'Live geolocation', desc: 'Track events and pop-ups with graceful, privacy-first updates.' },
    { icon: Globe2, title: 'White-label blogs', desc: 'Publish branded editorial with SEO-friendly routes and tags.' },
    { icon: ShieldCheck, title: 'Compliance-minded', desc: 'Region-aware content gates and responsible access flows.' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50/40" id="features">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">What you can ship</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">Everything you need for a tasteful social platform: profiles, content, chat, and location — all in one clean suite.</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Feature key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
