import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function GearDiagram() {
  const gear1Ref = useRef<SVGGElement>(null);
  const gear2Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!gear1Ref.current || !gear2Ref.current) return;

    gsap.to(gear1Ref.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    gsap.to(gear2Ref.current, {
      rotation: -360,
      duration: 10,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });
  }, []);

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full max-h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background grid lines */}
      <g stroke="currentColor" opacity="0.05" strokeWidth="1">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} />
        ))}
      </g>
      
      {/* Connections */}
      <line x1="250" y1="200" x2="550" y2="200" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
      <circle cx="250" cy="200" r="140" stroke="var(--color-accent)" strokeWidth="1" opacity="0.2" fill="none" />
      <circle cx="550" cy="200" r="70" stroke="var(--color-accent)" strokeWidth="1" opacity="0.2" fill="none" />

      {/* Large Gear */}
      <g ref={gear1Ref} style={{ transformOrigin: "250px 200px" }}>
        <circle cx="250" cy="200" r="120" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="250" cy="200" r="100" stroke="currentColor" strokeWidth="1" opacity="0.1" />
        <circle cx="250" cy="200" r="15" fill="var(--color-accent)" opacity="0.8" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 250 + 120 * Math.cos(angle);
          const y1 = 200 + 120 * Math.sin(angle);
          const x2 = 250 + 135 * Math.cos(angle);
          const y2 = 200 + 135 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" opacity="0.3" />;
        })}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x1 = 250 + 20 * Math.cos(angle);
          const y1 = 200 + 20 * Math.sin(angle);
          const x2 = 250 + 100 * Math.cos(angle);
          const y2 = 200 + 100 * Math.sin(angle);
          return <line key={`spoke${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" opacity="0.2" />;
        })}
      </g>

      {/* Small Gear */}
      <g ref={gear2Ref} style={{ transformOrigin: "550px 200px" }}>
        <circle cx="550" cy="200" r="60" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="550" cy="200" r="45" stroke="currentColor" strokeWidth="1" opacity="0.1" />
        <circle cx="550" cy="200" r="10" fill="var(--color-accent)" opacity="0.8" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 550 + 60 * Math.cos(angle);
          const y1 = 200 + 60 * Math.sin(angle);
          const x2 = 550 + 75 * Math.cos(angle);
          const y2 = 200 + 75 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" opacity="0.3" />;
        })}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i * 90 * Math.PI) / 180;
          const x1 = 550 + 15 * Math.cos(angle);
          const y1 = 200 + 15 * Math.sin(angle);
          const x2 = 550 + 45 * Math.cos(angle);
          const y2 = 200 + 45 * Math.sin(angle);
          return <line key={`spoke${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" opacity="0.2" />;
        })}
      </g>

    </svg>
  );
}

