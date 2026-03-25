import React from "react";
import GsapReveal from "../components/GsapReveal";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-500/10 text-[#0a0a0a] dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <GsapReveal className="text-center mb-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            The Philosophy
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-semibold tracking-[-0.055em] leading-tight text-[#0a0a0a] dark:text-white mb-6">
            We don't teach syntax.<br />
            <span className="font-serif italic font-normal text-blue-900/80 dark:text-blue-300/90">We forge architects.</span>
          </h1>
          <p className="text-[clamp(16px,2vw,20px)] text-[#0a0a0a]/70 dark:text-white/60 max-w-[600px] mx-auto leading-relaxed tracking-[-0.01em]">
            The old way of learning is dead. Watching a 10-hour tutorial on React will not save you when the AI writes better React than you do.
          </p>
        </GsapReveal>

        <div className="space-y-12 mb-24">
          <GsapReveal>
            <div className="p-8 md:p-12 rounded-[40px] bg-white/60 dark:bg-white/[0.06] border border-white/80 dark:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.1)] backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-60 dark:opacity-40 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-6">The Problem</h2>
                <div className="space-y-4 text-[#0a0a0a]/70 dark:text-white/70 leading-relaxed">
                  <p>
                    Most coding bootcamps and online courses are selling you a lie. They teach you how to use a specific framework (React, Vue, Django) to build a specific app (a to-do list, a Twitter clone).
                  </p>
                  <p>
                    This creates <strong className="text-[#0a0a0a] dark:text-white">framework mechanics</strong>, not software engineers. When the framework changes, or when a new paradigm (like LLMs) emerges, these mechanics are rendered obsolete overnight.
                  </p>
                </div>
              </div>
            </div>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <div className="p-8 md:p-12 rounded-[40px] bg-white/60 dark:bg-white/[0.06] border border-white/80 dark:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.1)] backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-60 dark:opacity-40 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-6">The Impara Solution</h2>
                <div className="space-y-4 text-[#0a0a0a]/70 dark:text-white/70 leading-relaxed">
                  <p>
                    We go deeper. We teach you the fundamental physics of computation. How memory works. How networks communicate. How algorithms scale. How intelligence is simulated.
                  </p>
                  <p>
                    When you understand the primitives, the frameworks become trivial. You stop being a consumer of tools and start becoming a creator of systems. You become an <strong className="text-[#0a0a0a] dark:text-white">Architect</strong>.
                  </p>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>

        <GsapReveal className="text-center bg-white/80 dark:bg-[#0a1930]/80 backdrop-blur-2xl p-12 rounded-[40px] border border-white dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-6">
            Are you ready to do the work?
          </h2>
          <p className="relative z-10 text-[#0a0a0a]/70 dark:text-white/70 max-w-2xl mx-auto mb-10">
            This will be the hardest intellectual challenge of your life. There are no shortcuts. But if you make it through, you will possess a superpower.
          </p>
          <a href="/" className="relative z-10 inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#0a0a0a] dark:bg-white text-white dark:text-[#06101f] shadow-[0_5px_20px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:shadow-[0_5px_20px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.8)] text-base font-bold tracking-tight hover:scale-105 transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 dark:from-white dark:to-white/80 to-transparent pointer-events-none"></div>
            <span className="relative z-10 flex items-center gap-2">
              Join the Vanguard
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </a>
        </GsapReveal>
      </div>
    </div>
  );
}
