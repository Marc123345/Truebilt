// All True Bilt copy and data in one place.
//
// Sourced from David King's intake form (22 Sep 2026). Nothing here is an
// invented marketing claim — anything not on the form is marked TODO below.
//
// ⚠ OPEN ITEMS — see notes at the bottom of this file.

// Marc's ImageKit account. Real roof-coating photography — these are the only
// genuine roofing images on the site; everything else is still template stock.
const IK = "https://ik.imagekit.io/qcvroy8xpd"
export const coatingImages = {
    // Crew spray-applying a white coating at sunset.
    spray: `${IK}/580c524e-ceaa-4322-801d-0e8c216bebdd.png?tr=w-1200`,
    // Two applicators spraying white silicone over a flat commercial roof.
    silicone: `${IK}/Sylicone.jpeg?tr=w-1200`,
    // Crew rolling white acrylic across a large flat roof — the "white vs black" shot.
    acrylic: `${IK}/Asyrc.png?tr=w-1200`,
    // Before/after of a rusted metal roof restored with a coating system.
    beforeAfter: `${IK}/34.png?tr=w-1000`,
}

export const site = {
    name: "True Bilt LLC",
    shortName: "True Bilt",
    owner: "David King",
    // Area code 717 = south-central Pennsylvania, consistent with the counties.
    phone: "(717) 615-7585",
    phoneHref: "tel:+17176157585",
    email: "dave.truebilt@gmail.com",
    yearsInBusiness: 5,
    // ⚠ The intake form asked "Licensed and Insured in Texas?" and "Greater
    // Houston Areas Served" — both are leftovers from a Texas version of the
    // form. The counties given are all Pennsylvania. Until David confirms the
    // state on his licence, the site says "Licensed & Insured" with no state.
    licenceLine: "Licensed & Insured",
    serviceArea: "Lancaster, York & Delaware Counties, PA",
    counties: ["Lancaster County", "York County", "Delaware County"],
    state: "Pennsylvania",
}

// The four things David asked to have highlighted, verbatim from the form.
export const trustPoints = [
    {
        icon: "/assets/img/icon/features_icon01.svg",
        title: "Free Inspections",
        text: "We come out, get on the roof and tell you what we find. No charge, no obligation to book the work.",
    },
    {
        icon: "/assets/img/icon/features_icon02.svg",
        title: "Up to 25-Year Warranties",
        text: "Our Conklin coating systems carry warranties of up to 25 years — renewable, not a one-time fix.",
    },
    {
        icon: "/assets/img/icon/features_icon03.svg",
        title: "Fast Turnaround on Repairs",
        text: "A leak does not wait for a schedule. Repairs get moved to the front of the line.",
    },
]

export const services = [
    {
        slug: "roof-replacement",
        number: "01",
        title: "Roof Replacement",
        icon: "/assets/img/icon/services_icon01.svg",
        image: "/assets/img/services/services_item01.jpg",
        short: "A full tear-off and rebuild when the deck or structure is past saving.",
        text: "When a roof is too far gone to restore, we strip it back, inspect the decking, fix what is underneath and build it again properly. You get one crew, one point of contact and a clear price before anything comes off.",
    },
    {
        slug: "roof-coatings",
        number: "02",
        title: "Roof Coatings & Restoration",
        icon: "/assets/img/icon/services_icon02.svg",
        image: `${IK}/Sylicone.jpeg?tr=w-800,h-600,fo-auto`,
        short: "Conklin systems that restore a sound roof instead of replacing it.",
        text: "A fluid-applied, industrial-grade membrane — often with fabric reinforcement at the seams — installed over a roof that is still structurally sound. It costs less than a tear-off, it goes on without shutting your building down, and it renews.",
    },
    {
        slug: "roof-repair",
        number: "03",
        title: "Roof Repair",
        icon: "/assets/img/icon/services_icon03.svg",
        image: "/assets/img/services/services_item03.jpg",
        short: "Leaks, flashing, seams and storm damage — found and fixed.",
        text: "Most leaks are not where the water shows up inside. We trace it back to the real source, fix that, and tell you honestly whether the rest of the roof has life left in it.",
    },
    {
        slug: "storm-damage",
        number: "04",
        title: "Storm & Hail Damage Restoration",
        icon: "/assets/img/icon/services_icon04.svg",
        image: "/assets/img/services/services_item04.jpg",
        short: "Documented damage assessment after wind, hail or falling debris.",
        text: "After a storm we inspect the roof, photograph what we find and give you a written assessment of the damage so you know exactly what you are dealing with before any decision gets made.",
    },
    {
        slug: "flat-commercial",
        number: "05",
        title: "Flat & Commercial Roofing",
        icon: "/assets/img/icon/services_icon05.svg",
        image: `${IK}/Asyrc.png?tr=w-800,h-600,fo-auto`,
        short: "Low-slope roofs for manufacturing, food production and hospitality.",
        text: "Flat and low-slope roofs fail differently to pitched ones — ponding, seam splits, failed flashing. We work on plants, warehouses, food facilities and hotels, and we work around your operation rather than through it.",
    },
    {
        slug: "metal-roofing",
        number: "06",
        title: "Metal Roofing",
        icon: "/assets/img/icon/services_icon06.svg",
        image: `${IK}/34.png?tr=w-800,h-600,fo-auto`,
        short: "New metal roofs, and coating systems for the metal you already have.",
        text: "Metal lasts, but fasteners back out and seams open up. We install new metal roofing, and we restore existing metal with a coating system that seals the seams and stops the rust cycle.",
    },
    {
        slug: "shingle-roofing",
        number: "07",
        title: "Shingle Roofing",
        icon: "/assets/img/icon/services_icon01.svg",
        image: "/assets/img/services/sb_img01.jpg",
        short: "Residential asphalt shingle replacement and repair.",
        text: "Straightforward, well-installed shingle roofs for homes across Lancaster, York and Delaware counties — with the underlayment, ventilation and flashing details done right, because that is what actually determines how long it lasts.",
    },
]

