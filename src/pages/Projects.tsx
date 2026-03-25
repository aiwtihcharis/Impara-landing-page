import React from "react";
import GsapReveal from "../components/GsapReveal";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-500/10 text-[#0a0a0a] dark:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <GsapReveal className="text-center mb-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            The Arsenal
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-semibold tracking-[-0.055em] leading-tight text-[#0a0a0a] dark:text-white mb-6">
            Stop watching tutorials.<br />
            <span className="font-serif italic font-normal text-blue-900/80 dark:text-blue-300/90">Start shipping reality.</span>
          </h1>
          <p className="text-[clamp(16px,2vw,20px)] text-[#0a0a0a]/70 dark:text-white/60 max-w-[600px] mx-auto leading-relaxed tracking-[-0.01em]">
            These aren't toys. These are production-grade systems. You will build them from scratch, and they will become the undeniable proof of your competence.
          </p>
        </GsapReveal>

        <div className="space-y-8 mb-24">
          {[
            {
              title: "Personal Knowledge Engine",
              meta: "CLI · Python · Phase I",
              tag: "Active",
              desc: "A command-line thinking prosthetic. Input ideas, tag them, retrieve by relevance. You will build a local vector database to search your own thoughts.",
              features: ["Local SQLite Storage", "TF-IDF Search Implementation", "Terminal UI"]
            },
            {
              title: "High-Performance Search Engine",
              meta: "Python · Algorithms · Phase II",
              tag: "Phase II",
              desc: "Implement indexed search from scratch. Understand why Google exists. You will crawl a dataset, build an inverted index, and serve sub-millisecond queries.",
              features: ["Web Crawler", "Inverted Indexing", "PageRank Algorithm"]
            },
            {
              title: "Visual Thought System",
              meta: "Web · JavaScript · Phase III",
              tag: "Phase III",
              desc: "An animated interface for your Knowledge Engine API. Your design background becomes executable. A fully responsive, accessible, and beautiful web client.",
              features: ["React / Next.js", "GSAP Animations", "RESTful API Integration"]
            },
            {
              title: "AI Research & Memory Agent",
              meta: "AI · Python · Phase IV",
              tag: "Phase IV",
              desc: "Reads articles, extracts concepts, stores long-term memory. Not a chatbot wrapper. You will build an agent that autonomously researches topics and synthesizes reports.",
              features: ["LLM Integration", "Vector Embeddings", "Autonomous Task Planning"]
            },
            {
              title: "Prison Test — Whiteboard System",
              meta: "Synthesis · Phase V",
              tag: "Phase V",
              desc: "Rebuild a full system from scratch without tutorials. The final proof. You will be locked in a room (metaphorically) until the system is live.",
              features: ["Full Stack Architecture", "Deployment Pipeline", "Zero External Help"]
            }
          ].map((p, i) => (
            <GsapReveal key={i} delay={i * 0.1}>
              <div className="p-8 md:p-10 rounded-[32px] bg-white/60 dark:bg-white/[0.08] border border-white/80 dark:border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.2)] backdrop-blur-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden group hover:bg-white/80 dark:hover:bg-white/[0.12] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-60 dark:opacity-50 pointer-events-none"></div>
                
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-bold text-[#0a0a0a]/40 dark:text-white/40">0{i+1}</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${p.tag === 'Active' ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-400/20 dark:border-blue-400/30' : 'bg-black/5 dark:bg-white/5 text-[#0a0a0a]/50 dark:text-white/50 border border-black/5 dark:border-white/10'}`}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-[#0a0a0a]/60 dark:text-white/60 mb-6 max-w-2xl leading-relaxed">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((feat, j) => (
                      <span key={j} className="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-md text-xs font-medium text-[#0a0a0a]/70 dark:text-white/70">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center group-hover:bg-[#0a0a0a] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#06101f] transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>

        <GsapReveal className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-6">
            Your portfolio is currently empty. Let's fix that.
          </h2>
          <a href="/" className="relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 text-white shadow-[0_5px_20px_rgba(37,99,235,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] text-base font-bold tracking-tight hover:bg-blue-700 transition-all overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              Start Building Now
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </a>
        </GsapReveal>
      </div>
    </div>
  );
}
