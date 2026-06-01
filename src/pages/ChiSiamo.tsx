import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { Award, Compass, Users } from "lucide-react";

export default function ChiSiamo() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 bg-background">
        <section className="container mx-auto px-6 max-w-4xl mb-24">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-8 text-center">La Nostra Storia</h1>
          <p className="text-center text-muted-foreground font-light text-lg leading-relaxed mb-12">
            Dal 1952, Temperini Orologi definisce lo standard per l'eccellenza meccanica italiana. 
            Nata nel cuore pulsante di Milano, la nostra manifattura unisce la rigorosa disciplina 
            ingegneristica all'inconfondibile estetica del design italiano.
          </p>
 <div className="aspect-video bg-card border border-border w-full flex items-center justify-center relative overflow-hidden rounded-xl">
  <img
    src="https://images.unsplash.com/photo-1649803091689-0e65c4e9581f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2htYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
    alt="Maestri orologiai italiani al lavoro"
    loading="lazy"
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  />
</div>
        </section>

        <section className="bg-card border-y border-border py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-foreground mb-4">I Nostri Valori Fondamentali</h2>
              <p className="text-muted-foreground font-light">Principi immutabili che guidano ogni singola creazione.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <Compass className="text-accent mb-6 w-12 h-12" strokeWidth={1} />
                <h3 className="text-xl font-serif text-foreground mb-4">Integrità Meccanica</h3>
                <p className="text-sm text-muted-foreground font-light">Non scendiamo a compromessi sulla qualità dei nostri movimenti. Ogni calibro è progettato per durare generazioni.</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="text-accent mb-6 w-12 h-12" strokeWidth={1} />
                <h3 className="text-xl font-serif text-foreground mb-4">Maestria Italiana</h3>
                <p className="text-sm text-muted-foreground font-light">Dall'ideazione alla finitura finale, ogni processo è intriso della profonda eredità artigianale del nostro paese.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="text-accent mb-6 w-12 h-12" strokeWidth={1} />
                <h3 className="text-xl font-serif text-foreground mb-4">Dedizione Umana</h3>
                <p className="text-sm text-muted-foreground font-light">Le macchine assistono, ma sono le mani, gli occhi e l'anima dei nostri artigiani a infondere vita negli orologi.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-foreground mb-4">Pietre Miliari</h2>
              <p className="text-muted-foreground font-light">Un viaggio attraverso sette decenni di innovazione.</p>
            </div>
            <Timeline />
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-primary-foreground mb-4">Il Team Dirigenziale</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Lorenzo Temperini", role: "Direttore Generale" },
                { name: "Giancarlo Rossi", role: "Maestro Orologiaio" },
                { name: "Elena Bianchi", role: "Direttore Artistico" },
                { name: "Matteo Conti", role: "Responsabile Tecnico" }
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full border border-primary-foreground/20 mb-6 bg-primary-foreground/5 flex items-center justify-center font-serif text-3xl text-primary-foreground/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-lg font-serif text-primary-foreground mb-1">{member.name}</h4>
                  <p className="text-sm text-accent uppercase tracking-wider">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