export default function Tecnologia() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
          <h1 className="text-5xl font-serif text-foreground mb-6">Tecnologia e Innovazione</h1>
          <p className="text-muted-foreground font-light text-lg">La scienza al servizio della misurazione del tempo, con una visione progettuale che unisce precisione, estetica e durata.</p>
        </div>

        <section className="bg-primary text-primary-foreground py-24 border-y border-primary-foreground/10 overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-serif mb-12 text-center">Calibri di Manifattura</h2>
            <div className="space-y-8 text-primary-foreground/80 font-light leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                I movimenti Temperini sono interamente concepiti, sviluppati e prodotti all'interno della nostra 
                manifattura milanese. Questo ci garantisce il totale controllo sulle prestazioni e sull'architettura 
                del meccanismo.
              </p>
              <p>
                L'innovazione risiede nel nostro esclusivo scappamento a doppio impulso, che riduce l'attrito del 30% 
                rispetto agli scappamenti tradizionali, prolungando gli intervalli di manutenzione e migliorando 
                l'isocronismo.
              </p>
              <p>
                Ogni calibro viene regolato in più posizioni, sottoposto a cicli di stress termico e verificato da tecnici 
                specializzati prima di entrare in cassa. Il risultato è un movimento affidabile, stabile e coerente nel tempo,
                anche nelle condizioni più impegnative.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="text-3xl font-serif text-accent mb-3">01</div>
                <h3 className="font-serif text-lg mb-2">Progettazione CAD</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Ogni ponte, ruota e leva nasce da modelli digitali che ottimizzano spessori, pesi e tolleranze.
                </p>
              </div>
              <div className="border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="text-3xl font-serif text-accent mb-3">02</div>
                <h3 className="font-serif text-lg mb-2">Assemblaggio Manuale</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Artigiani specializzati montano il calibro a mano con strumenti di precisione e controllo microscopico.
                </p>
              </div>
              <div className="border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="text-3xl font-serif text-accent mb-3">03</div>
                <h3 className="font-serif text-lg mb-2">Collaudo Finale</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Simulazioni di urto, test di pressione e verifiche di marcia garantiscono standard di livello superiore.
                </p>
              </div>
            </div>
            
            <div className="mt-16 w-full py-8 border border-primary-foreground/10 bg-primary-foreground/5 relative flex justify-center">
              <GearDiagram />
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-serif text-foreground mb-16 text-center">Materiali d'Avanguardia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border p-8 bg-card transition-colors hover:border-accent/50">
                <h4 className="text-xl font-serif text-foreground mb-4">Acciaio Chirurgico 316L</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lega inossidabile altamente resistente alla corrosione, forgiata e lucidata internamente per un lustro ineguagliabile. 
                  Ideale per chi cerca l'eleganza senza tempo unita a una durabilità eccezionale nel quotidiano.
                </p>
              </div>
              <div className="border border-border p-8 bg-card transition-colors hover:border-accent/50">
                <h4 className="text-xl font-serif text-foreground mb-4">Cristallo di Zaffiro</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tagliato al diamante e trattato con sette strati di rivestimento antiriflesso per una leggibilità perfetta sotto ogni angolazione. 
                  Virtualmente inscalfibile, garantisce la purezza estetica del quadrante negli anni.
                </p>
              </div>
              <div className="border border-border p-8 bg-card transition-colors hover:border-accent/50">
                <h4 className="text-xl font-serif text-foreground mb-4">Titanio Grado 5</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estremamente leggero, biocompatibile e robusto. Utilizzato nelle collezioni sportive per garantire comfort assoluto 
                  in condizioni estreme, senza rinunciare alla raffinatezza delle nostre finiture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl font-serif text-foreground mb-16 text-center">Specifiche di Test</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-6">
                <div className="text-4xl font-serif text-accent mb-4">300m</div>
                <h5 className="font-serif text-lg text-foreground mb-2">Resistenza all'acqua</h5>
                <p className="text-sm text-muted-foreground">Test rigorosi in camere iperbariche per i modelli della collezione Amalfi.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-serif text-accent mb-4">-2/+2</div>
                <h5 className="font-serif text-lg text-foreground mb-2">Precisione Giornaliera (sec)</h5>
                <p className="text-sm text-muted-foreground">Superiamo gli standard COSC per garantire l'assoluta affidabilità cronometrica.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-serif text-accent mb-4">72h</div>
                <h5 className="font-serif text-lg text-foreground mb-2">Riserva di Carica</h5>
                <p className="text-sm text-muted-foreground">Prestazioni garantite dal nostro innovativo sistema a doppio bariletto.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">Ricerca e Sviluppo</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Il reparto R&amp;D Temperini lavora per affinare affidabilità, comfort e leggibilità. Ogni nuova soluzione
                  viene prototipata, testata e confrontata con benchmark di settore prima di passare in produzione.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Questo approccio ci permette di migliorare componenti come bariletto, sistema antiurto, fondello e corona,
                  mantenendo al centro un'estetica coerente con il linguaggio della maison.
                </p>
              </div>
              <div className="border border-border bg-card p-8">
                <h3 className="text-xl font-serif text-foreground mb-6">Focus Tecnici</h3>
                <div className="space-y-5 text-sm text-muted-foreground">
                  <div>
                    <div className="text-foreground font-medium mb-1">Precisione di marcia</div>
                    <p>Regolazioni multi-posizione per mantenere stabilità su polso e in condizioni di uso reale.</p>
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Ergonomia</div>
                    <p>Casse e bracciali progettati per distribuire il peso in modo equilibrato e naturale.</p>
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Durabilità</div>
                    <p>Materiali selezionati per resistere a graffi, corrosione, variazioni termiche e usura quotidiana.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
