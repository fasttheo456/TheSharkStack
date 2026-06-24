export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name (rendered as `lucide:<icon>` via astro-icon)
}

export const categories: Category[] = [
  {
    slug: "prospecting",
    name: "Prospecting & Lead Data",
    shortName: "Prospecting",
    tagline: "Find, verify & enrich your ideal buyers",
    description:
      "Prospecting platforms are the top of every sales motion: B2B contact databases, email finders, and enrichment that turn an ideal-customer profile into a list of real people with verified emails and direct dials. The best ones pair data coverage with accuracy so reps spend time selling, not scrubbing bad records.",
    icon: "radar",
  },
  {
    slug: "sales-engagement",
    name: "Sales Engagement",
    shortName: "Engagement",
    tagline: "Multichannel sequences & cadences",
    description:
      "Sales engagement platforms orchestrate the outbound motion: multistep sequences across email, phone, and LinkedIn, with task reminders, A/B testing, and reply tracking. They keep reps consistent at volume and surface which messaging actually books meetings.",
    icon: "send",
  },
  {
    slug: "crm",
    name: "CRM",
    shortName: "CRM",
    tagline: "Pipeline, deals & customer records",
    description:
      "The CRM is the system of record for every deal, contact, and account. Modern sales CRMs pair visual pipeline management with email sync, automation, and forecasting so managers can see the number and reps can move deals without drowning in data entry.",
    icon: "contact",
  },
  {
    slug: "phone-system",
    name: "Phone System & Dialers",
    shortName: "Phone",
    tagline: "Cloud calling, power & parallel dialers",
    description:
      "Sales phone systems and dialers put outbound calling on rails: cloud numbers, local presence, power and parallel dialing, voicemail drop, and call recording, all wired into the CRM. They multiply the number of live conversations a rep can have in a day.",
    icon: "phone-call",
  },
  {
    slug: "conversation-intelligence",
    name: "Conversation Intelligence",
    shortName: "Call Intel",
    tagline: "Record, transcribe & coach every call",
    description:
      "Conversation intelligence tools record and transcribe sales calls and meetings, then use AI to summarize, score, and surface risk across the pipeline. They turn every call into searchable coaching material and feed deal signals straight back into the CRM.",
    icon: "audio-lines",
  },
  {
    slug: "scheduling",
    name: "Meeting Scheduling",
    shortName: "Scheduling",
    tagline: "Booking pages & inbound routing",
    description:
      "Scheduling tools kill the back-and-forth of booking meetings with personal booking pages, calendar sync, reminders, and round-robin routing. For inbound, they qualify and route web leads to the right rep instantly, before the prospect cools off.",
    icon: "calendar-clock",
  },
  {
    slug: "sales-intelligence",
    name: "Sales Intelligence & Signals",
    shortName: "Signals",
    tagline: "Intent, buying signals & research",
    description:
      "Sales intelligence platforms layer context on top of raw contact data: buyer intent, hiring and job-change signals, technographics, and AI research that tells reps who is in-market and why now. They turn a flat list into a prioritized, timed outreach plan.",
    icon: "satellite-dish",
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
