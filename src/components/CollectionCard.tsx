import { Link } from "wouter";

interface CollectionCardProps {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
}

export function CollectionCard({ name, description, imageSrc, href }: CollectionCardProps) {
  return (
    <div className="group relative overflow-hidden bg-card border border-border h-[450px] flex flex-col justify-end p-8">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      </div>
      
      <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-accent text-xs font-sans tracking-[0.2em] mb-2 uppercase">Collezione</div>
        <h3 className="text-3xl font-serif text-white mb-3">{name}</h3>
        <p className="text-white/80 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
        <Link 
          href={href}
          className="inline-flex items-center text-white text-sm font-sans tracking-widest uppercase border-b border-accent pb-1 hover:text-accent transition-colors"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  );
}
