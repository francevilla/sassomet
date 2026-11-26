# CMS proprietario con AI — strategia e progetto iniziale

**Stato:** proposta da approvare, non implementazione.
**Caso pilota:** Eniminds.
**Decisioni del committente:** piattaforma SaaS per più clienti; progettazione prima dello sviluppo; chat AI integrata e accesso per assistenti esterni via MCP.
**Vincolo operativo:** il sito e il CMS Eniminds attuali restano invariati durante progettazione e sviluppo; nessun cambio di dominio, risorse o dati Production senza un piano e un'autorizzazione separati.

## 1. Visione e posizionamento

Una piattaforma proprietaria italiana per creare e gestire siti professionali a partire da modelli curati. Un cliente può modificare il proprio sito in un editor visuale, lavorare sui contenuti e chiedere aiuto a un assistente AI. Un'agenzia può gestire più clienti senza mescolare accessi e dati. L'AI propone modifiche verificabili; la pubblicazione resta sotto controllo umano.

Il prodotto è **ispirato alle funzionalità pubblicamente descritte** da Deep CMS, non alla copia del suo codice, marchio, testi, interfaccia, modelli o immagini. Il nome, l'identità, i componenti e i template del nuovo prodotto sono da progettare in modo originale. «Proprietario» significa controllo del codice e dell'esperienza, non che ogni componente debba essere scritto da zero: le licenze e la portabilità delle dipendenze andranno verificate.

### Utenti e risultati desiderati

- **Titolare del cliente:** può controllare il sito, i collaboratori e la pubblicazione.
- **Editor del cliente:** aggiorna contenuti e prepara bozze senza dover programmare.
- **Agenzia/operatore:** collabora su più siti solo dove ha ricevuto accesso; non ha accesso implicito a tutti i clienti.
- **Visitatore:** naviga un sito veloce, accessibile e indicizzabile, con privacy e moduli adeguati.
- **Assistente AI:** lavora solo nel perimetro autorizzato e lascia tracce consultabili.

## 2. Cosa offre il riferimento e come tradurlo

| Area descritta dal riferimento | Proposta per il nostro prodotto | Priorità proposta |
| --- | --- | --- |
| Modelli, varianti, sezioni riordinabili, anteprima desktop/mobile | Editor a componenti con uno stile Eniminds originale e un secondo modello originale per verificare che il motore sia davvero riutilizzabile | MVP |
| Blog, collezioni e campi personalizzati | Blog e pagine nell'MVP; collezioni e campi configurabili nella fase successiva | MVP / fase 2 |
| Assistente esterno MCP, chiavi, permessi e registro | Server MCP per lettura e modifica delle bozze; pubblicazione disattivata per le chiavi nell'MVP | MVP |
| SEO, sitemap, lingue e dati strutturati | Titolo, descrizione, canonical, sitemap e Open Graph; JSON-LD dove applicabile. Multilingua e hreflang in fase 2 | MVP / fase 2 |
| Immagini ottimizzate | Libreria media, validazione e varianti responsive; immagini pubblicate accessibili pubblicamente, bozze private | MVP |
| Moduli e gestione richieste | Modulo essenziale con protezione spam e inbox; pipeline e notifiche evolute in fase 2 | MVP limitato / fase 2 |
| Cookie, registro consensi e statistiche senza cookie | Blocco preventivo degli script opzionali e preferenze; registro e analytics da progettare con consulenza privacy | Presidio prima del lancio / fase 2 |
| Negozio e Stripe | Modulo separato per catalogo, checkout, ordini, tasse e spedizioni | Successivo, fuori MVP |
| Download contenuti e media | Esportazione per cliente con manifest, contenuti e media; verifica del ripristino | MVP controllato |

Il riferimento presenta queste funzionalità come caratteristiche del proprio prodotto: non sono una verifica indipendente né una promessa che il nostro le possieda già. Le priorità sopra sono una proposta, non una decisione definitiva del committente.

## 3. Punto di partenza reale: Eniminds

