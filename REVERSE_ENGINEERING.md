# Reverse Engineering — www.sassomet.it (SassoMet Village S.r.l.)

## 1. Identità Aziendale e Dati Societari
- **Ragione sociale**: SassoMet S.r.l. (brand commerciale: **SassoMet Village**)
- **Sede legale e operativa**: Via Maria Margotti 2/4, 40033 Casalecchio di Reno (BO), Italia
- **P.IVA / Codice Fiscale**: `03497720379`
- **Telefono**: `051 6166715`
- **Email**: `info@sassomet.it`
- **PEC**: `sassometsrl@pec.it`
- **Proprietà**: Famiglia Bizzini (fratelli Renato, Giovanni e Leardo Bizzini)
- **Origine del nome**: *SassoMet* = *Sasso Marconi Metano* (progetto nato nel 1985, poi realizzato a Casalecchio di Reno e inaugurato nel marzo 2007).
- **Sponsorizzazioni e territorio**: Main Sponsor della *Polisportiva Giovanni Masi* di Casalecchio di Reno e della Cooperativa Sociale Casalecchiese *"Nuove Generazioni"* (da settembre 2020).

---

## 2. Storia e Posizionamento
- **1985**: Intuizione dei tre fratelli Bizzini (ex imprenditori agricoli) di aprire un grande distributore di metano.
- **Marzo 2007**: Inaugurazione dell'area di servizio a Casalecchio di Reno (unico distributore di metano per auto del comune).
- **Espansione "Village"**: Integrazione progressiva di autolavaggio, officina meccanica, bar-tabacchi, ristorante-pizzeria, palestra e centro estetico.
- **Giugno 2019**: Apertura Centro Chiavi Casa & Auto.
- **Ottobre 2019**: Apertura Centro Revisioni Auto & Moto e rivendita bombole GPL per casa e caravan.
- **2021+**: Nuova area carburanti adiacente con Benzina, Diesel, AdBlue, GPL e colonnine di ricarica per veicoli elettrici (impianto "Pompe Bianche").
- **Value proposition**: Un *"porto sicuro"* multifunzionale dove curare il proprio veicolo a 360° e rilassarsi usufruendo dei servizi ristoro, benessere e tempo libero.

---

## 3. Organigramma (da `/chi-siamo/`)
- **Renato Bizzini**: Socio – Legale Rappresentante
- **Giovanni Bizzini**: Socio
- **Leardo Bizzini**: Socio – Responsabile Officina
- **Devis Bizzini**: Responsabile Centro Gomme – Reference Point
- **Morena Boni**: Amministrazione
- **Sebastiano Fiori**: Addetto Centro Revisioni – Meccanico
- **Rommel Rivera**: Addetto Lavaggio Auto e Tappezzerie
- **Addetti Distributori Carburanti**: Salvatore Turco, Paolo Nadalini, Graziano Bizzini

---

## 4. Mappa dei Servizi (Architettura Informativa Attuale)

### A. Carburanti & Energia
- Distributore Metano
- Distributore Benzina, Diesel, GPL, AdBlue (Pompe Bianche)
- Colonnine di ricarica vetture elettriche
- Rivendita bombole GPL per casa e caravan

### B. Servizi Auto & Officina
- Officina meccanica (riparazioni meccaniche tutte le marche, tagliandi, ricarica climatizzatori)
- Assistenza impianti auto Metano e GPL
- Gommista (vendita e cambio pneumatici)
- Centro Revisione Bombole Metano, GPL, Carbonio, CNG4
- Centro Revisioni Auto & Moto
- Casa della Batteria
- Autolavaggio (self-service con piste e spazzoloni + servito/a mano e lavaggio tappezzerie)
- Centro Chiavi per Casa & Auto
- SassoCAR (reparto auto)

### C. Altri Servizi ("Village")
- **Pet Corner / Lavaggio DOG & CAT**: area attrezzata per il lavaggio degli animali domestici
- **Bar & Tabacchi**
- **Ristorante e Pizzeria**
- **Palestra & Centro Estetico**

---

## 5. Orari di Apertura
- **Distributore Carburanti**: Feriali e Festivi `06:00 – 21:45`
- **Amministrazione, Officina e Gommista**: Lunedì – Venerdì `08:00 – 12:00` e `14:00 – 18:00`
- **Bar**: Lunedì – Venerdì `06:00 – 20:00`, Sabato `06:00 – 13:00`
- **Tabacchi**: Lunedì – Sabato `06:45 – 19:30`
- **Giorni di chiusura**: 25 Dicembre, Pasqua, 1 Gennaio, 15 Agosto

---

## 6. Analisi Tecnica e Criticità del Portale Attuale
1. **Stack tecnologico**: WordPress datato con tema commerciale (probabilmente template edilizia/construction) e plugin `GDPR Cookie Consent` (`cookielawinfo-*`).
2. **Contenuti demo residui indicizzati su Google**:
   - `/portfolio/bridge-construction/` (testo *Lorem Ipsum* / "Claritas est etiam...")
   - `/portfolio-category/construction-projects/` ("Corporate Building")
   - `/2017/01/30/in-the-big-city/`, `/2017/01/30/hotel-construction-tiltshift-timelapse/`, `/2017/01/30/refurbishment-or-innovation/`
   - Grave impatto negativo su SEO, credibilità e immagine del brand.
3. **UX e Accessibilità**:
   - Banner cookie invasivo che domina il DOM iniziale.
   - Navigazione frammentata e incoerente tra homepage, pagine servizi e sitemap (alcuni servizi compaiono in sezioni diverse o mancano di pagine dedicate aggiornate).
   - Assenza di CTA chiare (prenotazione revisione/officina, indicazioni stradali rapide, click-to-call mobile).
   - Copy non aggiornato (es. riferimenti al futuro "entro la primavera 2021 sarà inaugurata...").
4. **Opportunità di Rebranding & Restyling**:
   - Riposizionare **SassoMet Village** come hub moderno di mobilità, energia e servizi sul territorio di Casalecchio di Reno / Bologna.
   - Architettura chiara divisa per macro-aree (*Carburanti & E-Mobility*, *Officina & Revisioni*, *Autolavaggio*, *Village & Ristoro*).
   - Design responsive, veloce, accessibile, con orari in tempo reale ("Aperto ora"), mappa interattiva, prenotazione rapida e pulizia completa dei contenuti legacy.
