import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidDots from "../components/LiquidDots";
import GsapReveal from "../components/GsapReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const parallaxBg = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Thanks for subscribing!");
    setEmail("");
  };

  useGSAP(() => {
    // Parallax background
    gsap.to(parallaxBg.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Timeline line drawing
    gsap.fromTo(".timeline-line", 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );

    // Sticky stacking projects
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card: any, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top ${150 + i * 20}px`,
        endTrigger: ".projects-container",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="relative w-full overflow-hidden text-[#0a0a0a]">
      {/* Parallax Background */}
      <div 
        ref={parallaxBg}
        className="fixed inset-0 -z-10 h-[120vh] bg-gradient-to-t from-[#e2e8f0] via-[#f8fafc] to-[#ffffff]"
      >
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Graphic Orbs */}
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[35%] right-[5%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <LiquidDots color="rgba(0,0,0,0.15)" />
        
        <GsapReveal delay={0.1} className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.8)] backdrop-blur-2xl text-[11px] font-bold tracking-widest uppercase text-[#0a0a0a]/70 mb-9 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-50 pointer-events-none"></div>
          <span className="relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
            CS & AI · 12-Month Roadmap · Zero → Architect
          </span>
        </GsapReveal>

        <GsapReveal delay={0.2} className="relative z-10">
          <h1 className="text-[clamp(46px,8.5vw,86px)] font-semibold tracking-[-0.055em] leading-[0.97] text-[#0a0a0a] mb-6 drop-shadow-sm">
            Build anything<br/><span className="font-serif italic font-normal tracking-[-0.02em] text-blue-900/80">you imagine.</span>
          </h1>
        </GsapReveal>

        <GsapReveal delay={0.3} className="relative z-10">
          <p className="text-[clamp(15px,2.2vw,18px)] text-[#0a0a0a]/70 max-w-[460px] mx-auto mb-11 leading-relaxed tracking-[-0.01em]">
            A structured path from pure computation to AI systems.
            One module at a time. No shortcuts. Only irreversible competence.
          </p>
        </GsapReveal>

        <GsapReveal delay={0.4} className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
          <a href="#curriculum" className="relative px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white shadow-[0_5px_15px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.2)] text-sm font-bold tracking-tight hover:opacity-90 transition-all flex items-center gap-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            <span className="relative z-10 flex items-center gap-2">
              Start learning
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </a>
          <a href="#projects" className="relative px-8 py-3.5 rounded-full bg-white/60 text-[#0a0a0a] text-sm font-semibold tracking-tight border border-white/80 shadow-[0_5px_15px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.8)] backdrop-blur-2xl hover:bg-white/80 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            <span className="relative z-10">Explore curriculum</span>
          </a>
        </GsapReveal>
      </section>

      {/* Connector */}
      <section className="flex flex-col items-center px-6 pb-20 pt-10">
        <div className="w-px h-24 bg-gradient-to-b from-black/10 to-transparent mb-8"></div>
        <GsapReveal>
          <div className="w-[60px] h-[60px] rounded-2xl bg-white/60 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.05)] backdrop-blur-3xl flex items-center justify-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
        </GsapReveal>
        <GsapReveal className="max-w-[540px] text-center">
          <p className="text-[clamp(18px,3.2vw,24px)] font-medium tracking-[-0.03em] leading-relaxed text-[#0a0a0a] drop-shadow-sm">
            Software is <span className="font-serif italic text-[#0a0a0a]/80">frozen thought.</span><br/>If you can think clearly, you can build anything.
          </p>
        </GsapReveal>
      </section>

      {/* Phases Timeline */}
      <section className="py-32 px-6" id="curriculum">
        <div className="max-w-4xl mx-auto">
          <GsapReveal className="text-center mb-24">
            <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              The Journey
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.045em] leading-tight text-[#0a0a0a] mb-4">
              Six phases.<br/><span className="font-serif italic font-normal text-[#0a0a0a]/70">One spine.</span>
            </h2>
          </GsapReveal>

          <div className="timeline-container relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2">
              <div className="timeline-line absolute top-0 left-0 w-full h-full bg-blue-500 origin-top"></div>
            </div>

            {[
              { num: "00", name: "Mental Rewiring", weeks: "Foundation · 2–3 days", desc: "Remove all mysticism. Computers are deterministic systems executing frozen thought — nothing more." },
              { num: "01", name: "Executable Thought", weeks: "Months 1–2", desc: "Python as a thinking tool. Variables, control flow, functions, data structures — logic made machine-readable." },
              { num: "02", name: "CS Core", weeks: "Months 3–4", desc: "Data structures and algorithmic thinking. The difference between systems that work and systems that collapse." },
              { num: "03", name: "Systems & Web", weeks: "Months 5–6", desc: "Memory, OS, concurrency, networking, JavaScript. Software that lives on machines and talks to the world." },
              { num: "04", name: "Intelligence", weeks: "Months 7–9", desc: "AI from first principles. Models, training, inference, agents. The architecture behind frontier products." },
              { num: "05", name: "Synthesis", weeks: "Months 10–12", desc: "The Prison Test. Rebuild a non-trivial system from scratch. No tutorials. Irreversible competence." }
            ].map((phase, i) => (
              <div key={i} className={`relative flex items-center justify-between w-full mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5 h-5 absolute left-1/2 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                <div className="w-[45%]"></div>
                <GsapReveal className="w-[45%]">
                  <div className="p-8 rounded-3xl bg-white/60 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] backdrop-blur-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="text-blue-600 font-mono text-sm font-bold mb-2">{phase.num}</div>
                      <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] mb-1">{phase.name}</h3>
                      <p className="text-xs font-bold text-[#0a0a0a]/40 uppercase tracking-wider mb-3">{phase.weeks}</p>
                      <p className="text-sm text-[#0a0a0a]/70 leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </GsapReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Stacking */}
      <section className="py-32 px-6" id="projects">
        <div className="max-w-5xl mx-auto">
          <GsapReveal className="mb-20 text-center">
            <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              What you ship
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.045em] leading-tight text-[#0a0a0a] mb-4">
              Five projects.<br/><span className="font-serif italic font-normal text-[#0a0a0a]/70">Each one real.</span>
            </h2>
          </GsapReveal>

          <div className="projects-container relative pb-[50vh]">
            {[
              { title: "Personal Knowledge Engine", meta: "CLI · Python · Phase I", tag: "Active", desc: "A command-line thinking prosthetic. Input ideas, tag them, retrieve by relevance." },
              { title: "High-Performance Search Engine", meta: "Python · Algorithms · Phase II", tag: "Phase II", desc: "Implement indexed search from scratch. Understand why Google exists." },
              { title: "Visual Thought System", meta: "Web · JavaScript · Phase III", tag: "Phase III", desc: "An animated interface for your Knowledge Engine API. Your design background becomes executable." },
              { title: "AI Research & Memory Agent", meta: "AI · Python · Phase IV", tag: "Phase IV", desc: "Reads articles, extracts concepts, stores long-term memory. Not a chatbot wrapper." },
              { title: "Prison Test — Whiteboard System", meta: "Synthesis · Phase V", tag: "Phase V", desc: "Rebuild a full system from scratch without tutorials. The final proof." }
            ].map((p, i) => (
              <div key={i} className="project-card w-full mb-6">
                <div className="p-8 md:p-10 rounded-[32px] bg-white/60 border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] backdrop-blur-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 pointer-events-none"></div>
                  <div className="flex-1 relative z-10">
                    <span className="text-xs font-bold text-[#0a0a0a]/40 mb-2 block">0{i+1}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a] mb-2">{p.title}</h3>
                    <p className="text-sm text-[#0a0a0a]/60 mb-4">{p.desc}</p>
                    <p className="text-xs font-medium text-[#0a0a0a]/40">{p.meta}</p>
                  </div>
                  <span className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${p.tag === 'Active' ? 'bg-blue-500/10 text-blue-600 border border-blue-400/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]' : 'bg-black/5 text-[#0a0a0a]/50 border border-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]'}`}>
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-6 text-center overflow-hidden border-t border-black/5 bg-[#f4f7fa]">
        <LiquidDots color="rgba(0,0,0,0.1)" />
        <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_65%)] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[600px] mx-auto">
          <GsapReveal>
            <h2 className="text-[clamp(34px,6vw,60px)] font-semibold tracking-[-0.055em] text-[#0a0a0a] leading-tight mb-6">
              You are not learning<br/>a language. You are learning<br/>to <span className="font-serif italic font-normal text-[#0a0a0a]/70">construct reality.</span>
            </h2>
          </GsapReveal>
          <GsapReveal delay={0.1}>
            <p className="text-base text-[#0a0a0a]/60 mb-10 leading-relaxed tracking-[-0.01em]">
              Start with computation. Finish with a system you can rebuild on a whiteboard.
              No tutorials. No magic. Only understanding.
            </p>
          </GsapReveal>
          <GsapReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <div className="relative w-full sm:max-w-[300px]">
                <div className="absolute inset-0 bg-white/60 rounded-full border border-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.02)] backdrop-blur-2xl pointer-events-none"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative z-10 px-6 py-3.5 bg-transparent text-sm text-[#0a0a0a] placeholder:text-[#0a0a0a]/40 focus:outline-none w-full rounded-full"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="relative px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white shadow-[0_5px_15px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.2)] text-sm font-bold tracking-tight hover:opacity-90 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f4f7fa] border-t border-black/5 py-8 px-10 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        <span className="text-[15px] font-bold tracking-tighter text-[#0a0a0a]">Im<span className="font-serif italic font-normal">para</span></span>
        <p className="text-xs font-medium text-[#0a0a0a]/40 tracking-wider uppercase">2026 Impara. A Product Of DVNM</p>
      </footer>
    </div>
  );
}
