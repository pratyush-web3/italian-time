import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Collezioni() {
  const collections = [
    {
      id: "milano",
      name: "Milano",
      tagline: "Dress Watch Contemporaneo",
      description: "La collezione Milano interpreta il lato più sobrio della manifattura Temperini. Profilo sottile, quadrante pulito e lancette affusolate la rendono adatta a un abito formale, ma abbastanza moderna da restare attuale ogni giorno.",
      materials: "Cassa in acciaio 316L da 40 mm con finitura lucida, vetro zaffiro bombato antiriflesso, cinturino in pelle di alligatore con fibbia deployante.",
      movement: "Calibro automatico a carica bidirezionale, 68 ore di riserva di carica.",
      specs: ["Diametro 40 mm", "Spessore 8,9 mm", "Impermeabilità 50 m"],
      image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "torino",
      name: "Torino",
      tagline: "Cronografo da Gran Turismo",
      description: "Torino è la collezione più tecnica e dinamica del catalogo. I contatori cronografici, la scala tachimetrica e la cassa scolpita le danno il carattere di uno strumento da misurazione, non solo di un oggetto di stile.",
      materials: "Cassa in titanio grado 5 satinato, lunetta in ceramica nera, bracciale integrato con chiusura a doppio pulsante.",
      movement: "Cronografo automatico con ruota a colonne e frizione verticale.",
      specs: ["Diametro 42 mm", "Spessore 14,2 mm", "Impermeabilità 100 m"],
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "venezia",
      name: "Venezia",
      tagline: "Alta Complicazione",
      description: "Venezia è la collezione più evocativa: calendario perpetuo, fasi lunari e tourbillon lavorano insieme in un quadrante smaltato che richiama la profondità dei canali e la luce cangiante della laguna.",
      materials: "Cassa in platino, quadrante in smalto Grand Feu, indici applicati e ponte del tourbillon rifinito a mano.",
      movement: "Movimento a carica manuale con modulo calendario perpetuo e indicazione fasi lunari.",
      specs: ["Diametro 41 mm", "Spessore 12,8 mm", "Impermeabilità 30 m"],
      image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "amalfi",
      name: "Amalfi",
      tagline: "Orologio Subacqueo Professionale",
      description: "Amalfi è pensato per il mare aperto: lunetta di precisione, corona avvitata e forte leggibilità sott'acqua, senza rinunciare a proporzioni eleganti anche sopra la superficie.",
      materials: "Acciaio chirurgico 904L, valvola per l'elio, inserto lunetta in ceramica e indici riempiti di Super-LumiNova.",
      movement: "Movimento automatico ad alta autonomia con scappamento antiurto.",
      specs: ["Diametro 43 mm", "Spessore 13,6 mm", "Impermeabilità 300 m"],
      image: "https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "roma",
      name: "Roma",
      tagline: "Lusso Architettonico",
      description: "Roma porta al polso una presenza monumentale: finiture preziose, proporzioni equilibrate e un quadrante che gioca con volumi e riflessi come una facciata classica al tramonto.",
      materials: "Cassa in acciaio con rivestimento PVD oro rosa, quadrante con dettagli guilloché e cinturino in alligatore matelassé.",
      movement: "Movimento automatico con rotore scheletrato e regolazione fine.",
      specs: ["Diametro 39,5 mm", "Spessore 9,4 mm", "Impermeabilità 50 m"],
      image: "https://images.unsplash.com/photo-1618215649872-6e3143a716ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "capri",
      name: "Capri",
      tagline: "Eleganza Mediterranea",
      description: "Capri cattura la luminosità del mare e la raffinatezza delle serate estive. È il modello più leggero della linea, con una presenza brillante e una leggibilità immediata.",
      materials: "Cassa lucida in acciaio, lunetta polita, quadrante opalino e cinturino intrecciato premium.",
      movement: "Movimento automatico sottile con 56 ore di riserva di carica.",
      specs: ["Diametro 38 mm", "Spessore 8,6 mm", "Impermeabilità 100 m"],
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "firenze",
      name: "Firenze",
      tagline: "Eleganza Rinascimentale",
      description: "Firenze è il lato più artistico della collezione: superfici morbide, toni caldi e dettagli raffinati che danno al polso una presenza colta e contemporanea.",
      materials: "Cassa in acciaio satinato, quadrante soleil color champagne e cinturino in pelle premium con cuciture tono su tono.",
      movement: "Movimento automatico a tre lancette con data rapida.",
      specs: ["Diametro 39 mm", "Spessore 9,1 mm", "Impermeabilità 50 m"],
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "como",
      name: "Como",
      tagline: "Minimalismo Prezioso",
      description: "Como unisce sobrietà e lusso discreto: linee pulite, forte contrasto visivo e una costruzione che privilegia equilibrio e leggibilità.",
      materials: "Cassa in acciaio lucido, vetro zaffiro piatto, bracciale integrato con maglie solide.",
      movement: "Calibro automatico con micro-rotore e riserva di carica estesa.",
      specs: ["Diametro 40,5 mm", "Spessore 10,2 mm", "Impermeabilità 100 m"],
      image: "https://images.unsplash.com/photo-1554151447-b9d2197448f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "portofino",
      name: "Portofino",
      tagline: "Sportivo di Lusso",
      description: "Portofino interpreta l'orologio sportivo in chiave elegante, con una silhouette dinamica e dettagli che restano raffinati anche sotto pressione.",
      materials: "Cassa in acciaio 316L, lunetta luminosa, elementi di protezione corona e finiture spazzolate.",
      movement: "Movimento automatico ad alta precisione con protezione antiurto.",
      specs: ["Diametro 42 mm", "Spessore 12,7 mm", "Impermeabilità 200 m"],
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
          <h1 className="text-5xl font-serif text-foreground mb-6">Le Collezioni</h1>
          <p className="text-muted-foreground font-light text-lg">Nove espressioni distinte della nostra maestria orologiera.</p>
        </div>

        {collections.map((coll, index) => {
          const isLeft = index % 2 === 0;
          return (
            <section key={coll.id} id={coll.id} className={`py-24 ${index % 2 !== 0 ? 'bg-card border-y border-border' : ''}`}>
              <div className="container mx-auto px-6 max-w-6xl">
                <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  
                  <div className="w-full lg:w-1/2 relative group overflow-hidden border border-border">
                    <img 
                      src={coll.image} 
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
                      <div>
                        <h4 className="font-serif text-foreground text-xl mb-2">Movimento</h4>
                        <p className="text-sm">{coll.movement}</p>
                      </div>
                      <div>
                        <h4 className="font-serif text-foreground text-xl mb-3">Specifiche Principali</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs uppercase tracking-[0.16em] text-foreground">
                          {coll.specs.map((spec) => (
                            <div key={spec} className="border border-border bg-card px-4 py-3 text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
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
