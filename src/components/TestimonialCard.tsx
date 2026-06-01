import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  model: string;
  quote: string;
  rating?: number;
  featured?: boolean;
  verified?: boolean;
}

export function TestimonialCard({ name, city, model, quote, rating = 5, featured = false, verified = false }: TestimonialCardProps) {
  if (featured) {
    return (
      <div className="bg-accent/10 border-l-4 border-accent p-12 relative w-full flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        <div className="absolute top-0 left-4 text-accent/20 font-serif text-[120px] leading-none select-none">"</div>
        <div className="relative z-10 flex-grow">
          <blockquote className="text-foreground font-serif italic text-2xl md:text-3xl leading-relaxed mb-8">
            {quote}
          </blockquote>
          <div className="flex flex-col">
            <div className="font-serif font-medium text-xl text-foreground mb-1">{name}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-3">{city} · Collezione {model}</div>
            {verified && (
              <div className="text-xs text-accent uppercase tracking-widest font-sans flex items-center">
                Acquirente Verificato <span className="ml-1">✓</span>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex flex-shrink-0 w-24 h-24 text-accent/30 relative">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M 50 20 L 50 50 L 70 60" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border p-8 flex flex-col h-full relative">
      <div className="flex text-accent mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      
      <blockquote className="flex-grow text-foreground font-serif italic text-lg leading-relaxed mb-8">
        "{quote}"
      </blockquote>
      
      <div className="mt-auto border-t border-border pt-4">
        <div className="font-serif font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{city} · {model}</div>
        {verified && (
          <div className="text-[0.65rem] text-accent uppercase tracking-widest font-sans flex items-center">
            Acquirente Verificato <span className="ml-1">✓</span>
          </div>
        )}
      </div>
    </div>
  );
}
