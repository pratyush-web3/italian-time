import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Testimonianze() {
  const featuredTestimonial = {
    name: "Marco Bellini",
    city: "Roma",
    model: "Milano",
    quote: "Ho comprato il mio primo Temperini Milano sette anni fa, in un momento di svolta professionale. Era un regalo a me stesso dopo aver chiuso la trattativa più importante della mia carriera. Ancora oggi, quando lo indosso nelle riunioni del consiglio, sento che quell'orologio racconta una storia — non solo l'ora. La finitura del quadrante, con il suo grigio fumo che cambia sfumatura con la luce, è qualcosa che le fotografie non riescono a rendere. È un oggetto che migliora con il tempo, come un buon vino.",
    rating: 5,
    verified: true
  };

  const alternatingTestimonials = [
    {
      name: "Francesca Martini",
      city: "Torino",
      model: "Venezia",
      quote: "Lavoro con proporzioni e dettagli ogni giorno. Ho scelto il Venezia perché è l'unico orologio che trovo matematicamente perfetto. Il calendario perpetuo non ha sbagliato un giorno in quattro anni. Quando ho portato l'orologio a un orologiaio svizzero per la revisione, mi ha detto: questo movimento è fatto da qualcuno che ama davvero il proprio lavoro. Non avevo bisogno di sentirglielo dire — lo sapevo già.",
      rating: 5,
      verified: true
    },
    {
      name: "Alessandro Russo",
      city: "Firenze",
      model: "Amalfi",
      quote: "Sono un velista appassionato e cercavo un orologio che potesse accompagnarmi in mare senza rinunciare all'eleganza a terra. L'Amalfi ha superato ogni aspettativa. L'ho portato a 40 metri di profondità durante un'immersione nel Mar Tirreno, e a cena allo stesso ristorante dove avevo prenotato per festeggiare il compleanno di mia moglie. Impeccabile in entrambe le occasioni.",
      rating: 5,
      verified: true
    },
    {
      name: "Giulia Ferrero",
      city: "Milano",
      model: "Milano",
      quote: "Mio padre collezionava orologi. Mi ha lasciato tre pezzi importanti, tutti svizzeri. Quando ho deciso di comprare il mio primo orologio di lusso, ho cercato qualcosa che avesse la stessa anima ma con un'identità italiana — la mia identità. Il Milano di Temperini è esattamente quello. Sul polso di una donna ha un carattere straordinario. Non è un orologio da uomo ridimensionato: è un pezzo pensato con sensibilità vera.",
      rating: 5,
      verified: true
    },
    {
      name: "Roberto Colombo",
      city: "Brescia",
      model: "Torino",
      quote: "Sono un appassionato di motori. Ho una piccola scuderia amatoriale e partecipo a gare storiche nel nord Italia. Il Torino è entrato nella mia vita come il giusto compagno per questo mondo — il cronografo è preciso al decimo di secondo, e la lunetta in ceramica non si è mai graffiata nonostante qualche urto di troppo nei box. Non è un orologio da esposizione: è uno strumento.",
      rating: 5,
      verified: true
    },
    {
      name: "Isabella Conti",
      city: "Bologna",
      model: "Venezia",
      quote: "Ho aspettato quasi un anno per il Venezia con il quadrante in smalto blu notte. Ne valeva la pena. Ogni mattina che lo chiudo al polso è come indossare un piccolo capolavoro. Mia figlia di dodici anni mi ha chiesto se glielo lascerò in eredità. Le ho risposto di sì. Questo la dice lunga su cosa significa possedere un Temperini.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[72px] bg-background">
        
        {/* SECTION 1 - Hero */}
        <section className="bg-primary text-primary-foreground py-24 px-6 border-b border-accent/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Dicono di Noi</h1>
            <p className="text-primary-foreground/70 font-serif italic text-xl">
              Ogni parere è quello di un cliente reale che ha scelto Temperini.
            </p>
          </div>
        </section>

        {/* SECTION 2 - Featured */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <TestimonialCard featured {...featuredTestimonial} />
          </div>
        </section>

        {/* SECTION 3 - Alternating */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-4xl space-y-32">
            {alternatingTestimonials.map((t, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isEven = i % 2 !== 0;
              return (
                <div key={i} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 relative`}>
                  <div className="hidden md:block text-[180px] font-serif text-muted/30 leading-none select-none absolute top-1/2 -translate-y-1/2 -z-10" style={{ [isEven ? 'left' : 'right']: '-2rem' }}>
                    {num}
                  </div>
                  
                  <div className="md:w-1/3 flex justify-center">
                    <div className="text-8xl md:text-[120px] font-serif text-muted/40 leading-none select-none">
                      {num}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <TestimonialCard {...t} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 - Trust Stats */}
        <section className="bg-primary py-16 px-6 border-t border-accent/20 mt-16">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-accent/10">
            <div className="px-4">
              <div className="text-accent text-3xl font-serif mb-2">97%</div>
              <div className="text-primary-foreground/70 text-xs uppercase tracking-widest font-sans">Clienti Soddisfatti</div>
            </div>
            <div className="px-4">
              <div className="text-accent text-3xl font-serif mb-2">4.9/5</div>
              <div className="text-primary-foreground/70 text-xs uppercase tracking-widest font-sans">Valutazione Media</div>
            </div>
            <div className="px-4">
              <div className="text-accent text-3xl font-serif mb-2">12 Anni</div>
              <div className="text-primary-foreground/70 text-xs uppercase tracking-widest font-sans">Garanzia</div>
            </div>
            <div className="px-4">
              <div className="text-accent text-3xl font-serif mb-2">500+</div>
              <div className="text-primary-foreground/70 text-xs uppercase tracking-widest font-sans">Famiglie Temperini</div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
