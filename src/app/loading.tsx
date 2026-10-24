import React from 'react';

/**
 * Loading:
 * Global loading UI / skeleton view displayed smoothly during page transitions.
 * Perfectly sized to match the main content area without layout shift.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading page content"
      className="w-full flex-1 flex flex-col gap-6 animate-pulse"
    >
      {/* Hero / Header Card Skeleton */}
      <div className="bg-white rounded-2xl border border-[#F0F0F6] p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
        <div className="space-y-4 max-w-lg">
          <div className="w-44 h-5 rounded-full bg-amber-100" />
          <div className="w-3/4 h-10 rounded-lg bg-gray-200" />
          <div className="w-full h-4 rounded bg-gray-200" />
          <div className="w-5/6 h-4 rounded bg-gray-200" />
        </div>
        <div className="flex gap-4 pt-6">
          <div className="w-32 h-11 rounded-lg bg-amber-300/80" />
          <div className="w-36 h-11 rounded-lg bg-gray-200" />
        </div>
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white rounded-xl border border-[#F0F0F6] p-6 h-48 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gray-200" />
            <div className="w-32 h-5 rounded bg-gray-200" />
            <div className="w-full h-3 rounded bg-gray-200" />
            <div className="w-4/5 h-3 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