Nel repository corrente ci sono React/Vite, rendering server Express, validazione Zod, archiviazione Neon e upload Vercel Blob. Il contenuto è un unico documento `cms_content` per un sito, con revisione per evitare sovrascritture concorrenti. L'editor gestisce campi predeterminati e articoli; l'utente ha verificato su Production accesso, modifica, pubblicazione e upload.

**Da riutilizzare:** esperienza acquisita, componenti grafici originali, contenuti autorizzati, test, meccanismo di revisione e lezioni del deploy. **Da riprogettare:** il modello a documento unico e campi rigidi, gestione utenti, isolamento tra clienti, editor, workflow, media, infrastruttura e sicurezza. Non è ancora un SaaS multi-tenant.

**Limiti attuali:** una sola credenziale amministrativa per ambiente, nessuna MFA, ruoli, storico/audit, backup automatico o anteprima condivisibile; le immagini caricate sono pubbliche anche prima della pubblicazione e la validazione ne controlla la firma senza ricodifica. Le bozze degli articoli esistono, ma non c'è un sistema completo di bozze e versioni dell'intero sito. Il branch Neon di sicurezza creato dall'utente è nello stesso progetto e non contiene i Blob: non sostituisce backup indipendenti o test di ripristino. Il deployment Eniminds è su Vercel Hobby; l'utente ha dichiarato l'uso commerciale e ha scelto di procedere nonostante l'avviso. Serve regolarizzare il piano prima dell'uso commerciale continuativo; valutare anche i termini degli altri fornitori.

## 4. MVP consigliato: prodotto verticale funzionante

L'MVP non replica tutte le funzioni di Deep CMS: dimostra che **due organizzazioni isolate** possono creare, modificare e pubblicare siti diversi, usando AI in sicurezza. Per il lancio commerciale è obbligatorio completare anche le verifiche della sezione 10.

### Incluso

1. **Account e siti:** organizzazioni, utenti invitati, ruoli Owner/Editor/Viewer; un'organizzazione può avere più siti. Login con un servizio di identità affidabile, MFA almeno per Owner e operatori. Nessuna registrazione libera finché non sono pronte fatturazione e anti-abuso: onboarding assistito per il pilota.
2. **Editor a sezioni:** due template originali, componenti tipizzati (hero, testo/immagine, card, CTA, contatti e lista articoli), riordino, aggiunta/rimozione, varianti predefinite, colori e font consentiti. Anteprima desktop/mobile, accessibile anche da tastiera. Non è un page builder a posizionamento libero.
3. **Contenuti:** pagine, navigazione e blog; bozze persistenti per l'intero sito, pubblicazione esplicita, cronologia e ripristino di versioni, conflitti di modifica comprensibili. Articoli in bozza mai esposti al pubblico.
4. **Media:** caricamento autenticato, limiti e verifica, ricodifica immagini e rimozione metadati sensibili, dimensioni responsive, alt text. Upload di prova e file privati non sono pubblici fino alla pubblicazione. Cancellazione sicura e inventario dei riferimenti.
5. **Pubblicazione:** anteprima autenticata e separata dal sito pubblico; snapshot immutabile pubblicato, rollback di contenuti, HTTPS e instradamento per sito. Il primo rilascio usa sottodomini controllati; domini personalizzati solo dopo verifica proprietà e procedure operative.
6. **AI nel pannello:** scrittura e riscrittura di testo, proposte di pagine/sezioni e metadati entro i componenti consentiti. Mostra differenze e anteprima, applica solo alla bozza dopo conferma. Costi, quote e limiti visibili; nessuna azione nascosta o pubblicazione automatica.
7. **MCP:** endpoint autenticato e versionato che espone strumenti circoscritti a sito e ruolo: lettura contenuti, elenco componenti, proposta/aggiornamento bozza. Chiavi revocabili e scadenza, solo lettura o scrittura di bozze; audit e limiti. Pubblicazione via MCP non disponibile nell'MVP. Verificare con ciascun client il metodo di autenticazione compatibile; non assumere compatibilità universale.
8. **SEO e qualità:** meta per pagina indicizzabile obbligatori, canonical, sitemap/robots coerenti, struttura semantica, URL prevedibili, redirect 301 per migrazioni, controlli accessibilità e performance. Nessuna promessa di posizionamento o citazioni AI.
9. **Moduli essenziali:** un modulo di contatto, anti-spam, inbox con accesso autorizzato e notifica configurabile; retention ed eliminazione da definire. Nessuna esportazione di dati personali verso AI per default.
10. **Operatività:** log/audit senza segreti, monitoraggio e alert, backup e prova di ripristino di database e media, export per sito, limiti per tenant, supporto e procedure incidenti.

