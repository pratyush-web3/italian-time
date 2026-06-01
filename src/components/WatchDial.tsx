import { useEffect, useRef } from "react";
import gsap from "gsap";

export function WatchDial() {
  const containerRef = useRef<SVGSVGElement>(null);
  const ring1Ref = useRef<SVGGElement>(null);
  const ring2Ref = useRef<SVGGElement>(null);
  const gearRef = useRef<SVGGElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!ring1Ref.current || !ring2Ref.current || !gearRef.current || !pulseRef.current) return;

    gsap.to(ring1Ref.current, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    gsap.to(ring2Ref.current, {
      rotation: -360,
      duration: 60,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    gsap.to(gearRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    gsap.to(pulseRef.current, {
      scale: 1.2,
      opacity: 0.5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center center"
    });

  }, []);

  return (
    <svg 
      ref={containerRef}
      viewBox="0 0 400 400" 
      className="w-full h-full max-w-2xl mx-auto opacity-80"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="dialGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="190" fill="url(#dialGlow)" />
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Grid lines */}
      <g opacity="0.1" stroke="currentColor" strokeWidth="1">
        <line x1="200" y1="10" x2="200" y2="390" />
        <line x1="10" y1="200" x2="390" y2="200" />
        <line x1="66" y1="66" x2="334" y2="334" />
        <line x1="66" y1="334" x2="334" y2="66" />
      </g>

      {/* Ticks */}
      <g stroke="currentColor" opacity="0.4">
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6 * Math.PI) / 180;
          const isMajor = i % 5 === 0;
          const r1 = isMajor ? 175 : 182;
          const r2 = 188;
          const x1 = 200 + r1 * Math.cos(angle);
          const y1 = 200 + r1 * Math.sin(angle);
          const x2 = 200 + r2 * Math.cos(angle);
          const y2 = 200 + r2 * Math.sin(angle);
          return (
            <line 
              key={i} 
              x1={x1} 
              y1={y1} 
              x2={x2} 
              y2={y2} 
              strokeWidth={isMajor ? 2 : 1}
              className={isMajor ? "text-accent" : "text-foreground"}
            />
          );
        })}
      </g>

      {/* Rotating Ring 1 */}
      <g ref={ring1Ref}>
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <path d="M 200 50 A 150 150 0 0 1 350 200" stroke="var(--color-accent)" strokeWidth="2" fill="none" opacity="0.8" />
      </g>

      {/* Rotating Ring 2 */}
      <g ref={ring2Ref}>
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 200 + 100 * Math.cos(angle);
          const y = 200 + 100 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.5" />;
        })}
      </g>

      {/* Gear */}
      <g ref={gearRef} stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0.6">
        <circle cx="200" cy="200" r="60" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 200 + 60 * Math.cos(angle);
          const y1 = 200 + 60 * Math.sin(angle);
          const x2 = 200 + 75 * Math.cos(angle);
          const y2 = 200 + 75 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="200" cy="200" r="75" strokeDasharray="10 20" />
      </g>

      {/* Center Center */}
      <circle cx="200" cy="200" r="10" fill="var(--color-accent)" opacity="0.8" />
      <circle ref={pulseRef} cx="200" cy="200" r="15" fill="var(--color-accent)" opacity="0.3" />
      <circle cx="200" cy="200" r="4" fill="var(--color-background)" />
    </svg>
  );
}
