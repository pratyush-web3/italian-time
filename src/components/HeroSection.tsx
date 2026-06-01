import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { WatchDial } from "./WatchDial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    
    gsap.fromTo(
      contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden pt-20"
      style={{
        background: "radial-gradient(circle at 70% 50%, hsl(221, 50%, 15%), hsl(221, 62%, 9%))"
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        <div ref={contentRef} className="text-primary-foreground max-w-xl">
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight">
            L'Arte Italiana<br />del Tempo
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-light leading-relaxed">
            Ingegneria di precisione e tradizione manifatturiera dal 1952. 
            Ogni orologio Temperini è un capolavoro di meccanica, forgiato 
            con dedizione assoluta nel cuore di Milano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/collezioni" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-serif tracking-widest text-sm uppercase transition-transform hover:-translate-y-1"
              data-testid="hero-btn-explore"
            >
              Esplora le Collezioni
            </Link>
            <Link 
              href="/chi-siamo" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-serif tracking-widest text-sm uppercase transition-colors hover:bg-primary-foreground/5"
              data-testid="hero-btn-history"
            >
              La Nostra Storia
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center h-[600px] w-full">
          <WatchDial />
        </div>
      </div>
    </section>
  );
}
