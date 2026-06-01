import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { year: "1952", title: "La Fondazione", description: "Vittorio Temperini apre il suo primo laboratorio in Via Montenapoleone a Milano." },
  { year: "1968", title: "Brevetti Rivoluzionari", description: "Introduzione del primo scappamento anti-magnetico brevettato." },
  { year: "1984", title: "Esplorazione Profonda", description: "Lancio del modello Amalfi, adottato dai sommozzatori della Marina." },
  { year: "2002", title: "Il Nuovo Millennio", description: "Inaugurazione della nuova manifattura, unendo artigianato tradizionale e altissima tecnologia." },
  { year: "2024", title: "Eccellenza Continua", description: "Presentazione del calibro ultra-piatto T-900, record di sottigliezza e precisione." }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      gsap.fromTo(
        item,
        { x: isLeft ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>
      
      <div className="space-y-24">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={item.year} className={`timeline-item flex items-center justify-between w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12 hidden md:block"></div>
              
              <div className="relative z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-[0_0_0_8px_var(--color-background)]">
                <div className="w-2 h-2 rounded-full bg-background"></div>
              </div>
              
              <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right pr-0 md:pr-12 pl-12 md:pl-0' : 'pl-12 md:pl-12'}`}>
                <div className="text-accent font-serif text-2xl mb-2">{item.year}</div>
                <h4 className="text-xl font-serif text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
