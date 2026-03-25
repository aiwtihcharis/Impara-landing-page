import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import FloatingBackground from "./components/FloatingBackground";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Projects from "./pages/Projects";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-[#0a0a0a] font-sans overflow-x-hidden selection:bg-blue-500/30">
        <FloatingBackground />
        
        {/* Header */}
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-8 pointer-events-none">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#0a0a0a] pointer-events-auto">
            Im<span className="font-serif italic font-normal">para</span>
          </Link>
          
          <nav className="pointer-events-auto flex items-center justify-center px-8 py-3.5 bg-white/60 backdrop-blur-2xl rounded-full border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]">
            <ul className="flex gap-8 list-none m-0 p-0">
              <li><Link to="/curriculum" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-blue-600 transition-colors">Curriculum</Link></li>
              <li><Link to="/projects" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-blue-600 transition-colors">About</Link></li>
            </ul>
          </nav>
          
          <div className="w-[52px]"></div> {/* Spacer for balance */}
        </header>

        <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
