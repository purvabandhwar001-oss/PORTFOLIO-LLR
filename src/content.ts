// ─────────────────────────────────────────────────────────────────────────────
//  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Change any text, link or number below, commit, and the site updates itself.
//  In the bio / summaries:  *phrase* = pen underline,  [phrase] = pen oval.
// ─────────────────────────────────────────────────────────────────────────────
import type { MarginaliaPortfolioTemplateProps } from "@/components/ui/marginalia-portfolio-template"

const U = "https://images.unsplash.com/photo-"

// 📁 Your Google Drive folder with every project in full detail
const PROJECTS_DRIVE = "https://drive.google.com/drive/folders/18gRLUI9WlRVPX070i1KsNhi_0Kvx7n6M?usp=drive_link"
// 📄 Your resume (the QR code on the Education sheet opens this too)
const RESUME = "https://drive.google.com/file/d/1G0-EvBvNyF0FzUereMu9GN0Cz9LVSJEt/view?usp=sharing"
const LINKEDIN = "https://www.linkedin.com/in/purva-bandhwar-278898413/"
const EMAIL = "purvabandhwar001@gmail.com"
const PHONE_DISPLAY = "+91 8253090924"
const PHONE_TEL = "tel:+918253090924"

// 📸 PORTRAIT: this is a placeholder photo. To use your own, put your picture
// at  public/portrait.jpg  and replace the line below with:
//    const PORTRAIT = "./portrait.jpg"
const PORTRAIT = U + "1580489944761-15a19d654956"

