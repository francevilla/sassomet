# Verifica skill e contesto — ripresa dal repository Eniminds

**Data:** 2026-11-26
**Branch di lavoro:** `arena/727d26cf-sassomet` (repo `francevilla/sassomet`, base `823c1ee`)
**Scopo:** leggere `STRATEGIA-CMS-PROPRIETARIO.md` e verificare la disponibilità delle skill **REA**, **Copywriting**, **Taste** e **CMO**, indicando cosa serve per ripristinarle.

---

## 0. Avviso importante: il workspace non è il repository Eniminds

Questo checkout (`/home/user/sassomet`) contiene **solo `README.md`**. Non contiene il progetto Eniminds, né `STRATEGIA-CMS-PROPRIETARIO.md`, né `skills-lock.json`, né alcuna cartella di skill.

Il materiale Eniminds si trova in un **repository separato**: `francevilla/Eniminds`, branch `main`, HEAD `4cac552e` (merge della PR #6 *"Document proprietary AI CMS product strategy"*). È da lì che ho letto il documento della strategia e il lock file delle skill.

Conseguenza pratica: **`npx skills experimental_install` non ha nulla da ripristinare in questa cartella**, perché non esiste un `skills-lock.json` a livello di progetto. Questo è il primo punto da decidere (vedi §4, passo 0).

---

## 1. `STRATEGIA-CMS-PROPRIETARIO.md` — cosa dice (sintesi)

- **Stato:** proposta da approvare, *non* implementazione. Caso pilota: Eniminds.
- **Vincolo operativo esplicito:** il sito e il CMS Eniminds attuali restano invariati durante progettazione e sviluppo; nessun cambio di dominio, risorse o dati Production senza piano e autorizzazione separati.
- **Prodotto:** piattaforma SaaS proprietaria italiana, multi-tenant dall'inizio, ispirata alle funzionalità *pubblicamente descritte* da Deep CMS (non al suo codice/marchio/testi/UI/template/immagini).
- **MVP:** due organizzazioni isolate, editor a sezioni con 2 template originali, bozze/cronologia/rollback, media con ricodifica, pubblicazione con snapshot immutabile, AI nel pannello (solo proposte con diff, mai pubblicazione autonoma), server MCP **draft-only** con chiavi revocabili, SEO di base, modulo contatti essenziale, operatività (audit, backup, export).
- **Architettura:** separazione piano di controllo / renderer pubblico; multi-tenant con controlli sul server per ogni oggetto; modello a blocchi tipizzati (no HTML arbitrario); PostgreSQL relazionale + JSON validato; storage a oggetti con privato/pubblico separato; adapter AI provider-agnostic; MCP come servizio separabile.
- **Sicurezza AI/MCP:** contenuti e output sono dati non fidati (prompt injection); strumenti con la stessa autorizzazione dell'utente/chiave, nessuna escalation; chiavi ad alta entropia con hash, scadenza, revoca; audit.
- **Roadmap:** Fase 0 discovery 1–2 sett., 1 fondazioni 3–5, 2 editor e pubblicazione 5–8, 3 AI e MCP 3–5, 4 pilota e hardening 3–5 → **circa 15–25 settimane** sequenziali; nessun preventivo affidabile senza team e tariffe.
- **Sezione 8 (migrazione pilota):** inventario e backup verificati, ambiente isolato, import versionato e ripetibile, confronto in staging, finestra di cutover approvata, rollback. Il sito esistente resta la fonte ufficiale fino al passaggio.

---

## 2. Disponibilità delle skill — esito

### 2.1 Situazione reale dei file

| Percorso | Esiste in questo workspace | Esiste nel repo Eniminds |
| --- | --- | --- |
| `skills-lock.json` | **No** | **Sì** (`main`, 54 voci, `version: 2`) |
| `.agents/skills/` | No | Sì, ma **escluso dal repository** (`.gitignore`) |
| `.claude/skills/` | No | Sì, ma **escluso dal repository** |
| `agent/skills/` | No | Sì, ma **escluso dal repository** |
| `skills/adaptive-web-architect-cro/` | No | **Sì, committato** (skill autoriale locale) |
| `~/.claude/skills/` (globale) | No | — |

Quindi: **nessuna delle quattro skill è materialmente installata in questa sessione**. Le copie locali non sono mai state committate (scelta deliberata del progetto, documentata nel README di Eniminds), e in questo workspace non esiste nemmeno il lock file.

### 2.2 Esito per singola skill

| Skill richiesta | Chiave nel lock | Nel lock? | Fonte | Ripristinabile con `experimental_install`? |
| --- | --- | --- | --- | --- |
| **Copywriting** | `copywriting` | ✅ Sì | `coreyhaines31/marketingskills` @ `5b2b400e` → `skills/copywriting/SKILL.md`, hash `6b86be15…` | ✅ Sì |
| **Taste** | `design-taste-frontend` | ✅ Sì | `Leonxlnx/taste-skill` @ `6c0b5c78…` → `skills/taste-skill/SKILL.md`, hash `b10eab0a…` | ✅ Sì |
| **REA** | — | ❌ **No** | `morluto/rea` → skill `reverse-engineer-anything` | ❌ **No** |
| **CMO** | — | ❌ **No** | `laltaffer/claude-cmo-skill` → skill `cmo` | ❌ **No** |

Il lock registra **54 skill**: 53 da `coreyhaines31/marketingskills` (tutte quelle che il repo pubblica, verify via API: 53 directory in `skills/`) e 1 da `Leonxlnx/taste-skill`. **REA e CMO non compaiono in nessuna delle due fonti** — sono skill di terze fonti che non sono mai state registrate.

### 2.3 Verifiche eseguite con la CLI reale (`skills@1.9.0`)

Eseguite in una cartella temporanea, con il lock file vero di Eniminds:

```
$ npx skills@1.9.0 add laltaffer/claude-cmo-skill --list
  → Found 1 skill:  cmo
     "Marketing pipeline (context, research, strategy, craft, review, ship, operate)… User-invoked only; type /cmo."

$ npx skills@1.9.0 add morluto/rea --list
  → Found 5 skills: rea-analysis-optimization, rea-changelog-update,
                    rea-ci-tests-audit, rea-tool-design, reverse-engineer-anything

$ npx skills@1.9.0 add Leonxlnx/taste-skill --list
  → design-taste-frontend

$ npx skills@1.9.0 experimental_install --dry-run     (con lo skills-lock.json di Eniminds)
  → "Would restore 54 skills from skills-lock.json into .agents/skills/"
    include: copywriting, design-taste-frontend
    NON include: rea, cmo
```

**Conferma:** `npx skills experimental_install` ripristina *solo* ciò che è nel lock. Copywriting e Taste tornano; REA e CMO no.

Ambiente verificato: Node **22.22.3** (≥ 22 richiesto ✓), npm 10.9.8, rete disponibile verso `registry.npmjs.org` e `github.com` ✓.

---

## 3. Cosa manca e cosa serve per ripristinare

### 3.1 Copywriting e Taste — mancano solo i file, non le fonti

Servono due cose, in ordine:

1. **Un `skills-lock.json` nel progetto** (vedi passo 0). È il file che dice alla CLI *cosa* ripristinare.
2. **Il comando di ripristino, con l'agente esplicito:**

```bash
npx skills@1.9.0 experimental_install -y -a claude-code
```

⚠️ Il flag `-a claude-code` **non è opzionale** se il comando gira dentro una sessione agente: in quel caso la CLI è non interattiva e installa solo in `.agents/skills/`, che Claude Code non legge. È un comportamento documentato sia nel README di `marketingskills` sia nella documentazione della CLI.

Verifica successiva consigliata:

```bash
npx skills@1.9.0 list          # elenca le skill installate
npx skills@1.9.0 check         # segnala skill mancanti o con modifiche locali
```

Nota sui pin: il lock fissa commit **più vecchi** dell'HEAD attuale delle fonti (`marketingskills` lock `5b2b400e` vs HEAD `8fd2fca`; `taste-skill` lock `6c0b5c78` vs HEAD `d1a2bb41`). `experimental_install` scarica il **commit fissato**, non l'ultimo: il ripristino è quindi riproducibile anche se le fonti cambiano. Per avanzare di versione serve `npx skills update`.

### 3.2 REA — mancante, va aggiunta ex-novo

```bash
npx skills@1.9.0 add morluto/rea --skill reverse-engineer-anything -a claude-code -y
```

Il comando **scriverà una nuova voce in `skills-lock.json`** (`source`, `commit`, `sourceType`, `skillPath`, `computedHash`) e va committata, altrimenti il prossimo clone la perde di nuovo.

Da verificare **prima** di usarla:

- **Cos'è:** REA = *Reverse Engineer Anything* (`morluto/rea`, MIT). È un toolset di indagine: ispezione di binari nativi, archivi APK/IPA/ASAR, analisi di app Electron/JavaScript, e **osservazione passiva del browser** via endpoint CDP su loopback con origini approvate. Nel repo sono 5 skill; quella generale è `reverse-engineer-anything`.
- **Peso e piattaforma:** il repository è ~230 MB ed è **macOS-first** (utilità native macOS, Mach-O, code signing). Questo sandbox è Linux: i provider nativi non funzioneranno. Sono pertinenti solo la parte di osservazione browser e la parte artifact/archivi.
- **Blocco di rete:** REA era già stata annotata in `ANALISI-SITO-ENIMINDS.md` come *"disponibile nella sessione, ma non utilizzata… l'accesso di rete del sandbox verso il dominio non è disponibile"*. In questo sandbox l'accesso in uscita è limitato a `github.com`, `codeload.github.com`, `api.github.com`, `registry.npmjs.org`, `pypi.org`, `files.pythonhosted.org`: **`eniminds.com` non è raggiungibile**, quindi REA continua a non poter ispezionare il sito live. Per sbloccarla servirebbe un'uscita verso quel dominio (o eseguire REA su una macchina con accesso al sito).
- **Coerenza con la strategia:** la §8 impone inventario e backup verificati come primo passo e mantiene il sito esistente come fonte ufficiale fino al cutover. Un'ispezione REA del sito live sarebbe di sola lettura/passiva, ma va autorizzata esplicitamente.

### 3.3 CMO — mancante, va aggiunta ex-novo

```bash
npx skills@1.9.0 add laltaffer/claude-cmo-skill --skill cmo -a claude-code -y
```

Anche qui la voce nel lock va committata.

Da verificare **prima** di usarla:

- **Cos'è:** pipeline di marketing a stadi con gate (`CONTEXT → RESEARCH → STRATEGY → BRIEF → WRITE → REVIEW → SHIP → RETRO`, più `OPERATE`), 4 modalità (full / fast / audit / engagement), catalogo di tropi vivi e gate anti-"AI slop". È **user-invoked only**: si attiva con `/cmo`.
- **Maturità della fonte:** repo piccolo (0 star, ultimo push 2026-10-04, HEAD `0b3a5b98`). Vale un'occhiata al `SKILL.md` prima di fissarlo nel lock del progetto.
- **Interazione con il pack:** il README di CMO presume di leggere le sub-skill di `marketetingskills` **per percorso file** (`~/.claude/marketing-pack`) invece di installarle come skill. Con la route `npx skills` quel pack finisce in `.agents/skills/` del progetto: confermare che `/cmo` riesca a trovare le sub-skill in questo layout, diversamente il gate REVIEW non avrà i riferimenti.
- **Output attesi:** scrive un documento di contesto per progetto in `.agents/product-marketing.md`; verificare se quel percorso è accettabile nel flusso di lavoro o se va spostato.

---

## 4. Sequenza consigliata

**Passo 0 — decidere dove vive il lavoro (bloccante).** Due opzioni:

- **(A) Continuare in `francevilla/Eniminds`:** clonare quel repo e lavorarci. `skills-lock.json`, strategia, codice, test e deploy sono già lì. È la strada coerente con "continuiamo dal repository Eniminds".
- **(B) Portare il contesto in `sassomet`:** copiare almeno `skills-lock.json` (e la sezione "Skill di progetto" del README) più `STRATEGIA-CMS-PROPRIETARIO.md`. Attenzione: duplicare il lock in due repository genera due serie di pin che possono divergere.

**Passo 1 — ripristinare le 54 skill tracciate** (dopo il passo 0):

```bash
npx skills@1.9.0 experimental_install -y -a claude-code
npx skills@1.9.0 list && npx skills@1.9.0 check
```

**Passo 2 — aggiungere REA e CMO** e committare il lock aggiornato:

```bash
npx skills@1.9.0 add laltaffer/claude-cmo-skill --skill cmo -a claude-code -y
npx skills@1.9.0 add morluto/rea --skill reverse-engineer-anything -a claude-code -y
git add skills-lock.json && git commit -m "Track cmo and reverse-engineer-anything skills"
```

**Passo 3 — sbloccare REA sul sito live** (se serve davvero): uscita di rete verso `eniminds.com` + conferma che l'ispezione resti passiva e autorizzata.

**Già disponibile senza fare nulla:** `skills/adaptive-web-architect-cro/` è committata in Eniminds (skill autoriale locale, "Senior Web Designer / CRO / Marketing Psychologist" con fase di discovery obbligatoria).

---

## 5. Riepilogo in una riga

Copywriting e Taste **sono recuperabili** dal lock con un solo comando (manca solo il `skills-lock.json` in questo workspace); **REA e CMO non sono mai state registrate** e vanno aggiunte ex-novo con `npx skills add`, fissandole nel lock — e REA resta comunque bloccata verso il sito Eniminds per il filtro di rete del sandbox.
