import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LiquidDots({ color = 'rgba(0,0,0,0.2)' }: { color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const spacing = 24;
    const dots: { x: number, y: number, ox: number, oy: number }[] = [];

    const initDots = () => {
      dots.length = 0;
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };
    initDots();

    let mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      dots.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          const targetX = dot.ox - Math.cos(angle) * force * 30;
          const targetY = dot.oy - Math.sin(angle) * force * 30;
          
          dot.x += (targetX - dot.x) * 0.1;
          dot.y += (targetY - dot.y) * 0.1;
        } else {
          dot.x += (dot.ox - dot.x) * 0.1;
          dot.y += (dot.oy - dot.y) * 0.1;
        }

        ctx.beginPath();
        // Draw a micro-dot (ASCII-art style feel, very small)
        ctx.fillRect(dot.x - 1, dot.y - 1, 2, 2);
      });
    };

    gsap.ticker.add(render);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDots();
    };
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />;
}
