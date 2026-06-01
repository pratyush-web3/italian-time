import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().min(1, { message: "Il nome è obbligatorio" }),
  email: z.string().email({ message: "Email non valida" }),
  telefono: z.string().optional(),
  messaggio: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" })
});

export default function Contatti() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      messaggio: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Messaggio Inviato",
      description: "Grazie per averci contattato. Risponderemo al più presto.",
    });
    form.reset();
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-serif text-foreground mb-8 text-center">Contatti</h1>
          <p className="text-center text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
            Siamo a vostra disposizione per qualsiasi informazione riguardante le nostre collezioni, 
            assistenza tecnica o per prenotare un appuntamento esclusivo nella nostra boutique di Milano.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div className="bg-card border border-border p-8">
                <h2 className="text-2xl font-serif text-foreground mb-8 border-b border-border pb-4">Inviaci un Messaggio</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground font-light">Nome Completo *</FormLabel>
                            <FormControl>
                              <Input placeholder="Es. Mario Rossi" {...field} className="bg-background border-border rounded-none focus-visible:ring-accent" data-testid="input-nome" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground font-light">Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="Es. mario@esempio.it" {...field} className="bg-background border-border rounded-none focus-visible:ring-accent" data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-light">Telefono (Opzionale)</FormLabel>
                          <FormControl>
                            <Input placeholder="+39 ..." {...field} className="bg-background border-border rounded-none focus-visible:ring-accent" data-testid="input-telefono" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="messaggio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-light">Messaggio *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Come possiamo aiutarla?" 
                              className="min-h-[120px] bg-background border-border rounded-none focus-visible:ring-accent resize-none" 
                              {...field} 
                              data-testid="input-messaggio"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground py-4 font-serif uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors"
                      data-testid="button-submit"
                    >
                      Invia Messaggio
                    </button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-8 text-muted-foreground font-light">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-serif text-lg mb-1">La Nostra Boutique</h4>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-serif text-lg mb-1">Telefono</h4>
                    <p>{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-serif text-lg mb-1">Email</h4>
                    <p>{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-serif text-lg mb-1">Orari di Apertura</h4>
                    <p>{siteConfig.businessHours.weekdays}</p>
                    <p>{siteConfig.businessHours.saturday}</p>
                    <p>{siteConfig.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-card border border-border relative overflow-hidden flex items-center justify-center group cursor-pointer" data-testid="map-placeholder">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col items-center transform transition-transform group-hover:scale-110 duration-500">
                  <MapPin className="text-accent mb-2" size={32} />
                  <span className="font-serif text-foreground tracking-widest uppercase text-xs">Vedi su Mappa</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
