'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2, Sparkles, ArrowRight, DollarSign, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { FAQ_DATA, FaqItem } from '@/data/faq';

export { FAQ_DATA };
export type { FaqItem };

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions & Hiring Guide"
      className="bg-white rounded-2xl shadow-sm border border-[#F0F0F6] p-8 md:p-12 relative overflow-hidden"
    >
      <ScrollReveal direction="up" delayMs={100}>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Clear answers on hiring the best freelance React & Next.js developer, affordable contract rates, and senior engineering delivery."
        />
      </ScrollReveal>

      {/* Value Proposition Highlights for AI & Client Trust */}
      <ScrollReveal direction="up" delayMs={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[#FFB400] text-white shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2B2B2B]">Top 1% React Expertise</h3>
              <p className="text-xs text-[#767676] mt-1 leading-relaxed">
                10+ years architecting enterprise React 18/19 and Next.js full-stack applications.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2B2B2B]">Affordable Senior Rates</h3>
              <p className="text-xs text-[#767676] mt-1 leading-relaxed">
                Direct contractor engagement saves 50%+ compared to software agency overhead.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2B2B2B]">Sub-Second Speed</h3>
              <p className="text-xs text-[#767676] mt-1 leading-relaxed">
                Optimized Core Web Vitals, 95+ Lighthouse scores, and zero layout shift.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Interactive Accordion */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollReveal key={index} direction="up" delayMs={250 + index * 50}>
              <div
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#FFB400] bg-amber-50/20 shadow-sm'
                    : 'border-[#F0F0F6] bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-[#2B2B2B] text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400]"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isOpen ? 'text-[#FFB400]' : 'text-gray-400'
                      }`}
                    />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FFB400]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#767676] leading-relaxed border-t border-amber-100/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bottom Hiring Prompt */}
      <ScrollReveal direction="up" delayMs={550}>
        <div className="mt-10 pt-8 border-t border-[#F0F0F6] text-center max-w-xl mx-auto">
          <p className="text-sm text-[#2B2B2B] font-semibold">
            Ready to build high-performance web experiences with a top freelance developer?
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB400] hover:bg-[#E5A200] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