// David's own words on the coatings objection, turned into page copy.
export const coatingFacts = [
    {
        title: "It is a system, not a coat of paint",
        text: "This is the thing most people get wrong. A Conklin roof system is an industrial-grade membrane applied as a liquid — base coat, fabric reinforcement over the seams and details, then top coats. When it cures it is a single, seamless layer across the whole roof. Paint sits on a surface. This becomes the roof.",
    },
    {
        title: "Restoration instead of replacement",
        text: "If the structure and decking underneath are sound, you do not need to pay to tear a roof off and put it in a skip. Restoring it costs less than replacing it, takes less time, and your building keeps running while we work.",
    },
    {
        title: "A white roof reflects the heat a black roof absorbs",
        text: "A dark roof soaks up the sun and pushes that heat into the building below it. A bright white reflective coating sends it back. On a large flat roof over a plant or a warehouse, that difference is one you can feel.",
    },
    {
        title: "Renewable, with warranties up to 25 years",
        text: "Our coating systems carry warranties of up to 25 years. At the end of that term the system can be recoated rather than torn off — so the expensive part only happens once.",
    },
]

// Only numbers that come from the intake form. No invented statistics.
export const counters = [
    { icon: "/assets/img/icon/counter_icon01.svg", count: 5, suffix: "", label: "Years in business" },
    { icon: "/assets/img/icon/counter_icon02.svg", count: 25, suffix: "", label: "Year warranties available" },
    { icon: "/assets/img/icon/counter_icon03.svg", count: 7, suffix: "", label: "Roofing services offered" },
    { icon: "/assets/img/icon/counter_icon04.svg", count: 3, suffix: "", label: "PA counties served" },
]

// Straight from the "common objections" answer on the intake form.
export const faqs = [
    {
        q: "Why are your prices higher than other quotes I am getting?",
        a: "Because the system is not the same. We install Conklin, which costs more than most of what is out there, and we do not cut the details — fabric reinforcement at the seams, proper prep, the right number of coats. A cheaper quote is usually a cheaper system or a thinner application. We will show you exactly what you are paying for and let you compare like with like.",
    },
    {
        q: "Is a roof coating just painting my roof?",
        a: "No. That is the most common misunderstanding we run into. A coating system is an industrial-grade membrane installed in layers, usually with fabric reinforcement over the seams and penetrations. Paint is a finish. This is a roof.",
    },
    {
        q: "Can you restore my roof instead of replacing it?",
        a: "Often, yes — it depends on whether the structure and decking underneath are still sound. That is exactly what the free inspection is for. If restoration is the right call we will tell you, and if it is not, we will tell you that too.",
    },
    {
        q: "How long will the work take, and will it shut down my building?",
        a: "Coating work goes on over your existing roof, so in most cases you keep operating while we are up there. A tear-off is more disruptive by nature, and we will give you a realistic schedule for it before you commit.",
    },
    {
        q: "Do you handle storm and hail damage?",
        a: "Yes. We inspect, photograph and give you a written assessment of the damage so you have documentation of what actually happened to your roof.",
    },
    {
        q: "Which areas do you cover?",
        a: "Lancaster, York and Delaware counties in Pennsylvania, for both residential and commercial work.",
    },
]

export const nav = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/roof-coatings", label: "Roof Coatings" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

/*
 * ⚠ OPEN ITEMS — need David before this goes live
 *
 * 1. LICENCE STATE. The form says "Licensed and Insured in Texas? Yes" but
 *    every county listed is in Pennsylvania and the phone is a 717 number.
 *    The site currently says "Licensed & Insured" with no state. Confirm
 *    which state the licence is in, and the licence number if he wants it
 *    shown.
 * 2. LOGO. David says he has one; it has not been sent. The site uses a mark
 *    drawn for him (two stacked roof chevrons — the coating over the deck) in
 *    /public/assets/img/logo/. Colours are green/white per Marc, set as
 *    --tb-primary / --tb-secondary at the top of /public/assets/css/tb.css.
 * 3. PHOTOGRAPHY. David answered "No — need help with this". The four roof
 *    COATING photos are real, from Marc's ImageKit. Everything else is still
 *    stock template imagery. Nothing is labelled as a True Bilt job, and there
 *    is no "our work" gallery, deliberately.
 * 4. TESTIMONIALS AND REVIEWS. None were supplied and there is no Google
 *    Business Profile yet, so there is no reviews section anywhere.
 * 5. ADDRESS. No street address was given, so only the service area appears.
 */
