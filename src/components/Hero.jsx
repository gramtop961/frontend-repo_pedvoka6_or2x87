import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Cannabis Social SaaS
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Clean, modern social platform for the cannabis community
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 md:text-lg">
              Publish white-label blogs, verified profiles, real-time chat, and live geolocation for on-the-spot drops and events. Designed with an Apple-like aesthetic and a fresh green vibe.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Get Started
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                Live Demo
              </button>
            </div>
          </div>
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-3xl border border-green-100 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)]">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
