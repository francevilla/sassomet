# Eniminds — analisi del sito esistente

Analisi preliminare dei contenuti e delle informazioni pubbliche disponibili il 23 novembre 2026. Obiettivo: preparare la ricostruzione del sito, non replicare automaticamente tutte le sue scelte attuali.

## Posizionamento e pubblico

Eniminds si presenta come una realtà specializzata in energia, innovazione e sostenibilità. Dichiara di essere una startup innovativa e benefit, fondata nel settembre 2024 da professionisti del settore. Il pubblico è composto da imprese, associazioni di categoria, pubbliche amministrazioni e condomìni, con o senza amministratore.

La proposta principale è una consulenza che collega gestione energetica, transizione digitale, innovazione e sostenibilità ESG. Per il residenziale viene aggiunta la gestione condominiale e immobiliare.

## Mappa delle pagine

| URL | Funzione e contenuti principali |
| --- | --- |
| `/` | Presentazione, visione, priorità, aree di consulenza, due pubblici e modulo di contatto. |
| `/chi-siamo/` | Presentazione della società e dei fondatori, con richiesta informazioni. |
| `/vision-e-mission/` | Rinnovabili, smart grid, prosumer e Industria 5.0. |
| `/priorita/` | Sostenibilità, controllo dei costi energetici e innovazione tecnologica. |
| `/consulenze/` | Introduzione generale alle consulenze e modulo. |
| `/per-consumatori/` | Servizi per imprese, associazioni e pubbliche amministrazioni. |
| `/per-condomini/` | Gestione condominiale, servizi immobiliari e sostenibilità. |
| `/blog/` | Elenco articoli; nella versione pubblica analizzata contiene un articolo segnaposto. |
| `/sps-2026/` | Pagina pubblica individuata nell'API: il testo estratto contiene soltanto il titolo. Contenuti visivi o dinamici non verificati. |
| `/2024/12/12/titolo-articolo/` | Articolo segnaposto con testo Lorem ipsum, visibile dal blog. |

## Servizi da preservare e chiarire

**Per organizzazioni:** tutoraggio energetico e diagnosi, comunità energetiche e autoconsumo, innovation management, carbon management, sustainability management e consulenza sull'eleggibilità a crediti di imposta per Industria 4.0, Transizione 5.0 e ricerca e sviluppo. Le condizioni e la normativa vanno aggiornate prima della pubblicazione.

**Per il residenziale:** gestione ordinaria, tabelle millesimali, regolamenti, revisioni, sinistri, assistenza legale e consulenza condominiale, ripartizione delle spese e piani di sostenibilità. Il sito indica anche la possibilità di affiancare amministratori.

## Funzioni e contatti osservati

- Navigazione verso le pagine istituzionali e le due categorie di destinatari.
- Inviti ricorrenti a richiedere informazioni.
- Modulo con nome e cognome, telefono, e-mail, messaggio e checkbox privacy. Il rendering pubblico mostra anche le etichette tecniche «New Field» e il pulsante «Submit»: da correggere e verificare nel nuovo form. Non è stato effettuato alcun invio di prova.
- Indirizzo di contatto: `info@eniminds.com`. Nel footer pubblico compaiono sede legale, dati societari e link alla privacy policy: recuperarli e farli verificare prima della pubblicazione.
- Presenza di un blog, di una sitemap e di `robots.txt`.

## Indizi tecnici verificati

- Il sito espone l'API pubblica WordPress (`/wp-json/` e `/wp-json/wp/v2/`).
- L'API espone il namespace `divi/v1`; il contenuto del form restituito da WordPress contiene classi `et_pb_*`, riconducibili a Divi. Non è stata verificata la configurazione completa di tema e plugin.
- Nell'API compaiono anche namespace riconducibili a Iubenda, Post SMTP e Wordfence. La loro effettiva configurazione e il loro uso non sono stati verificati.
- La libreria media pubblica include un logo SVG e diverse immagini denominate iStock. La presenza sul sito non prova che le licenze coprano un nuovo utilizzo: verificarle prima di riutilizzarle.
- Diverse immagini restituite dall'API hanno `alt_text` vuoto. Occorre controllare e compilare gli alt pertinenti durante la migrazione.

## Opportunità per il rifacimento

1. **Rendere esplicita l'offerta in apertura:** spiegare subito a chi si rivolge Eniminds, cosa fa e quale azione compiere.
2. **Separare i percorsi:** contenuti e chiamate all'azione distinti per organizzazioni e condomìni, mantenendo le informazioni comuni accessibili.
3. **Riorganizzare i servizi:** offrire pagine o sezioni comprensibili, con attività concrete e destinatari; evitare promesse o risultati non documentati.
4. **Aggiornare il linguaggio:** meno maiuscolo e formule generiche; messaggi chiari e verificabili, senza inventare certificazioni, clienti o numeri.
5. **Migliorare i contatti:** modulo accessibile, etichette in italiano, privacy realmente consultabile, validazione e conferma; integrazione di invio da concordare e testare.
6. **Curare migrazione e ricerca:** conservare gli URL utili o predisporre redirect 301, metadata, sitemap e canonical; decidere cosa fare del blog segnaposto e della pagina evento.
7. **Accessibilità e prestazioni:** gerarchia dei titoli, contrasti, navigazione da tastiera, immagini ottimizzate e testi alternativi; verificare su dispositivi reali e browser.
8. **Privacy e consenso:** definire con il responsabile privacy informativa, cookie, conservazione dei dati, eventuali analytics e trattamento del modulo. Nessun banner o documento legale può essere considerato conforme senza verifica.

## Limiti dell'analisi

L'ispezione si basa su testo pubblico, ricerca e API WordPress. L'accesso diretto al sito dal sandbox è limitato; non è stato possibile effettuare un audit visuale affidabile, un test responsive o un'analisi delle richieste di rete in browser. Non sono stati verificati amministrazione, sorgenti privati, integrazioni effettive, invio del modulo, prestazioni, sicurezza o stato SEO in Search Console. REA è disponibile nella sessione, ma non è stato utilizzato per analizzare direttamente il sito: l'accesso di rete del sandbox verso il dominio non è disponibile.

## Materiali e decisioni necessari prima della pubblicazione

- Obiettivo primario del sito, priorità commerciali e servizi attualmente offerti.
- Direzione visiva: preservare l'identità esistente oppure riprogettarla.
- Necessità di un CMS per modificare pagine e articoli; scelta dell'hosting.
- Logo originale, eventuale brand manual, fotografie e relative licenze.
- Testi aggiornati, persone e referenze autorizzate, eventuali prove di risultati e certificazioni.
- Destinazione dei contatti, servizio di invio e requisiti privacy/cookie.
- Inventario degli URL da mantenere, accesso alle statistiche e verifica della proprietà del dominio al momento della migrazione.

## Fonti

- https://eniminds.com/
- https://eniminds.com/chi-siamo/
- https://eniminds.com/vision-e-mission/
- https://eniminds.com/priorita/
- https://eniminds.com/consulenze/
- https://eniminds.com/per-consumatori/
- https://eniminds.com/per-condomini/
- https://eniminds.com/blog/
- https://eniminds.com/sps-2026/
- https://eniminds.com/wp-json/
- https://eniminds.com/wp-json/wp/v2/pages?per_page=100&_fields=id,slug,link,title,modified
- https://eniminds.com/wp-json/wp/v2/posts?per_page=100&_fields=id,slug,link,title,date
- https://eniminds.com/wp-json/wp/v2/media?per_page=30&_fields=id,slug,source_url,title,alt_text
- https://eniminds.com/robots.txt
