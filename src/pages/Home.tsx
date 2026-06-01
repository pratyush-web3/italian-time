import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Compass, Hammer, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { CollectionCard } from "@/components/CollectionCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (introRef.current) {
      gsap.fromTo(
        introRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
          }
        }
      );
    }

    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || '0', 10);
        gsap.to(stat, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        <section ref={introRef} className="py-24 bg-card text-card-foreground">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">
              Una Sinfonia di Ingranaggi
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              La nostra filosofia è semplice: ogni componente, per quanto invisibile, deve essere perfetto. 
              Dal 1952, Temperini Orologi unisce la rigorosa ingegneria meccanica con l'inconfondibile 
              stile italiano, creando segnatempo che non si limitano a misurare le ore, ma ne celebrano l'essenza.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-serif text-foreground">Le Nostre Collezioni</h2>
              <Link href="/collezioni" className="hidden md:block text-accent uppercase tracking-widest text-sm hover:underline underline-offset-4">
                Vedi tutte
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CollectionCard 
                name="Milano" 
                description="L'essenza dell'eleganza metropolitana. Linee pulite e movimento ultra-piatto."
                imageId="1523275335684-37898b6baf30"
                href="/collezioni#milano"
              />
              <CollectionCard 
                name="Torino" 
                description="Ispirata all'ingegneria automobilistica. Robusta, precisa, inarrestabile."
                imageId="1509048191080-d2984bad6ae5"
                href="/collezioni#torino"
              />
              <CollectionCard 
                name="Venezia" 
                description="Complicanze poetiche. Fasi lunari e calendario perpetuo su quadrante smaltato."
                imageId="1523170335258-f5ed11844a49"
                href="/collezioni#venezia"
              />
              <CollectionCard 
                name="Amalfi" 
                description="L'orologio subacqueo di lusso. Resistente fino a 300 metri, estetica impeccabile."
                imageId="1691865179028-1729b766a5cd"
                href="/collezioni#amalfi"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent mb-6">
                  <Compass size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground">Precisione Ingegneristica</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Tolleranze misurate in micron. Ogni movimento è progettato con software aerospaziali 
                  per garantire un'accuratezza senza compromessi in ogni condizione.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent mb-6">
                  <Hammer size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground">Tradizione Artigianale</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Assemblati rigorosamente a mano dai nostri maestri orologiai a Milano. 
                  Ogni vite lucidate, ogni ponte decorato a Côte de Genève.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground">Innovazione Meccanica</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Brevetti esclusivi per lo scappamento e il bariletto. 
                  Sviluppiamo costantemente nuove soluzioni per migliorare la riserva di carica e la resistenza.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-7xl font-serif text-accent mb-2 stat-number" data-target="72">0</div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">Componenti per Orologio</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-serif text-accent mb-2 stat-number" data-target="1952">0</div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">Anno di Fondazione</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-serif text-accent mb-2 stat-number" data-target="47">0</div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">Ore di Assemblaggio Manuale</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-serif text-accent mb-2 stat-number" data-target="500">0</div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">Pezzi Prodotti Annualmente</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Il Processo Produttivo</h2>
              <p className="text-muted-foreground font-light">Dall'idea iniziale al capolavoro finito sul vostro polso.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Progettazione", desc: "Design aerodinamico e simulazioni meccaniche al computer." },
                { num: "02", title: "Assemblaggio", desc: "L'unione delicata di decine di microscopici componenti." },
                { num: "03", title: "Controllo Qualità", desc: "Test di 500 ore per resistenza, precisione e impermeabilità." },
                { num: "04", title: "Finitura Manuale", desc: "Lucidatura e decorazione di ogni singolo elemento visibile." }
              ].map((step, i) => (
                <div key={i} className="relative pt-8">
                  <div className="text-6xl font-serif text-muted/30 absolute top-0 left-0 -z-10 -translate-y-4">{step.num}</div>
                  <h4 className="text-xl font-serif text-foreground mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl font-serif text-foreground text-center mb-16">Voci dai Nostri Clienti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Marco Bellini" 
                city="Roma" 
                model="Collezione Milano" 
                quote="Un orologio che trasmette un senso di gravitas immediato. La finitura del quadrante è qualcosa che le foto non riescono a catturare."
              />
              <TestimonialCard 
                name="Francesca Martini" 
                city="Torino" 
                model="Collezione Venezia" 
                quote="La precisione delle fasi lunari è sbalorditiva. Si sente la mano dell'artigiano in ogni dettaglio. È diventato il mio segnatempo quotidiano."
              />
              <TestimonialCard 
                name="Alessandro Russo" 
                city="Firenze" 
                model="Collezione Amalfi" 
                quote="Ho posseduto molti orologi svizzeri, ma questo ha un'anima diversa. L'ingegneria italiana si fa notare per eleganza e robustezza."
              />
            </div>
          </div>
        </section>

        <section className="py-32 bg-background border-t border-border">
          <div className="container mx-auto px-6 max-w-xl text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">Restiamo in Contatto</h2>
            <p className="text-muted-foreground font-light mb-8">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti sulle nuove collezioni ed eventi esclusivi.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Il tuo indirizzo email" 
                className="flex-grow px-4 py-3 bg-card border border-border focus:border-accent outline-none text-foreground placeholder:text-muted-foreground"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-3 bg-accent text-accent-foreground uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
