import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapReveal({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.from(ref.current, {
      y: 60,
      opacity: 0,
      filter: 'blur(12px)',
      duration: 1.2,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: ref });

  return <div ref={ref} className={className}>{children}</div>;
}