export const content: MarginaliaPortfolioTemplateProps = {
  name: "Purva Bandhwar",
  role: "BBA (Hons.) Student",
  year: "2026",
  location: "Bengaluru",
  title: "Portfolio",
  docLabel: "Selected Works & Adventures",
  portrait: PORTRAIT,
  traits: ["analytical thinker", "creative strategist", "curious", "leader", "detail-oriented"],
  greeting: "Hey there!",
  bio:
    "I’m Purva, a BBA (Hons.) student at TAPMI Bengaluru who believes *business isn’t just about spreadsheets* — it’s a contact sport with human behavior. Whether I’m deconstructing corporate giants’ balance sheets, interviewing street caricature artists about the AI apocalypse, modeling math equations to outsmart inflation, or designing fashion looks based on the seven deadly sins, I love [blending analytical rigor with wild creativity]. Welcome to my digital workspace!",

  educationIntro: "Classrooms, case studies, and field notes — where theory meets reality.",
  education: [
    { title: "BBA (Hons.) — 1st Year", place: "TAPMI Bengaluru", period: "2026 – Present", circled: true },
    { title: "Higher Secondary (Class XII)", place: "Indore Public School, Jhabua" },
  ],
  cvUrl: RESUME,
  cvNote: "scan for my résumé",
  languages: [
    { name: "English", level: "C1", value: 0.82 },
    { name: "Hindi", level: "native", value: 1 },
  ],

  tools: [
    { name: "Excel", mark: "Xl", bg: "#1d6f42", fg: "#ffffff", note: "pivot tables & financial models, my happy place" },
    { name: "Power BI", mark: "BI", bg: "#f2c811", fg: "#1b1b1b", note: "dashboards that tell the story for me" },
    { name: "CapCut", mark: "Cc", bg: "#111111", fg: "#ffffff", note: "cutting short documentaries, frame by frame" },
    { name: "Calculus", mark: "∫", bg: "#5b63e6", fg: "#ffffff", note: "matrices, derivatives & integrals in the wild" },
    { name: "Fashion", mark: "Fx", bg: "#c2410c", fg: "#ffffff", note: "seven deadly sins, seven looks" },
  ],
  toolNote: "hover a tile!",
  skillsIntro: "The toolkit behind the adventures.",
  skills: [
    "Excel & Financial Modeling (Pivot Tables, Data Models)",
    "Power BI Dashboards",
    "Qualitative Field Ethnography & Research",
    "Rhetorical Analysis & Persuasion Theory",
    "Business Mathematics & Calculus Applications",
    "Fashion Design & Video Editing (CapCut)",
  ],
  books: [
    { title: "Financial Accounting", color: "#2f4b7c" },
    { title: "Business Maths", color: "#5b63e6" },
    { title: "Persuasion", color: "#c2410c" },
    { title: "Field Notes", color: "#efe8dc" },
    { title: "AI & Agents", color: "#1d6f42" },
  ],
  booksNote: "my semester stack",

  projectsNote: "five adventures (tap a phone!)",
  projects: [
    {
      name: "The ₹4.48 Lakh Crore Balancing Act",
      tagline: "Playing corporate accountant for a giant automotive empire.",
      kind: "Financial Accounting · Corporate Simulation (SMIL)",
      year: "2026",
      summary:
        "Step into the engine room of *Samvardhana Motherson International Ltd.* (Nifty 100). Our team simulated an entire financial year from scratch — tracking [$93.6M of raw material imports], dodging forex losses, collecting ₹8,000M in subsidiary dividends, and passing 30+ journal entries to land our balance sheet in absolute harmony.",
      challenge: "Reconciling global supply chain currency swings without letting a single debit stray from its credit.",
      note: "debits and credits, finally friends",
      stats: [
        { value: 4.64, decimals: 2, suffix: "L Cr", label: "₹ balance sheet equilibrium" },
        { value: 1.3, decimals: 2, suffix: "x", label: "liquid asset cover ratio" },
        { value: 11.4, decimals: 1, suffix: "%", label: "tax efficiency via subsidiary dividends" },
      ],
      images: [U + "1579783902614-a3fb3927b6a5", U + "1506126613408-eca07ce68773", U + "1544947950-fa07a98d237f"],
      screens: ["stats", "cover", "detail"],
      accent: "#1d6f42",
      tag: "accounting",
      href: PROJECTS_DRIVE,
    },
    {
      name: "The Vanishing Canvas",
      tagline: "Going undercover with notebooks and cameras to see how human art survives AI.",
      kind: "Applied Ethnography · Short Documentary",
      year: "2026",
      summary:
        "Armed with voice memos and curiosity, our team hit *Galleria Mall and Church Street* to study street caricature artists navigating the flood of generative AI filters. Through live interviews and participant observation, we proved that [human touch, awkward eye contact, and tactile memories] can never be automated.",
      challenge: "Breaking through language barriers in bustling public corridors.",
      note: "AI vs. street art, round one",
      stats: [
        { value: 2, label: "bustling urban field sites explored" },
        { value: 100, suffix: "%", label: "ethical consent & qualitative integrity" },
      ],
      images: [U + "1513364776144-60967b0f800f", U + "1541961017774-22349e4a1262", U + "1515886657613-9f3515b0c78f"],
      screens: ["feed", "cover", "detail"],
      accent: "#c2410c",
      tag: "fieldwork",
      href: PROJECTS_DRIVE,
    },
    {
      name: "Saving Ramesh’s Kirana Store",
      tagline: "Building an autonomous AI sidekick for local neighborhood shops.",
      kind: "AI Agent Architecture · RAG & MCP Systems",
      year: "2026",
      summary:
        "Quick-commerce apps are stealing local store customers during festival seasons. To fight back, we architected an *autonomous AI agent* for Ramesh, a Bengaluru kirana owner, that reads inventory, picks festival offers, and drafts [bilingual WhatsApp posters] using RAG (Retrieval-Augmented Generation) and human-in-the-loop safeguards.",
      challenge: "Designing zero-jargon automation for busy store owners who don’t speak tech.",
      note: "Ramesh approves every poster",
      images: [U + "1490481651871-ab68de25d43d", U + "1445205170230-053b83016050", U + "1495446815901-a7297e633e8d"],
      screens: ["detail", "feed", "cover"],
      accent: "#5b63e6",
      tag: "AI agent",
      href: PROJECTS_DRIVE,
    },
    {
      name: "The Smart Investment Advisor",
      tagline: "Using calculus, matrices, and integrals to build the ultimate piggy bank.",
      kind: "Mathematical Modeling · Wealth Optimization",
      year: "2026",
      summary:
        "Who says math is just for exams? We coded the math behind a smart investment advisor app. We used *matrices* to optimize stock portfolio weights (the “risk bowl”), *derivatives* as stock speedometers, and [continuous integrals] to prove how regular SIPs mercilessly beat inflation over 10 years.",
      challenge: "Turning abstract calculus proofs into live, breathing financial decision-making.",
      note: "yes, calculus is useful",
      stats: [
        { value: 12.68, decimals: 2, suffix: "%", label: "effective yearly compound rate" },
        { value: 0.766, decimals: 3, label: "optimal stock weight via matrix inverse" },
      ],
      images: [U + "1579783902614-a3fb3927b6a5", U + "1544947950-fa07a98d237f", U + "1506126613408-eca07ce68773"],
      screens: ["stats", "detail", "cover"],
      accent: "#2f4b7c",
      tag: "business maths",
      href: PROJECTS_DRIVE,
    },
    {
      name: "Rhetoric, Power & 70-Hour Weeks",
      tagline: "Deconstructing Narayana Murthy’s speeches using Aristotle’s persuasion playbook.",
      kind: "Rhetorical Analysis · Corporate Reputation",
      year: "2026",
      summary:
        "When Infosys co-founder N.R. Murthy sparked a national debate on 70-hour workweeks, our team unpacked the masterclass in persuasion. By analyzing his *Ethos* (elder statesman), *Logos* (productivity stats and Bayes’ theorem), and *Pathos* (patriotic sacrifice), we explored [how words shape national workplace culture].",
      challenge: "Separating economic productivity logic from modern workforce burnout anxiety.",
      note: "Aristotle would have had notes",
      images: [U + "1495446815901-a7297e633e8d", U + "1515886657613-9f3515b0c78f", U + "1445205170230-053b83016050"],
      screens: ["cover", "detail", "feed"],
      accent: "#7c3aed",
      tag: "rhetoric",
      href: PROJECTS_DRIVE,
    },
  ],

  factsNote: "beyond the case files",
  facts: [
    { doodle: "pencil", text: "Designed fashion looks inspired by the seven deadly sins" },
    { doodle: "headphones", text: "Collected voice memos on Church Street for the AI-vs-art study" },
    { doodle: "camera", text: "Cuts short documentaries in CapCut" },
    { doodle: "globe", text: "Tracked $93.6M of imports through 30+ journal entries" },
    { doodle: "book", text: "Read Aristotle to decode a modern CEO’s speeches" },
  ],

  thanks: "Let’s Build Something Great",
  email: EMAIL,
  links: [
    { label: "LinkedIn", href: LINKEDIN },
    { label: "Résumé", href: RESUME },
    { label: "All Projects (Drive)", href: PROJECTS_DRIVE },
    { label: "Email me", href: "mailto:" + EMAIL },
    { label: PHONE_DISPLAY, href: PHONE_TEL },
  ],
  letter:
    "If you’ve made it this far down the page, you already know I love a good story — whether it’s told through a balance sheet, an ethnographic field note, a mathematical proof, or a creative design.\n\nIf you’re working on something exciting, let’s talk!",
  signature: "Purva",

  colors: { paper: "#ecebe7", night: "#2b2b2e", ink: "#242426", pen: "#5b63e6" },
}
