# sassomet

Repository di lavoro per il progetto **CMS proprietario con AI**. Raccoglie il
contesto ereditato dal repository Eniminds e ospita la progettazione del nuovo
prodotto.

## Contenuto ereditato da Eniminds

| File | Cosa contiene |
| --- | --- |
| [`STRATEGIA-CMS-PROPRIETARIO.md`](STRATEGIA-CMS-PROPRIETARIO.md) | Strategia e progetto iniziale del CMS proprietario: visione, MVP, architettura, sicurezza AI/MCP, privacy, migrazione pilota, roadmap e criteri di accettazione. **Stato: proposta da approvare, non implementazione.** |
| [`ANALISI-SITO-ENIMINDS.md`](ANALISI-SITO-ENIMINDS.md) | Analisi del sito Eniminds attuale (WordPress/Divi), limiti dell'analisi e materiali necessari prima della pubblicazione. È il punto di partenza reale descritto nella strategia, sezione 3. |
| [`VERIFICA-SKILL-E-CONTESTO.md`](VERIFICA-SKILL-E-CONTESTO.md) | Verifica della disponibilità delle skill REA, Copywriting, Taste e CMO e cosa serve per ripristinarle. |

Il codice del sito e del CMS Eniminds **non** è stato copiato qui: resta in
`francevilla/Eniminds` per evitare due serie di pin e di sorgenti che divergono.
La strategia mantiene il sito e il CMS esistenti invariati durante progettazione
e sviluppo, senza cambio di dominio, risorse o dati Production senza un piano e
un'autorizzazione separati.

## Vincoli da ricordare

- Il sito e il CMS Eniminds attuali restano invariati durante progettazione e sviluppo.
- Nessun cambio di dominio, risorse o dati Production senza piano e autorizzazione separati.
- L'MVP è un prodotto verticale funzionante con **due organizzazioni isolate**, non una replica di tutte le funzioni del riferimento.
- Nessuna migrazione Production senza un'ulteriore autorizzazione.

## Skill di progetto

`skills-lock.json` registra le skill installate. Le copie locali in
`.agents/skills/`, `.claude/skills/` e `agent/skills/` sono escluse dal
repository. Per ripristinarle in un nuovo clone usare:

```sh
npx skills experimental_install -y -a claude-code
```

Il flag `-a claude-code` è necessario quando il comando gira dentro una sessione
agente: senza, la CLI installa solo in `.agents/skills/`, che Claude Code non
legge.

Due skill non sono tracciate nel lock e vanno aggiunte a mano, poi committate
nel lock:

```sh
npx skills add laltaffer/claude-cmo-skill --skill cmo -a claude-code -y
npx skills add morluto/rea --skill reverse-engineer-anything -a claude-code -y
```

Verifica con `npx skills list` e `npx skills check`.

Dettagli, fonti e avvertenze su REA e CMO: [`VERIFICA-SKILL-E-CONTESTO.md`](VERIFICA-SKILL-E-CONTESTO.md).
