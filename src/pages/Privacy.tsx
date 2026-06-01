import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-sans tracking-widest text-accent uppercase mb-4">Ultimo aggiornamento: 1 Giugno 2025</p>
            <h1 className="text-5xl font-serif text-foreground">Informativa sulla Privacy</h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative">
            <div className="hidden lg:block w-1/4 sticky top-32 h-fit">
              <h4 className="font-sans uppercase tracking-widest text-xs text-muted-foreground mb-6">Indice</h4>
              <ul className="space-y-4 text-sm font-sans">
                <li><a href="#titolare" className="text-foreground hover:text-accent transition-colors">1. Titolare del Trattamento</a></li>
                <li><a href="#dati" className="text-foreground hover:text-accent transition-colors">2. Dati Personali Raccolti</a></li>
                <li><a href="#finalita" className="text-foreground hover:text-accent transition-colors">3. Finalità e Basi Giuridiche</a></li>
                <li><a href="#modalita" className="text-foreground hover:text-accent transition-colors">4. Modalità di Trattamento</a></li>
                <li><a href="#comunicazione" className="text-foreground hover:text-accent transition-colors">5. Comunicazione e Diffusione</a></li>
                <li><a href="#diritti" className="text-foreground hover:text-accent transition-colors">6. Diritti dell'Interessato</a></li>
                <li><a href="#cookie" className="text-foreground hover:text-accent transition-colors">7. Cookie</a></li>
                <li><a href="#sicurezza" className="text-foreground hover:text-accent transition-colors">8. Sicurezza</a></li>
                <li><a href="#modifiche" className="text-foreground hover:text-accent transition-colors">9. Modifiche all'Informativa</a></li>
                <li><a href="#contatti" className="text-foreground hover:text-accent transition-colors">10. Contatti e Reclami</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-3/4 space-y-16 text-muted-foreground font-light leading-relaxed">
              
              <section id="titolare">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">1. Titolare del Trattamento</h2>
                <p>
                  Ai sensi del Regolamento (UE) 2016/679 (di seguito "GDPR"), il Titolare del Trattamento dei dati personali raccolti attraverso questo sito web è Temperini Orologi S.r.l., con sede legale in Via Montenapoleone 12, 20121 Milano (MI), Italia.<br/><br/>
                  P.IVA: 04829310152<br/>
                  Email per comunicazioni privacy: privacy@temperiniorologi.it<br/>
                  Telefono: +39 02 7631 8842<br/><br/>
                  Il Titolare del Trattamento si impegna a garantire la massima riservatezza e sicurezza dei dati personali degli utenti, in conformità con la normativa vigente in materia di protezione dei dati personali.
                </p>
              </section>

              <section id="dati">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">2. Dati Personali Raccolti</h2>
                <p>Attraverso l'uso del nostro sito web, possiamo raccogliere e trattare le seguenti categorie di dati personali:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. In questa categoria rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti, il tipo di browser, le pagine visitate, l'orario della richiesta, la durata della sessione e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.</li>
                  <li><strong>Dati forniti volontariamente:</strong> Raccogliamo le informazioni che l'utente inserisce volontariamente compilando il modulo contatti (nome, cognome, indirizzo email, numero di telefono, e il contenuto del messaggio) per richiedere informazioni o prenotare una consulenza.</li>
                  <li><strong>Dati di profilazione per newsletter:</strong> Se l'utente decide di iscriversi alla nostra newsletter, raccoglieremo l'indirizzo email e, facoltativamente, le preferenze espresse riguardo alle nostre collezioni per inviare comunicazioni mirate e personalizzate.</li>
                </ul>
              </section>

              <section id="finalita">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">3. Finalità e Basi Giuridiche del Trattamento (Art. 6 GDPR)</h2>
                <p>I dati personali sono trattati per le seguenti finalità e in base alle seguenti basi giuridiche:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Esecuzione contrattuale o misure precontrattuali:</strong> Gestire le richieste di informazioni, fornire preventivi, organizzare appuntamenti presso le nostre boutique e dare seguito alle comunicazioni inviate tramite il modulo contatti. La base giuridica è l'art. 6, par. 1, lett. b) del GDPR.</li>
                  <li><strong>Consenso:</strong> Previo consenso esplicito, inviare newsletter, inviti ad eventi esclusivi, aggiornamenti sulle nuove collezioni e altre comunicazioni di marketing o promozionali. La base giuridica è l'art. 6, par. 1, lett. a) del GDPR. L'utente può revocare il consenso in qualsiasi momento.</li>
                  <li><strong>Interesse legittimo:</strong> Garantire la sicurezza del sito web, prevenire frodi informatiche, difendere i diritti del Titolare in sede giudiziaria e ricavare informazioni statistiche anonime sull'uso del sito per migliorarne le funzionalità. La base giuridica è l'art. 6, par. 1, lett. f) del GDPR.</li>
                  <li><strong>Obbligo legale:</strong> Adempiere agli obblighi previsti dalla legge, da un regolamento, dalla normativa comunitaria o da un ordine dell'Autorità (ad esempio adempimenti fiscali e contabili). La base giuridica è l'art. 6, par. 1, lett. c) del GDPR.</li>
                </ul>
              </section>

              <section id="modalita">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">4. Modalità di Trattamento e Conservazione</h2>
                <p>
                  Il trattamento dei dati personali avviene prevalentemente con l'ausilio di strumenti informatici e telematici, con logiche strettamente correlate alle finalità sopra indicate e, in ogni caso, in modo da garantire la sicurezza e la riservatezza dei dati stessi mediante l'adozione di adeguate misure tecniche e organizzative.<br/><br/>
                  I dati personali saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>I dati connessi a obblighi contrattuali o fiscali saranno conservati per 10 anni, come stabilito dalla legge italiana.</li>
                  <li>I dati trattati per finalità di marketing saranno conservati fino alla revoca del consenso da parte dell'interessato, o al massimo per 24 mesi dalla raccolta.</li>
                  <li>I dati di navigazione vengono cancellati o resi anonimi entro 12 mesi dalla loro acquisizione.</li>
                </ul>
              </section>

              <section id="comunicazione">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">5. Comunicazione e Diffusione dei Dati</h2>
                <p>
                  Temperini Orologi non vende, non affitta e non cede i dati personali a terzi per scopi commerciali.<br/><br/>
                  I dati potranno essere condivisi esclusivamente con soggetti di cui ci avvaliamo per la fornitura dei nostri servizi, nominati se necessario Responsabili del Trattamento (es. hosting provider i cui server sono situati nello Spazio Economico Europeo, fornitori di servizi email, consulenti fiscali o legali).<br/><br/>
                  Non trasferiamo dati personali al di fuori dello Spazio Economico Europeo (SEE). Qualora ciò si rendesse necessario, il trasferimento avverrà unicamente in presenza di adeguate garanzie, come le Clausole Contrattuali Standard approvate dalla Commissione Europea o decisioni di adeguatezza. I dati non sono soggetti a diffusione.
                </p>
              </section>

              <section id="diritti">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">6. Diritti dell'Interessato (Artt. 15-22 GDPR)</h2>
                <p>In conformità con il GDPR, l'interessato ha il diritto di esercitare in qualsiasi momento i seguenti diritti nei confronti del Titolare del Trattamento:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Diritto di accesso (art. 15):</strong> Ottenere conferma che sia o meno in corso un trattamento di dati personali e, in tal caso, accedere ai dati.</li>
                  <li><strong>Diritto di rettifica (art. 16):</strong> Ottenere la rettifica dei dati personali inesatti o l'integrazione di quelli incompleti.</li>
                  <li><strong>Diritto alla cancellazione / Diritto all'oblio (art. 17):</strong> Richiedere la cancellazione dei dati personali qualora sussistano i motivi previsti dalla legge (es. revoca del consenso o dati non più necessari).</li>
                  <li><strong>Diritto di limitazione (art. 18):</strong> Ottenere la limitazione del trattamento in specifiche ipotesi (es. contestazione dell'esattezza dei dati).</li>
                  <li><strong>Diritto alla portabilità (art. 20):</strong> Ricevere i dati personali forniti in un formato strutturato, di uso comune e leggibile da dispositivo automatico, per trasmetterli a un altro titolare.</li>
                  <li><strong>Diritto di opposizione (art. 21):</strong> Opporsi in qualsiasi momento al trattamento dei dati personali, in particolare per finalità di marketing diretto.</li>
                </ul>
                <p className="mt-4">
                  Per esercitare questi diritti, l'interessato può inviare una richiesta scritta all'indirizzo email: privacy@temperiniorologi.it. Il Titolare fornirà una risposta entro 30 giorni dalla ricezione della richiesta.<br/><br/>
                  Fatto salvo ogni altro ricorso amministrativo o giurisdizionale, l'interessato ha inoltre il <strong>diritto di proporre reclamo</strong> all'Autorità di controllo competente (il Garante per la Protezione dei Dati Personali in Italia: www.garanteprivacy.it).
                </p>
              </section>

              <section id="cookie">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">7. Cookie</h2>
                <p>Il nostro sito web utilizza i cookie per garantire il corretto funzionamento delle pagine e migliorare l'esperienza utente. Utilizziamo:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Cookie tecnici:</strong> Necessari per la normale navigazione e fruizione del sito web. Non richiedono consenso.</li>
                  <li><strong>Cookie analitici:</strong> Utilizzati per raccogliere informazioni, in forma aggregata e anonima, sul numero degli utenti e su come questi visitano il sito (previo consenso).</li>
                  <li><strong>Cookie di marketing:</strong> Utilizzati per tracciare la navigazione degli utenti al fine di creare profili e inviare messaggi pubblicitari in linea con le preferenze manifestate (previo consenso esplicito).</li>
                </ul>
                <p className="mt-4">L'utente può gestire, disabilitare o cancellare i cookie attraverso le impostazioni del proprio browser o tramite il nostro pannello di controllo dei cookie (cookie banner) accessibile dal sito.</p>
              </section>

              <section id="sicurezza">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">8. Sicurezza</h2>
                <p>
                  La protezione dei tuoi dati è una priorità per noi. Abbiamo implementato misure di sicurezza tecniche e organizzative avanzate, tra cui la crittografia dei dati in transito (TLS/SSL), sistemi di protezione contro accessi non autorizzati, limitazione degli accessi interni solo al personale autorizzato, backup regolari e protocolli di formazione periodica del nostro personale sulle normative privacy.
                </p>
              </section>

              <section id="modifiche">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">9. Modifiche all'Informativa</h2>
                <p>
                  Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente Informativa Privacy in qualunque momento. La data di "Ultimo aggiornamento" all'inizio della pagina verrà modificata di conseguenza. In caso di modifiche sostanziali che richiedano nuove basi giuridiche, provvederemo a informare gli utenti registrati tramite comunicazione email o avviso evidente sul sito.
                </p>
              </section>

              <section id="contatti">
                <h2 className="text-2xl font-serif text-foreground mb-6 border-l-2 border-accent pl-4">10. Contatti e Reclami</h2>
                <p>
                  Per qualsiasi domanda, dubbio o per esercitare i tuoi diritti in merito a questa Informativa Privacy, puoi contattarci tramite:<br/><br/>
                  <strong>Temperini Orologi S.r.l.</strong><br/>
                  Via Montenapoleone 12, 20121 Milano (MI), Italia<br/>
                  Email: privacy@temperiniorologi.it<br/>
                  Telefono: +39 02 7631 8842<br/><br/>
                  Per presentare un reclamo ufficiale, puoi rivolgerti al Garante per la Protezione dei Dati Personali contattabile tramite il sito web ufficiale www.garanteprivacy.it.
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