### Non incluso nell'MVP

Commercio elettronico, pagamenti SaaS self-service, abbonamenti automatici, marketplace di template, automazioni di marketing, pipeline CRM completa, analytics avanzate, multilingua, collezioni personalizzate, generazione immagini e pubblicazione automatica da AI. Possibili evoluzioni, non requisiti tacitamente eliminati.

## 5. Architettura proposta

### Principi

- **Separare piano di controllo e siti pubblici:** pannello e API per configurare; renderer pubblico che legge solo snapshot pubblicati. Bozze, messaggi e chiavi non sono mai inclusi nel payload pubblico.
- **Multi-tenant dall'inizio:** identità e permessi verificati sul server per ogni richiesta e oggetto, compresi media, anteprime, job, export e AI. Il solo nascondere un sito nell'interfaccia non è isolamento.
- **Modello a blocchi tipizzati, non HTML arbitrario:** registry di componenti versionati e schemi validati; vietare esecuzione di codice arbitrario e sanitizzare HTML/URL dove consentiti. Migrazioni esplicite per versioni di schema e template.
- **Distribuzione separata:** nuovo progetto, ambienti e risorse di sviluppo/staging distinti dalla Production Eniminds. Valutare fornitori, regioni, contratti e costi prima di attivarli. Nessun accesso automatico del nuovo SaaS al vecchio database.

### Componenti e scelte indicative

- **Frontend pannello:** React con TypeScript, editor a componenti e anteprima con renderer condiviso. Framework e librerie specifici da scegliere tramite un breve spike tecnico; non legarsi a una tecnologia solo perché usata ora.
- **Backend/API:** Node.js + TypeScript, API versionate e uno strato servizi unico, usato anche da chat e MCP. I controlli di autorizzazione sono nel dominio applicativo, non solo nelle route.
- **Identità:** provider gestito con MFA, inviti, revoca sessioni e recupero account; verificare portabilità, residenza, costi e licenza prima di selezionarlo.
- **PostgreSQL:** dati relazionali per identità, organizzazioni, membership, siti, pagine e versioni; JSON validato per blocchi e proprietà. PostgreSQL può essere gestito, ad esempio Neon, con test espliciti di isolamento e ripristino.
- **Oggetti:** storage compatibile con oggetti privati per bozze/originali e asset pubblici separati per contenuti pubblicati. Il renderer e la CDN non espongono oggetti privati; URL temporanei solo se appropriati. Validare provider, trasformazioni e residenza.
- **Hosting:** Vercel Pro o altro hosting commerciale da confrontare per renderer, pannello, domini e limiti; non è ancora una scelta né una stima. L'architettura deve permettere la sostituzione del provider.
- **Job:** worker/queue affidabile per trasformazioni immagini, export e notifiche, con retry, idempotenza e dead-letter; non usare processi in memoria come unica fonte di verità.
- **AI:** adapter provider-agnostic, credenziali gestite lato server, modello e costi configurabili. Decidere prima se le chiavi sono della piattaforma o del cliente; nessun segreto nel browser.
- **MCP:** servizio separabile o endpoint del backend che richiama gli stessi servizi autorizzati; scegliere trasporto e autenticazione in base alle specifiche MCP e ai client supportati, verificando compatibilità reale.

### Modello dati minimo

