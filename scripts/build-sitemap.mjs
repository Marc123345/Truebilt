// Writes public/sitemap.xml (static XML, served as-is at /sitemap.xml) before `next build`.
// Add a page here when one is added to pages/. David's own job photos are listed on the home
// page with Google's image extension so they can show up in Google Images.
import { writeFileSync } from "node:fs"

const SITE = "https://www.truebiltroofing.com"
const today = new Date().toISOString().slice(0, 10)
// Same files as `jobs` in data/site.js (the fourth only exists at 640px).
const jobs = ["metal-restoration-1200", "tpo-over-metal-1200", "tpo-roofing-1200", "metal-roofing-siding-640"]

const pages = [
    { path: "/", priority: 1.0, images: jobs.map((j) => `/assets/img/tb/jobs/${j}.jpg`) },
    { path: "/services", priority: 0.9 },
    { path: "/roof-coatings", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
    .map((p) =>
        [
            "  <url>",
            `    <loc>${SITE}${p.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            `    <priority>${p.priority.toFixed(1)}</priority>`,
            ...(p.images || []).map((i) => `    <image:image>\n      <image:loc>${SITE}${i}</image:loc>\n    </image:image>`),
            "  </url>",
        ].join("\n")
    )
    .join("\n")}
</urlset>
`
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml)
console.log(`sitemap.xml: ${pages.length} URLs, lastmod ${today}`)
