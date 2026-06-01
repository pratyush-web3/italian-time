import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Collezioni() {
  const collections = [
    {
      id: "milano",
      name: "Milano",
      tagline: "Eleganza Metropolitana",
      description: "La collezione Milano rappresenta l'essenza dell'estetica Temperini. Linee pulite, quadranti minimalisti e una sottigliezza straordinaria grazie al nostro calibro ultra-piatto. Un orologio pensato per le serate alla Scala o per gli incontri nei salotti della finanza meneghina.",
      materials: "Cassa in acciaio inossidabile 316L lucido, fondello in vetro zaffiro, cinturino in alligatore cucito a mano.",
      image: "1523275335684-37898b6baf30",
    },
    {
      id: "torino",
      name: "Torino",
      tagline: "Ingegneria in Movimento",
      description: "Ispirata alla grande tradizione ingegneristica e automobilistica piemontese. La collezione Torino è robusta, dotata di funzione cronografo e tachimetro. Il design del quadrante richiama la strumentazione delle auto d'epoca.",
      materials: "Cassa in titanio spazzolato, lunetta in ceramica antigraffio, bracciale integrato ad alta resistenza.",
      image: "1509048191080-d2984bad6ae5",
    },
    {
      id: "venezia",
      name: "Venezia",
      tagline: "Meccanica Poetica",
      description: "Venezia è la nostra collezione di alte complicazioni. Ospita calendari perpetui, fasi lunari di precisione e tourbillon. Il quadrante smaltato a mano richiama i riflessi dei canali veneziani all'imbrunire.",
      materials: "Cassa in platino, quadrante in smalto Grand Feu, indici applicati a mano.",
      image: "1547996160-dace0c27de45",
    },
    {
      id: "amalfi",
      name: "Amalfi",
      tagline: "Dominare gli Abissi",
      description: "Progettato per resistere alle profondità marine mantenendo un'eleganza adatta anche alla terraferma. L'Amalfi è il nostro orologio subacqueo professionale, testato a 300 metri di profondità.",
      materials: "Acciaio chirurgico, valvola per l'elio, indici luminescenti Super-LumiNova ad alta visibilità.",
      image: "1495908309009-36e90e6e41a8",
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
          <h1 className="text-5xl font-serif text-foreground mb-6">Le Collezioni</h1>
          <p className="text-muted-foreground font-light text-lg">Quattro espressioni distinte della nostra maestria orologiera.</p>
        </div>

        {collections.map((coll, index) => {
          const isLeft = index % 2 === 0;
          return (
            <section key={coll.id} id={coll.id} className={`py-24 ${index % 2 !== 0 ? 'bg-card border-y border-border' : ''}`}>
              <div className="container mx-auto px-6 max-w-6xl">
                <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  
                  <div className="w-full lg:w-1/2 relative group overflow-hidden border border-border">
                    <img 
                      src={`https://images.unsplash.com/photo-${coll.image}?w=1000&q=80`} 
                      alt={`Collezione ${coll.name}`} 
                      className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="text-accent text-sm tracking-[0.2em] uppercase font-sans mb-4">{coll.tagline}</div>
                    <h2 className="text-4xl font-serif text-foreground mb-8">Collezione {coll.name}</h2>
                    
                    <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                      <div>
                        <h4 className="font-serif text-foreground text-xl mb-2">La Storia</h4>
                        <p className="text-sm">{coll.description}</p>
                      </div>
                      <div>
                        <h4 className="font-serif text-foreground text-xl mb-2">Materiali</h4>
                        <p className="text-sm">{coll.materials}</p>
                      </div>
                      <div className="pt-8">
                        <button className="px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-serif uppercase tracking-widest text-sm">
                          Richiedi Informazioni
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
