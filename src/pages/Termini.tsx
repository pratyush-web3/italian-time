import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Termini() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-sans tracking-widest text-accent uppercase mb-4">Ultimo aggiornamento: 1 Giugno 2025</p>
            <h1 className="text-5xl font-serif text-foreground">Termini di Utilizzo</h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative">
            <div className="hidden lg:block w-1/4 sticky top-32 h-fit">
              <h4 className="font-sans uppercase tracking-widest text-xs text-muted-foreground mb-6">Indice</h4>
              <ul className="space-y-4 text-sm font-sans">
                <li><a href="#accettazione" className="text-foreground hover:text-accent transition-colors">1. Accettazione dei Termini</a></li>
                <li><a href="#servizio" className="text-foreground hover:text-accent transition-colors">2. Descrizione del Servizio</a></li>
                <li><a href="#proprieta" className="text-foreground hover:text-accent transition-colors">3. Proprietà Intellettuale</a></li>
                <li><a href="#limitazione" className="text-foreground hover:text-accent transition-colors">4. Limitazione di Responsabilità</a></li>
                <li><a href="#comportamento" className="text-foreground hover:text-accent transition-colors">5. Comportamento dell'Utente</a></li>
                <li><a href="#prezzi" className="text-foreground hover:text-accent transition-colors">6. Prezzi e Disponibilità</a></li>
                <li><a href="#garanzia" className="text-foreground hover:text-accent transition-colors">7. Garanzia e Assistenza Tecnica</a></li>
                <li><a href="#legge" className="text-foreground hover:text-accent transition-colors">8. Legge Applicabile e Foro</a></li>
                <li><a href="#adr" className="text-foreground hover:text-accent transition-colors">9. Risoluzione Controversie</a></li>
                <li><a href="#modifiche" className="text-foreground hover:text-accent transition-colors">10. Modifiche ai Termini</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-3/4 space-y-16 text-muted-foreground font-light leading-relaxed">
              
              <section id="accettazione">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">1. Accettazione dei Termini</h2>
                <p>
                  Benvenuti sul sito web di Temperini Orologi S.r.l., con sede in Via Montenapoleone 12, 20121 Milano, Italia (P.IVA 04829310152). L'accesso, la navigazione e l'utilizzo di questo sito web costituiscono accettazione implicita, incondizionata e vincolante dei presenti Termini di Utilizzo. Se non si accettano integralmente tali Termini, si prega di interrompere immediatamente l'utilizzo del sito. L'utilizzo del sito è consentito esclusivamente a soggetti maggiorenni (età minima 18 anni) o a minori sotto la stretta supervisione di un genitore o tutore legale.
                </p>
              </section>

              <section id="servizio">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">2. Descrizione del Servizio</h2>
                <p>
                  Il presente sito web ha una funzione puramente informativa, istituzionale e di catalogo per illustrare la maestria artigianale e le collezioni di orologi prodotti da Temperini Orologi. Questo sito <strong>non è un e-commerce</strong> e non consente l'acquisto diretto online dei prodotti. L'acquisto dei nostri segnatempo avviene esclusivamente tramite consulenza diretta, previo appuntamento presso le nostre boutique ufficiali a Milano o attraverso i nostri rivenditori autorizzati. Ogni richiesta inviata tramite il sito costituisce un invito a proporre e non una proposta vincolante di vendita.
                </p>
              </section>

              <section id="proprieta">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">3. Proprietà Intellettuale</h2>
                <p>
                  Tutti i contenuti presenti su questo sito — inclusi, a titolo esemplificativo ma non esaustivo, testi, fotografie, immagini, video, audio, loghi, marchi, grafiche, illustrazioni, layout di pagina, design dell'interfaccia, codice sorgente e software — sono di proprietà esclusiva di Temperini Orologi S.r.l. o dei rispettivi licenziatari e sono protetti dalle leggi italiane e dai trattati internazionali in materia di diritto d'autore e proprietà intellettuale.<br/><br/>
                  È severamente vietata la riproduzione, copia, modifica, distribuzione, trasmissione, esposizione pubblica o qualsiasi uso commerciale non espressamente autorizzato per iscritto da Temperini Orologi. È consentito il download o la stampa di singole pagine esclusivamente per uso personale e non commerciale, a condizione che non vengano rimossi marchi o avvisi di copyright.
                </p>
              </section>

              <section id="limitazione">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">4. Limitazione di Responsabilità</h2>
                <p>
                  Il sito web e i suoi contenuti sono forniti "nello stato di fatto in cui si trovano" (as is) e "secondo disponibilità". Temperini Orologi compie ogni ragionevole sforzo per garantire l'accuratezza delle informazioni fornite, tuttavia non fornisce alcuna garanzia esplicita o implicita circa l'assoluta assenza di errori, l'aggiornamento costante dei dati, l'assenza di virus o la disponibilità continua e ininterrotta del servizio.<br/><br/>
                  In nessun caso Temperini Orologi, i suoi amministratori, dipendenti o collaboratori potranno essere ritenuti responsabili per danni diretti, indiretti, incidentali, speciali, punitivi o consequenziali (inclusi danni per perdita di profitti o interruzione dell'attività) derivanti dall'uso, dall'incapacità di usare o dalle prestazioni del presente sito web.
                </p>
              </section>

              <section id="comportamento">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">5. Comportamento dell'Utente</h2>
                <p>
                  L'utente si impegna a utilizzare il sito in modo lecito e corretto, astenendosi da comportamenti che possano danneggiare, disabilitare, sovraccaricare o compromettere i server o le reti di Temperini Orologi.<br/><br/>
                  È fatto espresso divieto di: inviare materiale di tipo spam, promozionale non richiesto o comunicazioni moleste; effettuare tentativi di hacking, intrusione informatica o reverse engineering; praticare web scraping o estrazione automatizzata di dati; utilizzare il sito o i suoi contenuti per scopi commerciali non autorizzati o illeciti. In caso di violazione, Temperini Orologi si riserva il diritto di denunciare tali attività alle autorità competenti.
                </p>
              </section>

              <section id="prezzi">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">6. Prezzi e Disponibilità</h2>
                <p>
                  I prezzi, ove occasionalmente indicati sul sito o comunicati in fase di richiesta, sono da considerarsi puramente indicativi e suggeriti. Tali prezzi possono essere soggetti a variazioni senza preavviso a causa dell'oscillazione dei costi dei metalli preziosi o di altri fattori di produzione. La disponibilità dei singoli modelli è limitata data la natura artigianale della produzione. Un prezzo o la disponibilità si intendono confermati in via definitiva solo a seguito di un preventivo formale stipulato durante la consulenza diretta.
                </p>
              </section>

              <section id="garanzia">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">7. Garanzia e Assistenza Tecnica</h2>
                <p>
                  Temperini Orologi garantisce l'eccellenza dei propri prodotti offrendo una garanzia internazionale di 12 anni sulla cassa e di 5 anni sui movimenti meccanici, a partire dalla data di acquisto certificata. La garanzia copre esclusivamente i difetti di fabbricazione e non si applica a danni derivanti da usura normale, uso improprio, urti, o interventi tecnici effettuati da personale non autorizzato.<br/><br/>
                  L'assistenza in garanzia e gli interventi di manutenzione tecnica (revisioni, lucidature) devono essere eseguiti esclusivamente presso i nostri centri autorizzati di Milano e Roma, pena la decadenza immediata della garanzia stessa.
                </p>
              </section>

              <section id="legge">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">8. Legge Applicabile e Foro Competente</h2>
                <p>
                  I presenti Termini di Utilizzo e qualsiasi controversia derivante dall'uso del sito sono regolati e interpretati in conformità con la Legge Italiana.<br/><br/>
                  Per ogni controversia di natura contrattuale o extracontrattuale tra le parti, se l'utente agisce in qualità di professionista o azienda, la competenza territoriale esclusiva spetta al Foro di Milano. Se l'utente agisce in qualità di Consumatore (ai sensi del D.Lgs. 206/2005 - Codice del Consumo), sarà competente in via esclusiva il Foro del luogo di residenza o domicilio eletto del consumatore stesso, se ubicato nel territorio dello Stato Italiano.
                </p>
              </section>

              <section id="adr">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">9. Risoluzione Alternativa delle Controversie (ADR/ODR)</h2>
                <p>
                  Ai sensi dell'art. 14 del Regolamento (UE) n. 524/2013, informiamo gli utenti residenti nell'Unione Europea che la Commissione Europea ha istituito una piattaforma online per la risoluzione alternativa delle controversie (ODR - Online Dispute Resolution). La piattaforma è accessibile al seguente link: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-accent underline">ec.europa.eu/consumers/odr</a>.<br/><br/>
                  Temperini Orologi è disponibile a partecipare a procedure di conciliazione in buona fede per dirimere amichevolmente eventuali dispute con i propri clienti.
                </p>
              </section>

              <section id="modifiche">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">10. Modifiche ai Termini</h2>
                <p>
                  Ci riserviamo il diritto insindacabile di modificare, aggiornare o integrare i presenti Termini di Utilizzo in qualsiasi momento. Per modifiche sostanziali, ci impegneremo a fornire un preavviso di almeno 30 giorni tramite avvisi in evidenza sul sito web. Continuando ad accedere o utilizzare il nostro sito dopo la data di entrata in vigore delle modifiche, l'utente accetta di essere vincolato dai nuovi Termini rivisti.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
