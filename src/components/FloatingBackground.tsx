import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayersIcon, EvolveIcon, DimensionIcon, FlowIcon, VolumeIcon, MatrixIcon } from "./AlphaIcons";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const icons = gsap.utils.toArray(".parallax-icon");
    icons.forEach((icon: any, i) => {
      const speed = parseFloat(icon.dataset.speed || "1");
      gsap.to(icon, {
        y: () => -150 * speed,
        rotation: i % 2 === 0 ? 25 : -25,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc]">
      {/* Subtle progressive gradient referencing the image (white to blue) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_0%,rgba(59,130,246,0.05)_50%,rgba(30,64,175,0.1)_100%)]"></div>
      
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Floating Alpha Icons */}
      <LayersIcon data-speed="2" className="parallax-icon absolute top-[15%] left-[10%] w-32 h-32 opacity-30 blur-[1px]" />
      <EvolveIcon data-speed="1.5" className="parallax-icon absolute top-[40%] right-[15%] w-48 h-48 opacity-20 blur-[2px]" />
      <DimensionIcon data-speed="3" className="parallax-icon absolute top-[70%] left-[20%] w-40 h-40 opacity-40" />
      <FlowIcon data-speed="1" className="parallax-icon absolute top-[25%] right-[25%] w-24 h-24 opacity-30 blur-[1px]" />
      <VolumeIcon data-speed="2.5" className="parallax-icon absolute top-[80%] right-[10%] w-36 h-36 opacity-30" />
      <MatrixIcon data-speed="1.8" className="parallax-icon absolute top-[55%] left-[5%] w-20 h-20 opacity-20 blur-[1px]" />
    </div>
  );
}