| Entità | Dati essenziali / vincoli |
| --- | --- |
| `organizations`, `users`, `memberships` | ID organizzazione, utenti e ruolo; ogni operazione risolve membership attiva sul server |
| `sites`, `domains`, `templates` | Ogni sito appartiene a un'organizzazione; domini verificati e univoci; template con versione |
| `pages`, `blocks`, `posts` | Scoping per sito, slug univoci per sito/lingua, schemi e riferimenti validati |
| `revisions`, `publications` | Versioni di bozza e snapshot pubblicati immutabili, autore e timestamp; puntatore pubblico aggiornato atomicamente |
| `assets` | Proprietario, stato private/public, tipo, dimensioni, checksum e varianti; associazioni al sito |
| `api_credentials`, `audit_events` | Credenziali MCP con hash, scope, scadenza e revoca; registro azioni con attore e sito, senza token né contenuti inutili |
| `forms`, `submissions` | Sito, campi autorizzati, stato e retention; accesso ristretto e cancellazione |
| `ai_runs`, `usage` | Attore, sito, operazione, revisione base, stato, consumo e riferimenti audit; contenuti dei prompt solo secondo policy |

Ogni tabella con dati cliente deve includere o derivare in modo verificabile l'organizzazione e il sito. Usare chiavi esterne composte, indici e vincoli per impedire riferimenti incrociati. Come difesa aggiuntiva valutare Row Level Security, con identità tenant impostata per transazione e testata con il connection pooling: RLS non sostituisce i controlli applicativi e non funziona se si opera con ruoli privilegiati che la bypassano. Testare ogni endpoint con due tenant e account senza membership.

### Workflow di pubblicazione

1. Editor apre una bozza identificata dalla revisione; ogni salvataggio usa controllo di concorrenza.
2. Anteprima autenticata mostra esattamente quella revisione e i media privati autorizzati.
3. Checklist valida schema, link interni, alt, SEO obbligatoria e dominio; segnala problemi non bloccanti.
4. Un Owner o utente con permesso di pubblicazione approva; il server crea uno snapshot consistente e aggiorna atomicamente il puntatore pubblico.
5. Renderer/CDN servono solo lo snapshot; invalidazione cache e verifica post-pubblicazione. Lo storico permette di ripubblicare uno snapshot precedente; non ripristina automaticamente database, file cancellati o risorse esterne.

## 6. Sicurezza AI e MCP

- I contenuti di pagine, file, messaggi e risposte di strumenti sono **dati non fidati**, non istruzioni di sistema. Proteggersi dal prompt injection; non garantire che sia completamente eliminabile.
- Gli strumenti operano con la stessa autorizzazione dell'utente o della chiave, scoping per organizzazione/sito e divieto di escalation. Conferma esplicita per applicare la proposta; nessuna pubblicazione autonoma nell'MVP.
- Non dare accesso a segreti, altri tenant, messaggi di contatto o credenziali salvo autorizzazione e necessità specifiche. Limitare lunghezza input/output, costo, frequenza, tempo e concorrenza per tenant.
- Validare ogni output AI come input non fidato rispetto allo schema componenti, URL e policy; niente SQL, shell, HTML o codice generati ed eseguiti automaticamente. Per link esterni applicare controlli anti-SSRF in caso di fetch; di default niente navigazione autonoma.
- Chiavi MCP casuali ad alta entropia, memorizzate come hash, mostrate una sola volta, ruotate/revocabili, scopi minimi e TLS. Niente token in URL o log. Audit con autore, operazione, oggetti coinvolti e risultato; retention e accesso documentati.
- Per chat e provider AI: minimizzazione, avviso all'utente su ciò che viene inviato e scelta del fornitore; accordi di trattamento, trasferimenti internazionali, retention e training dei dati da verificare prima del lancio. Nessun uso dei dati dei clienti per training senza un'apposita base e scelta contrattuale.

## 7. Privacy, sicurezza e affidabilità

Questa sezione non costituisce consulenza legale. Definire ruoli titolare/responsabile, sub-responsabili, DPA, ubicazione dati, informative, richieste degli interessati, durata, cancellazione e notifica incidenti con un professionista privacy. Anche le statistiche senza cookie possono comportare trattamento di dati: non presumere esenzione dal consenso o dal GDPR. I tag opzionali devono restare bloccati fino alla scelta valida; revoca e versioni dell'informativa vanno trattate secondo il disegno legale approvato. Testare i moduli senza inserire dati personali reali nei dati di prova.

