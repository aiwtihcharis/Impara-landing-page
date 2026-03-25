import React from "react";
import { Link } from "react-router-dom";
import GsapReveal from "../components/GsapReveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center">
      <GsapReveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-50/50 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase text-blue-700 mb-9">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
        2026: Zero → Dangerous
      </GsapReveal>

      <GsapReveal delay={0.2}>
        <h1 className="text-[clamp(46px,8.5vw,96px)] font-semibold tracking-[-0.055em] leading-[0.95] text-[#0a0a0a] mb-6">
          Construct <span className="font-serif italic font-normal text-blue-700">Reality.</span>
        </h1>
      </GsapReveal>

      <GsapReveal delay={0.3}>
        <p className="text-[clamp(16px,2.2vw,20px)] text-[#0a0a0a]/70 max-w-[540px] mx-auto mb-12 leading-relaxed tracking-[-0.01em]">
          A precise execution map for taking you from absolute zero to building complex software systems under any constraint. No fluff. No shortcuts.
        </p>
      </GsapReveal>

      <GsapReveal delay={0.4} className="flex items-center justify-center gap-4 flex-wrap">
        <Link to="/curriculum" className="px-8 py-4 rounded-full bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25),inset_0_1px_2px_rgba(255,255,255,0.3)] text-sm font-bold tracking-tight hover:bg-blue-700 transition-all flex items-center gap-2">
          View the Curriculum
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
        <Link to="/projects" className="px-8 py-4 rounded-full bg-white/80 text-[#0a0a0a] text-sm font-semibold tracking-tight border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl hover:bg-white transition-all">
          See the Projects
        </Link>
      </GsapReveal>
    </div>
  );
}
