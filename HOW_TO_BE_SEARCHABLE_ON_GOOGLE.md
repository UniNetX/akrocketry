# How to make the AK Rocketry site show up on Google

Your live site: **[https://akrocketry.vercel.app/](https://akrocketry.vercel.app/)** (HTTPS on Vercel). Short checklist below.

## 1. You’re already public

Google can reach the site at that URL. Next steps are about **telling Google the canonical URLs** and **submitting a sitemap**.

## 2. Replace the placeholder in the repo — **done in this project**

All **`*.html`** canonical / Open Graph / Twitter / JSON-LD URLs and **`sitemap.xml`** `<loc>` entries now use **`https://akrocketry.vercel.app`** (no trailing slash on the origin). **Redeploy to Vercel** so the live site picks this up.

## 3. Sitemap in `robots.txt` — **done**

**`robots.txt`** now includes **`Sitemap: https://akrocketry.vercel.app/sitemap.xml`**. Redeploy if you have not since this change.

## 4. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add a property** → **URL prefix** → `https://akrocketry.vercel.app/`
3. **Verify** (Vercel: often **DNS** or **HTML file** upload — follow Google’s steps).
4. Go to **Sitemaps** → submit: **`https://akrocketry.vercel.app/sitemap.xml`**

## 5. Optional but helpful

- Ask school or ICC to **link** to [https://akrocketry.vercel.app/](https://akrocketry.vercel.app/) from an official club list.
- After big updates, bump **`lastmod`** in `sitemap.xml` and use **URL Inspection → Request indexing** for key pages.

**Note:** Showing up in results can take **days to weeks**. Rankings depend on relevance, links, and time—not only technical setup.