Baseline tecnica: TLS, MFA, sessioni sicure e revocabili, CSRF dove rilevante, rate limiting distribuito, validazione input/output, protezione XSS/SSRF, controlli anti-abuso, secret manager, aggiornamenti dipendenze, test di isolamento, audit log protetti, cifratura e privilegi minimi. Definire backup separati di database **e** media, retention, RPO/RTO concordati e ripristino periodicamente testato; una stima iniziale da validare è RPO 24 ore e RTO 4 ore, non una garanzia attuale. Monitorare disponibilità, errori, coda, costi e quota AI. Eseguire revisione di sicurezza indipendente prima del lancio commerciale.

## 8. Migrazione pilota Eniminds senza interrompere il sito

1. **Inventario e backup:** verificare in lettura pagine, menu, articoli pubblicati e bozze, revisioni e tutte le immagini effettivamente referenziate. L'endpoint pubblico non include le bozze: esportare anche i dati autenticati/autorizzati. Salvare copie indipendenti del database e degli oggetti media; controllare che siano ripristinabili. Non eliminare lo store Preview: il controllo precedente riguardava solo uno specifico pattern URL e non esclude altre dipendenze.
2. **Ambiente isolato:** creare un tenant e uno staging con dati e credenziali dedicati; non collegare il nuovo sistema a `main` Production in scrittura. I dati reali sono copiati solo con autorizzazione e tutele appropriate.
3. **Import versionato e ripetibile:** convertire il documento Eniminds in pagine, blocchi, articoli, media e impostazioni; mantenere percorsi, metadati, redirect e riferimenti. Registrare checksum, numero di elementi, errori e associazioni; non sovrascrivere le modifiche successive senza confronto.
4. **Confronto:** confronto contenuti e immagini, URL, link, SEO, visuale desktop/mobile, accessibilità, moduli, CMS e AI; verificare anche bozze non visibili al pubblico. Provare restore e rollback su staging. Il sito esistente resta la fonte ufficiale fino al passaggio.
5. **Finestra di cutover approvata:** sospendere modifiche editoriali, fare backup finale, sincronizzazione incrementale e verifica; predisporre rollback del routing e procedure dati. Chiedere approvazione prima di qualsiasi cambio dominio o traffico.
6. **Dopo il cutover:** controllare contenuti e funzionalità, monitorare errori, conservare la vecchia infrastruttura per un periodo concordato. Un rollback del deploy non ripristina i dati esterni: identificare in anticipo come gestire modifiche fatte nel nuovo CMS. Eliminazione delle vecchie risorse solo dopo inventario, backup e autorizzazione.

## 9. Roadmap e stima preliminare

Le durate sono **ordini di grandezza, non preventivo**: assumono un piccolo team con competenze prodotto/design, full-stack, infrastruttura e QA; lavoro in parte parallelo, requisiti stabili e disponibilità del committente. Integrazioni, compliance e revisione indipendente possono estendere i tempi. Nessuna fase implica spesa o attivazione automatica.

| Fase | Risultato e criterio di uscita | Stima indicativa |
| --- | --- | --- |
| 0. Discovery | Interviste, prototipo UX, definizione clientela, checklist legale, budget e backlog approvati | 1–2 settimane |
| 1. Fondazioni | Ambienti separati, identità/ruoli, isolamento tenant, storage e backup; test cross-tenant superati | 3–5 settimane |
| 2. Editor e pubblicazione | 2 template originali, componenti, media, bozze, cronologia, preview, renderer pubblico e SEO di base; due siti indipendenti | 5–8 settimane |
| 3. AI e MCP | Chat e MCP draft-only, autorizzazione, diff/approvazione, audit e quote; test di abuso e compatibilità client | 3–5 settimane |
| 4. Pilota e hardening | Import Eniminds in staging, confronto, test di ripristino, accessibilità, sicurezza e collaudo; decisione di lancio | 3–5 settimane |
| 5. Espansione | Multilingua, collezioni, analytics/consensi, CRM, billing SaaS e-commerce secondo priorità | Da stimare dopo pilota |

