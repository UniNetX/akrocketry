# AK Rocketry — Website analysis & improvement backlog

This document is a **structured audit** of the current static site (HTML/CSS/JS in this repo), informed by **in-repo review**, **live comparison browsing** of peer programs, and your existing `WEBSITE_PLAN.md`. It is meant as a **prioritized idea list**, not a commitment to build everything.

**Benchmark reviewed in browser (April 2026):** [NCSSM Rocketry](https://rocketry.ncssm.edu/) — a large, student-led program site with multi-year archives, dense photography, separate HPR vs ARC framing, and explicit role-based contacts. **Local review:** site served from this repo (`index.html`, interior pages, `css/styles.css`, `js/`).

---

## Executive summary

| Area | Current strengths | Main gaps vs. strong peer sites |
|------|-------------------|----------------------------------|
| **Visual system** | Cohesive hazy-blue palette, modern type, polished hero on Home, responsive nav | Interior pages (e.g. ARC) are more “docs-like”; fewer hero photos and team moments than NCSSM-style sites |
| **Structure** | Clear nav, sensible page split (ARC / Launches / CHMS / Resources) | No “season archive,” no dedicated **team identity** pages (Team A/B), calendar not surfaced on site |
| **Content depth** | Solid ARC explainer + timeline; launches with maps; careful sponsor language | Limited **results/achievements**, **meeting schedule** on web, **parent-facing** logistics |
| **Technical** | Skip link, focus states, mobile menu, `sitemap.xml` scaffold | Placeholder URLs (`__AK_ROCKETRY_SITE_URL__`); `embeds.js` / CHMS form **not wired** on `outreach.html`; no JSON-LD; **404** absent from sitemap (correct) but no `robots.txt` noted |

---

## 1. Benchmark takeaways (NCSSM-style and similar clubs)

What high-traffic secondary-program sites often do well (observed on [rocketry.ncssm.edu](https://rocketry.ncssm.edu/)):

1. **Photography-forward home** — Rockets, people, launch sites; captions with year/role; builds emotional proof.
2. **Program branches** — Clear separation (their **HPR** vs **ARC**); you effectively have **ARC**, **Launches**, **CHMS** — good, but ARC could show **two teams** visually.
3. **Seasonal archives** — Dropdown or pages per year (builds, photos, leadership). Helps alumni, sponsors, and recruits.
4. **Contacts with roles** — Named students + advisor + functional emails or clear “how to reach” rules. Your site rightly avoids advisor email on Contact; peers often still list **student team leads** where policy allows.
5. **Social proof** — Instagram (and sometimes Facebook) in the same breath as email; you already link Instagram on Contact; could repeat in header/footer for parity.
6. **Long-form “who we are”** — Your Home hero is strong; peers often add a short **school + club** line for outsiders (ICC, parents).

**Deliberate choices you’ve made that differ from NCSSM (and may be right for AK):** leaner nav, Band as primary ops channel, conservative sponsor/tax language, no giant historical archive (lower maintenance).

---

## 2. Site inventory (current state)

| Page | Role | Notes for improvements |
|------|------|-------------------------|
| `index.html` | Hero + pillars + join | Strong first impression; `canonical`/`og:*` still placeholders; hero is **image** (`rocket-launch.png`) — repo also has `videos/rocket-launch.mp4` if you later want motion |
| `arc.html` | ARC education + timeline | Excellent timeline UX; could add **team names**, **photo strip**, link to `rocketcontest.org`, optional “our results” |
| `launches.html` | Safety + maps | Good; consider **weather/GO-NO-GO** policy snippet, **what to bring**, parking |
| `outreach.html` | CHMS program | Copy is honest (“coming soon”); **`js/embeds.js` not loaded**, no `data-embed="chms-form"` — config in `js/config.js` unused here |
| `about.html` | Mission + officers | Good trust builder; optional **advisor** line consistency with Contact removals |
| `contact.html` | Email, IG, Band | Strong; consider duplicating **@akhsrocketry** in footer |
| `resources.html` | Links | Thin but clear; add NAR safety, motor certs, school forms if approved |
| `gallery.html` | Grid | Intended to fill from `images/`; until then placeholders — **low visual impact** for visitors |
| `sponsors.html` | Partnership | Appropriate caution text; could add **one-pager PDF** link later |
| `404.html` | Errors | Good tone; ensure host serves it for unknown paths |
| `sitemap.xml` | SEO | Contains placeholder base URL; **404.html** correctly omitted |

---

## 3. Recommended improvements (by theme)

### 3.1 Content & storytelling

- **Team identity:** Name **Team A / Team B** (or real names), one sentence each, on Home or ARC; optional officer liaison per team.
- **Season highlights:** Even a single **“2025–2026 at a glance”** card (qual scores, finals appearance, lesson learned) beats no history — NCSSM leans heavily on this.
- **Quotes or blurbs:** One student quote (+ role) on Home or About increases warmth without much upkeep.
- **CHMS:** When live, add **who it’s for**, **time commitment**, **cost**, **signup** — mirror clarity of ARC page.
- **Launches:** Short **“first time at the field”** checklist (sunscreen, closed-toe shoes, spectator distance) — parents search for this.

### 3.2 Visual design & media

- **ARC page hero:** Consider a **full-bleed or split hero** with launch imagery (like Home) so ARC doesn’t feel only like documentation.
- **Gallery priority:** Replace placeholder filenames with **real launches/builds**; add **alt text** with context (event, approximate date).
- **Consistent image treatment:** Officer photos vary in crop; you’ve started with per-photo modifiers — extend as needed.
- **Video:** Optional muted **hero background video** (with `prefers-reduced-motion` fallback) using existing `videos/rocket-launch.mp4` — test file size and mobile data.

### 3.3 Information architecture

- **Meetings:** Even “**See Band for room + time**” + **typical weekday** reduces repeated questions.
- **Calendar:** Link **Google Calendar** embed or ICS (if school allows) — NCSSM doesn’t have to be the only model; many clubs use a single embed.
- **Footer consistency:** Nav says **CHMS program**; footer still **CHMS outreach** in places — align wording for less cognitive load.
- **Resources:** Group links (**Safety**, **Competition**, **Tools**, **School**) when the list grows.

### 3.4 Trust, safety, and credibility

- **Safety ethos:** Short explicit line: **NAR/school rules, RSO, pads** — aligns with `WEBSITE_PLAN.md` parent audience.
- **Achievements:** Logos or text: **TARC national qualifier**, **local awards** — with advisor approval.
- **Constitution / bylaws:** If AKICC expects it, link PDF like peer AK clubs (Biology/Math Weebly pattern in your plan).

### 3.5 Technical & SEO

- **Deploy checklist:** Replace **`__AK_ROCKETRY_SITE_URL__`** in `index.html` and `sitemap.xml` with production origin; verify **`og:image`** absolute URL resolves.
- **`robots.txt`:** Add with `Sitemap: https://…/sitemap.xml` if host doesn’t inject one.
- **Structured data:** Optional `Organization` or `WebSite` JSON-LD with club name, school, social profiles.
- **CHMS embed:** On `outreach.html`, include `<script src="js/config.js"></script>` + `<script src="js/embeds.js"></script>` and a `<div data-embed="chms-form"></div>` once the form exists — [see `js/config.js`](js/config.js).
- **Analytics:** If allowed, lightweight privacy-conscious analytics for **which pages sponsors hit**.

### 3.6 Accessibility

- **Decorative hero image** uses `alt=""` — OK if truly decorative; if the photo is meaningful, give **short descriptive alt** for low-vision users.
- **Timeline:** Already has strong structure; keep **heading order** logical when adding sections.
- **Contrast:** Spot-check gold accent on white/light blue for WCAG AA if you expand use of `var(--accent)` on light backgrounds.

### 3.7 Performance

- **Hero PNG:** Large files hurt LCP; consider **responsive** `srcset`/WebP or compressed hero.
- **Fonts:** You load several weights from Google Fonts — subset or self-host if performance becomes a priority.
- **Third-party iframes:** Maps and future embeds — use `loading="lazy"` (maps already lazy on Launches).

### 3.8 Engagement & growth

- **Instagram in header or footer** on every page (icon row) — matches NCSSM “socials beside contact” pattern.
- **ICC blurb:** One paragraph + link for directory maintainers (`WEBSITE_PLAN.md` §2.2).
- **Optional newsletter:** School-approved email capture distinct from Band (long-term).

### 3.9 Sponsors & partners

- **Logo strip** (with permission) once you have tiers — even 2–3 logos helps legitimacy.
- **“How to sponsor”** single PDF orchestrated with admin — you already scaffold the legal caution copy.

---

## 4. Suggested prioritization (pragmatic order)

1. **Ship `/` SEO placeholders** + `sitemap.xml` + `robots.txt` on go-live.  
2. **Real gallery assets** + ARC optional hero visual + **team names** on ARC.  
3. **Wire CHMS embed** when form is approved (`outreach.html` + `config.js`).  
4. **Meetings blurb** (Home or About) + **footer label consistency** (CHMS).  
5. **Season highlight** + **safety Credibility** strip (short).  
6. **Archives / year pages** only if someone owns updating them (avoid stale content).

---

## 5. What’s already strong (preserve)

- **Clear value prop** on Home; disciplined copy; **Band-forward** join path matches real club ops.  
- **ARC timeline** UX and visual polish are **above average** vs. typical school club pages.  
- **Launches** maps + attribution show attention to detail.  
- **Responsive** layout and mobile nav behavior are in good shape (recent passes on overflow and tap targets).  
- **Sponsor page** tone is appropriately careful for school context.

---

## 6. References

- Peer benchmark: [https://rocketry.ncssm.edu/](https://rocketry.ncssm.edu/)  
- Internal planning: [`WEBSITE_PLAN.md`](WEBSITE_PLAN.md), [`WEBSITE_EXECUTION_PHASES.md`](WEBSITE_EXECUTION_PHASES.md)  
- Config / embeds: [`js/config.js`](js/config.js), [`js/embeds.js`](js/embeds.js)

---

*Generated as a living document — edit priorities as advisor policy and club capacity change.*
