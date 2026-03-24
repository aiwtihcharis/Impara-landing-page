import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f4f7fa] text-[#0a0a0a] font-sans overflow-x-hidden">
        {/* Nav */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-8 py-3.5 bg-white/60 backdrop-blur-2xl rounded-full border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><Link to="/curriculum" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">Curriculum</Link></li>
            <li><Link to="/projects" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">Projects</Link></li>
            <li><Link to="/about" className="text-sm font-semibold tracking-wide text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
