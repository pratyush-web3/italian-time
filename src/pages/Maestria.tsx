import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Maestria() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
          <h1 className="text-5xl font-serif text-foreground mb-6">Maestria Artigianale</h1>
          <p className="text-muted-foreground font-light text-lg">Il tocco umano dietro l'ingegneria di precisione.</p>
        </div>

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div>
                <h3 className="text-3xl font-serif text-foreground mb-4">Progettazione</h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Tutto inizia con un'idea tracciata su carta. I nostri ingegneri traducono poi 
                  l'ispirazione artistica in modelli matematici, calcolando forze, attriti e 
                  tolleranze con una precisione misurata in micron.
                </p>
              </div>
              <div className="h-80 relative bg-background border border-border group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" alt="Progettazione orologio" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div className="h-80 relative bg-background border border-border group overflow-hidden order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80" alt="Assemblaggio manuale" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-serif text-foreground mb-4">Assemblaggio Manuale</h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Il cuore pulsante dell'orologio viene assemblato da maestri orologiai in ambienti a 
                  temperatura controllata e privi di polvere. Centinaia di minuscoli componenti vengono 
                  posizionati a mano con pinzette e microscopi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div>
                <h3 className="text-3xl font-serif text-foreground mb-4">Finitura</h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  La decorazione Côte de Genève, il perlage sui ponti, la lucidatura a specchio 
                  (anglage) dei bordi: dettagli che spesso rimangono celati all'interno della cassa, 
                  eseguiti per puro amore dell'arte orologiera.
                </p>
              </div>
              <div className="h-80 relative bg-background border border-border group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww" alt="Finitura orologio" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-80 relative bg-background border border-border group overflow-hidden order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fHww" alt="Controllo Qualità" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-serif text-foreground mb-4">Controllo Qualità</h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Oltre 200 rigorosi test di qualità assicurano che ogni orologio soddisfi i nostri severi standard. 
                  Testiamo impermeabilità, resistenza agli urti, isocronismo e perfezione estetica prima che 
                  l'orologio possa fregiarsi del nome Temperini.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
