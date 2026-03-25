import React from "react";
import GsapReveal from "../components/GsapReveal";

export default function Curriculum() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-500/10 text-[#0a0a0a] dark:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <GsapReveal className="text-center mb-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-red-600 dark:text-red-400 mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 animate-pulse"></span>
            The Window is Closing
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-semibold tracking-[-0.055em] leading-tight text-[#0a0a0a] dark:text-white mb-6">
            The Complete <br />
            <span className="font-serif italic font-normal text-blue-900/80 dark:text-blue-300/90">Architect's Blueprint.</span>
          </h1>
          <p className="text-[clamp(16px,2vw,20px)] text-[#0a0a0a]/70 dark:text-white/60 max-w-[600px] mx-auto leading-relaxed tracking-[-0.01em]">
            While others memorize syntax, you will learn to construct reality. This is not a bootcamp. This is a 12-month cognitive rewiring designed to make you irreplaceable in the age of AI.
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            {
              num: "00",
              name: "Mental Rewiring",
              weeks: "Foundation · 2–3 days",
              desc: "Remove all mysticism. Computers are deterministic systems executing frozen thought. We strip away your bad habits and teach you how to think like a machine.",
              warning: "Crucial: 40% of applicants fail to pass this paradigm shift."
            },
            {
              num: "01",
              name: "Executable Thought",
              weeks: "Months 1–2",
              desc: "Python as a thinking tool. Variables, control flow, functions, data structures. You will stop reading code and start writing logic that bends the machine to your will.",
              warning: "Outcome: You will build a CLI tool that automates your daily workflow."
            },
            {
              num: "02",
              name: "CS Core",
              weeks: "Months 3–4",
              desc: "Data structures and algorithmic thinking. The difference between systems that work and systems that collapse under load. Big O, Graphs, Trees, Dynamic Programming.",
              warning: "Outcome: You will write a high-performance search engine from scratch."
            },
            {
              num: "03",
              name: "Systems & Web",
              weeks: "Months 5–6",
              desc: "Memory, OS, concurrency, networking, JavaScript. Software that lives on machines and talks to the world. You will understand the entire stack, from silicon to browser.",
              warning: "Outcome: A distributed, real-time web application."
            },
            {
              num: "04",
              name: "Intelligence",
              weeks: "Months 7–9",
              desc: "AI from first principles. Models, training, inference, agents. The architecture behind frontier products. You won't just use APIs; you will understand the math.",
              warning: "Outcome: A custom AI agent with long-term memory."
            },
            {
              num: "05",
              name: "Synthesis",
              weeks: "Months 10–12",
              desc: "The Prison Test. Rebuild a non-trivial system from scratch. No tutorials. No hand-holding. Irreversible competence. You either build it, or you start over.",
              warning: "Outcome: Absolute, undeniable mastery."
            }
          ].map((phase, i) => (
            <GsapReveal key={i} delay={i * 0.1}>
              <div className="h-full p-8 md:p-10 rounded-[32px] bg-white/60 dark:bg-white/[0.06] border border-white/80 dark:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.1)] backdrop-blur-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-60 dark:opacity-40 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-blue-600 dark:text-blue-400 font-mono text-lg font-bold">{phase.num}</div>
                    <div className="text-[10px] font-bold text-[#0a0a0a]/40 dark:text-white/40 uppercase tracking-widest px-3 py-1 rounded-full border border-black/5 dark:border-white/10">{phase.weeks}</div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-4">{phase.name}</h3>
                  <p className="text-sm text-[#0a0a0a]/70 dark:text-white/70 leading-relaxed mb-6 flex-grow">{phase.desc}</p>
                  <div className="pt-4 border-t border-black/5 dark:border-white/10">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{phase.warning}</p>
                  </div>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>

        <GsapReveal className="text-center bg-white/80 dark:bg-[#0a1930]/80 backdrop-blur-2xl p-12 rounded-[40px] border border-white dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] dark:text-white mb-6">
            Cohort 04 Closes in <span className="text-red-600 dark:text-red-400">7 Days</span>
          </h2>
          <p className="relative z-10 text-[#0a0a0a]/70 dark:text-white/70 max-w-2xl mx-auto mb-10">
            We strictly limit intake to 50 students per cohort to ensure uncompromising quality. 42 spots are already claimed. If you leave this page, your seat will likely be gone.
          </p>
          <a href="/" className="relative z-10 inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#0a0a0a] dark:bg-white text-white dark:text-[#06101f] shadow-[0_5px_20px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:shadow-[0_5px_20px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.8)] text-base font-bold tracking-tight hover:scale-105 transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 dark:from-white dark:to-white/80 to-transparent pointer-events-none"></div>
            <span className="relative z-10 flex items-center gap-2">
              Secure Your Spot Now
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </a>
          <p className="relative z-10 mt-4 text-xs font-medium text-[#0a0a0a]/40 dark:text-white/40 uppercase tracking-widest">Only 8 spots remaining</p>
        </GsapReveal>
      </div>
    </div>
  );
}
