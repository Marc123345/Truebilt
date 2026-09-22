# True Bilt LLC — roofing site

Next.js (Pages Router) built on the RoofX template, rebuilt for True Bilt LLC
(David King, Lancaster / York / Delaware counties, PA).

## Running it

    npm install
    npm run dev -- --port 5250   # port 5250, not 5173 — see note below
    npm run build

Add `?shot=1` to any URL to skip the preloader and force scroll animations
visible. Dev/screenshot aid only.

## Where the content lives

All copy, services, FAQs and contact details are in **`data/site.js`**. That is
the only file to edit for wording, phone numbers or service areas.

Brand colours are two CSS variables at the top of
**`public/assets/css/tb.css`** (`--tb-primary`, `--tb-secondary`). They feed the
template's own variables, so changing them recolours the whole site.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home |
| `/services` | All seven services, listed separately |
| `/roof-coatings` | Conklin systems explainer — handles the "it's just paint" objection |
| `/about` | Company + service area |
| `/contact` | Free inspection request |

## Open items before launch

See the block at the bottom of `data/site.js`. In short: licence state,
logo + brand colours, real photography, and the contact form has no backend.