Sequenzialmente il percorso è circa **15–25 settimane**; sovrapposizioni possono ridurlo ma non eliminano dipendenze, collaudi e revisione. Non c'è un preventivo affidabile senza team, tariffe e carico stimato. Per costruirlo: `costo sviluppo = giornate per ruolo × tariffa + design/QA/privacy/security + contingenza`; distinguere costi una tantum da canoni.

### Costi ricorrenti da stimare prima di scegliere i prezzi

Hosting e banda/rendering; database e backup; storage, trasformazioni e CDN; identità/email; code/monitoraggio; consumi AI per richiesta e per cliente; supporto; revisione sicurezza e consulenza privacy; dominio, pagamenti e commissioni solo se attivati. Simulare almeno 10, 100 e 1.000 siti con ipotesi esplicite su traffico, asset e richieste AI; verificare listini e termini aggiornati dei provider. Prezzi o margini non sono ancora determinabili. Prevedere quote e alert per evitare costi imprevedibili.

## 10. Criteri di accettazione prima del lancio

- Due organizzazioni e almeno due siti con utenti e asset separati: test automatici negativi su API, MCP, anteprime, URL media, export e job; zero accessi incrociati.
- Un cliente crea un sito da template originale, modifica/riordina sezioni, carica un'immagine, salva bozza, controlla mobile e pubblica; un altro cliente non vede nulla.
- Modifiche e articoli in bozza mai esposti dal renderer pubblico, dalle API pubbliche, cache, sitemap o asset; i visitatori vedono solo lo snapshot pubblicato.
- L'AI propone una modifica, l'utente vede diff e anteprima, la applica alla bozza e pubblica esplicitamente; l'assistente non può pubblicare o superare gli scope. Registro e revoca MCP verificati.
- Errori di validazione, conflitti di editing, limiti di upload, interruzioni del provider AI e tentativi di prompt injection testati; nessuna esecuzione di codice generato.
- Restore provato con database **e** media; export reintegrabile verificato; monitoraggio e runbook in uso. Verifica delle autorizzazioni e un audit di sicurezza indipendente completati con problemi critici risolti.
- Privacy, contratti fornitori, cookie, accessibilità e piani commerciali valutati da persone competenti. SEO e performance misurati e soglie concordate, senza promettere ranking.
- Eniminds confrontato in staging e piano di cutover/rollback approvato; nessuna migrazione Production senza un'ulteriore autorizzazione.

## 11. Decisioni da prendere nella discovery

1. Nome, proprietà del codice, titolarità dei template e disponibilità del repository prodotto separato.
2. Cliente iniziale, paesi e lingue, numero di siti previsto, modello self-service rispetto ad onboarding assistito.
3. Funzioni MVP: proposta di questa strategia, in particolare se includere subito moduli, export e MCP oltre alla chat.
4. Primo provider AI e modello economico (chiave piattaforma o cliente), soglie di spesa, dati consentiti, residenza e client MCP da supportare.
5. Provider identità/hosting/database/media, requisiti UE, budget e disponibilità del team. Non acquistare servizi senza conferma.
6. Piano e priorità per consensi/analytics, collezioni, multilingua, commercio e fatturazione SaaS; consulenza legale e sicurezza.
7. Quali parti del design Eniminds possono diventare un template riutilizzabile e quali restano esclusive.

## Fonti esaminate

- [Deep CMS — homepage italiana](https://www.deep-cms.com/it/): funzionalità dichiarate, editor, contenuti, AI, SEO, moduli, privacy ed e-commerce.
- [Deep CMS — come funziona](https://www.deep-cms.com/it/come-funziona/): workflow modello/editor/pubblicazione, collezioni e export dichiarati.
- [Deep CMS — creare un sito con AI](https://www.deep-cms.com/it/creare-sito-con-ai/): MCP, permessi e registro dichiarati.
- Repository Eniminds: `server/index.mjs`, `server/content-store.mjs`, `server/neon-store.mjs`, `src/admin.jsx`, `deploy/schema.sql`, `deploy/VERCEL.md` e `package.json`; documentazione di deploy contiene informazioni antecedenti alle verifiche Production svolte successivamente.
