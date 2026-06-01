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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CollectionCard 
                name="Milano" 
                description="L'essenza dell'eleganza metropolitana. Linee pulite e movimento ultra-piatto."
                imageSrc="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"
                href="/collezioni#milano"
              />
              <CollectionCard 
                name="Torino" 
                description="Ispirata all'ingegneria automobilistica. Robusta, precisa, inarrestabile."
                imageSrc="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                href="/collezioni#torino"
              />
              <CollectionCard 
                name="Venezia" 
                description="Complicanze poetiche. Fasi lunari e calendario perpetuo su quadrante smaltato."
                imageSrc="https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#venezia"
              />
              <CollectionCard 
                name="Amalfi" 
                description="L'orologio subacqueo di lusso. Resistente fino a 300 metri, estetica impeccabile."
                imageSrc="https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#amalfi"
              />
              <CollectionCard 
                name="Roma" 
                description="Una presenza architettonica al polso. Cassa scolpita, dettagli in oro rosa e lettura immediata."
                imageSrc="https://images.unsplash.com/photo-1618215649872-6e3143a716ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#roma"
              />
              <CollectionCard 
                name="Capri" 
                description="Luce, leggerezza e spirito mediterraneo. Un segnatempo elegante con anima estiva e finiture lucenti."
                imageSrc="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#capri"
              />
              <CollectionCard 
                name="Firenze" 
                description="Quadrante caldo, proporzioni raffinate e un profilo che richiama l'eleganza rinascimentale italiana."
                imageSrc="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#firenze"
              />
              <CollectionCard 
                name="Como" 
                description="Un design silenzioso e prezioso, pensato per riflettere luce e profondità con equilibrio assoluto."
                imageSrc="https://images.unsplash.com/photo-1554151447-b9d2197448f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#como"
              />
              <CollectionCard 
                name="Portofino" 
                description="Un segnatempo sportivo di alta gamma con linee morbide, brillantezza contemporanea e presenza marina."
                imageSrc="https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
                href="/collezioni#portofino"
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
