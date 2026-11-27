# Brand Strategy & Rebranding Blueprint — SassoMet Village

> Elaborato applicando le skills installate da `francevilla/skills`: `cmo-brand-profile`, `cmo-positioning`, `cmo-site-architecture`, `cmo-landing-page-builder`, `cmo-copywriting`, `cmo-local-seo`, `cmo-schema-markup`, `cmo-page-cro`, `cmo-form-cro`.

---

## 1. Posizionamento (`cmo-positioning`)

### Alternative reali sul mercato
1. **Diretti**: Altri distributori di carburante a Casalecchio di Reno, Zola Predosa e Bologna ovest (IP, Eni, Q8, Beyfin) e officine/centri revisione indipendenti.
2. **Adiacenti**: Concessionarie ufficiali (più care, tempi lunghi), autolavaggi stand-alone.
3. **Status quo**: Fare 4 soste diverse in 4 posti diversi (rifornimento, lavaggio, officina/gommista, revisione bombole).

### Attributi Unici → Valore → Prova
| Attributo | Valore per l'automobilista | Prova reale |
|---|---|---|
| Unico distributore Metano a Casalecchio di Reno + Pompe Bianche (Benzina, Diesel, GPL, AdBlue) + Ricarica EV | Un solo punto per ogni tipo di alimentazione, aperto 06:00–21:45 feriali e festivi | Impianto attivo dal marzo 2007 in Via M. Margotti 2/4 |
| Ecosistema completo "Village" (12+ servizi) | Rifornisci, revisoni, cambi gomme, lavi l'auto (e il tuo cane) mentre prendi un caffè o pranzi | Officina, Revisioni Auto/Moto/Bombole, Gommista, Autolavaggio, Bar-Tabacchi, Ristorante, Palestra, Pet Corner |
| Gestione familiare radicata sul territorio | Rapporto diretto, affidabilità e continuità senza sorprese | Famiglia Bizzini dal 1985; Main Sponsor Polisportiva Giovanni Masi e Coop. Nuove Generazioni |

### Positioning Statement
- **Interno**: Per gli automobilisti e le famiglie di Casalecchio di Reno e dell'area metropolitana di Bologna che vogliono prendersi cura del proprio veicolo senza perdere tempo tra mille fornitori, **SassoMet Village** è l'hub di mobilità e servizi che riunisce rifornimento multi-energia, officina certificata, revisioni, autolavaggio e ristoro in un unico luogo accessibile. A differenza dei normali distributori o delle officine isolate, offre oltre 12 servizi integrati gestiti direttamente dalla Famiglia Bizzini dal 2007.
- **One-liner pubblico**: *SassoMet Village è il tuo hub di mobilità a Casalecchio di Reno: carburanti, ricarica EV, officina, revisioni, autolavaggio e servizi Village in un'unica sosta.*

---

## 2. Messaging Hierarchy (`cmo-positioning` & `cmo-copywriting`)

- **Tagline**: *Energia, cura auto e servizi. Tutto in un solo Village.*
- **Value Proposition**: Dal rifornimento metano ed elettrico alla revisione auto e bombole, fino al lavaggio e alla pausa caffè: a Casalecchio di Reno trovi tutto ciò che serve a te e alla tua auto, con l'affidabilità della Famiglia Bizzini.
- **4 Pilastri**:
  1. **Multi-Energia Ogni Giorno**: Metano, Benzina, Diesel, GPL, AdBlue e ricarica EV aperti dalle 06:00 alle 21:45, feriali e festivi.
  2. **Officina & Revisioni Certificate**: Meccanica tutte marche, gommista, revisioni auto/moto e collaudo bombole Metano, GPL, Carbonio e CNG4.
  3. **Cura Auto & Pet**: Autolavaggio self-service e servito, lavaggio tappezzerie e Pet Corner attrezzato per cani e gatti.
  4. **Il Tuo Tempo nel Village**: Bar-tabacchi, ristorante-pizzeria, palestra e centro estetico con ampio parcheggio sempre disponibile.

---

## 3. Brand Voice & Visual Identity (Rebranding)

### Brand Voice
- **Scala**: Diretto (7/10), Vicino/Umano (8/10), Tecnico ma chiaro (7/10), Solido e rassicurante (8/10).
- **È**: Concreto, affidabile, locale, orientato alla soluzione rapida.
- **Non è**: Burocratico, freddo, pieno di superlativi vuoti ("leader indiscusso", "innovativo a 360°").

### Sistema Visivo (Design Tokens)
- **Primary Deep Slate (`#0F172A`)**: Solidità industriale, officina moderna, leggibilità massima.
- **Eco Mobility Emerald (`#0D9488` / `#10B981`)**: Richiamo al Metano, all'E-Mobility e alla sostenibilità territoriale.
- **Warm Energy Amber (`#F59E0B`)**: Accento ad alta visibilità per CTA principali, orari e segnaletica da hub stradale.
- **Surface Warm Gray (`#F8FAFC` / `#F1F5F9`)**: Pulizia editoriale, respiro e contrasto WCAG 2.2 AA (>= 4.5:1).
- **Tipografia**: `Space Grotesk` (titoli e numeri — carattere geometrico, tecnico e contemporaneo) + `Plus Jakarta Sans` (testo corpo e UI — massima leggibilità mobile).

---

## 4. Site Architecture & Piano Redirect 301 (`cmo-site-architecture`)

### Nuova Struttura
- `/` — Homepage Hub (stato live orari, macro-servizi filtrabili, storia/team, prenotazione rapida, FAQ, mappa)
- `/#carburanti` — Carburanti & E-Mobility
- `/#officina` — Officina, Gomme & Revisioni
- `/#autolavaggio` — Autolavaggio & Cura Auto
- `/#village` — Servizi Village (Bar, Ristorante, Pet Corner, Palestra)
- `/#chi-siamo` — Storia Famiglia Bizzini, Organigramma & Sponsorizzazioni
- `/#prenota` — Prenotazione Officina / Revisioni / Contatti

### Piano Redirect 301 & Pulizia Legacy (SEO)
| Vecchio URL (`sassomet.it`) | Azione | Destinazione |
|---|---|---|
| `/chi-siamo/` | 301 | `/#chi-siamo` |
| `/contatti/` | 301 | `/#prenota` |
| `/servizio-bar-e-tabacchi/` | 301 | `/#village` |
| `/palestra-e-centro-estetico/` | 301 | `/#village` |
| `/portfolio/bridge-construction/` | 410 Gone | Rimuovere (demo Lorem Ipsum) |
| `/portfolio-category/construction-projects/` | 410 Gone | Rimuovere (demo Lorem Ipsum) |
| `/2017/01/30/*` | 410 Gone | Rimuovere (post demo 2017) |
