import { categories } from "./categories";

/* ------------------------------------------------------------------ */
/* Shared feature catalog, every tool answers the same questions so */
/* comparison tables line up row-for-row. */
/* ------------------------------------------------------------------ */

export interface FeatureDef {
  key: string;
  label: string;
}

export type FeatureKey = string;

/* Features shown for every tool, regardless of category. */
export const universalFeatures: FeatureDef[] = [
  { key: "freePlan", label: "Free plan" },
  { key: "apiAccess", label: "API & webhooks" },
  { key: "prioritySupport", label: "Priority / 24-7 support" },
];

/* Category-specific feature sets, so each comparison shows the criteria that
   actually matter for that category instead of a generic checklist. */
export const featureCatalogByCategory: Record<string, FeatureDef[]> = {
  prospecting: [
    { key: "emailFinder", label: "Email finder" },
    { key: "mobileNumbers", label: "Mobile / direct dials" },
    { key: "emailVerification", label: "Email verification" },
    { key: "bulkEnrichment", label: "Bulk enrichment" },
    { key: "chromeExtension", label: "LinkedIn / Chrome extension" },
    { key: "intentData", label: "Intent data" },
    { key: "crmExport", label: "1-click CRM export" },
  ],
  "sales-engagement": [
    { key: "multichannelSequences", label: "Multichannel sequences" },
    { key: "emailSequencing", label: "Automated email sequencing" },
    { key: "linkedinAutomation", label: "LinkedIn automation" },
    { key: "callTasks", label: "Call & task cadences" },
    { key: "abTesting", label: "A/B testing" },
    { key: "deliverability", label: "Deliverability / warm-up" },
    { key: "aiPersonalization", label: "AI personalization" },
    { key: "engagementAnalytics", label: "Engagement analytics" },
  ],
  crm: [
    { key: "pipelineManagement", label: "Visual pipeline management" },
    { key: "contactCompanyRecords", label: "Contact & company records" },
    { key: "emailSyncTracking", label: "Email sync & tracking" },
    { key: "workflowAutomation", label: "Workflow automation" },
    { key: "reportingDashboards", label: "Reporting & dashboards" },
    { key: "builtInDialer", label: "Built-in dialer" },
    { key: "forecasting", label: "Sales forecasting" },
    { key: "mobileApp", label: "Mobile app" },
  ],
  "phone-system": [
    { key: "powerDialer", label: "Power / auto dialer" },
    { key: "parallelDialer", label: "Parallel dialing" },
    { key: "localPresence", label: "Local presence numbers" },
    { key: "callRecording", label: "Call recording" },
    { key: "voicemailDrop", label: "Voicemail drop" },
    { key: "ivrRouting", label: "IVR & call routing" },
    { key: "smsMessaging", label: "SMS / texting" },
    { key: "crmIntegration", label: "CRM integration" },
  ],
  "conversation-intelligence": [
    { key: "callRecording", label: "Call & meeting recording" },
    { key: "transcription", label: "Transcription" },
    { key: "aiSummaries", label: "AI summaries & notes" },
    { key: "talkAnalytics", label: "Talk-time & topic analytics" },
    { key: "dealIntelligence", label: "Deal & pipeline intelligence" },
    { key: "coachingScorecards", label: "Coaching & scorecards" },
    { key: "crmSync", label: "Auto CRM sync" },
    { key: "multiLanguage", label: "Multi-language support" },
  ],
  scheduling: [
    { key: "bookingPages", label: "Personal booking pages" },
    { key: "calendarSync", label: "Calendar sync" },
    { key: "roundRobin", label: "Round-robin distribution" },
    { key: "leadRouting", label: "Form & lead routing" },
    { key: "reminders", label: "Automated reminders" },
    { key: "groupMeetings", label: "Group / collective events" },
    { key: "crmIntegration", label: "CRM integration" },
    { key: "payments", label: "Payment collection" },
  ],
  "sales-intelligence": [
    { key: "intentData", label: "Buyer intent data" },
    { key: "accountResearch", label: "Account & company research" },
    { key: "dataEnrichment", label: "Waterfall data enrichment" },
    { key: "signalTracking", label: "Job-change & hiring signals" },
    { key: "icpScoring", label: "ICP / lead scoring" },
    { key: "workflowAutomation", label: "Workflow automation" },
    { key: "aiResearch", label: "AI research agents" },
    { key: "crmEnrichment", label: "CRM enrichment" },
  ],
};

/** The feature rows to show for a given category (category-specific + universal). */
export function featuresForCategory(slug: string): FeatureDef[] {
  return [...(featureCatalogByCategory[slug] ?? []), ...universalFeatures];
}

/** Pick the most relevant shared category between two tools (for compare pages). */
export function sharedCategory(a: Tool, b: Tool): string {
  if (b.categories.includes(a.primaryCategory)) return a.primaryCategory;
  if (a.categories.includes(b.primaryCategory)) return b.primaryCategory;
  return (
    a.categories.find((c) => b.categories.includes(c)) ?? a.primaryCategory
  );
}

/* ------------------------------------------------------------------ */
/* Tool model */
/* ------------------------------------------------------------------ */

export type BudgetTier = "budget" | "mid" | "premium";
export type Complexity = "beginner" | "intermediate" | "advanced";
export type TeamFit = "solo" | "startup" | "midmarket" | "enterprise";

export interface PricingTier {
  name: string;
  price: string; // human readable, e.g. "$0" or "$29/mo"
  blurb: string;
}

export interface Tool {
  slug: string;
  name: string;
  /** Short initials shown in the logo badge */
  badge: string;
  /** Tailwind gradient classes for the logo badge */
  badgeColor: string;
  primaryCategory: string; // category slug
  categories: string[]; // all category slugs it competes in
  tagline: string;
  website: string;
  founded: number;
  hq: string;
  rating: number; // editorial, out of 5
  reviewCount: number;
  startingPriceMonthly: number; // 0 = free tier available, -1 = custom only
  pricingNote: string;
  description: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  features: Partial<Record<FeatureKey, boolean>>;
  integrationsCount: number;
  popularIntegrations: string[];
  /* picker metadata */
  budgetTier: BudgetTier;
  complexity: Complexity;
  teamFit: TeamFit[];
}

/* ------------------------------------------------------------------ */
/* Seed data, representative B2B sales SaaS tools */
/* ------------------------------------------------------------------ */

export const tools: Tool[] = [
  /* ----------------------------- Prospecting ----------------------------- */
  {
    slug: "apollo",
    name: "Apollo.io",
    badge: "Ap",
    badgeColor: "from-indigo-500 to-violet-600",
    primaryCategory: "prospecting",
    categories: ["prospecting", "sales-engagement", "sales-intelligence"],
    tagline: "All-in-one prospecting database + engagement",
    website: "https://www.apollo.io",
    founded: 2015,
    hq: "San Francisco, CA",
    rating: 4.5,
    reviewCount: 7400,
    startingPriceMonthly: 0,
    pricingNote: "Free plan with limited credits; paid from ~$49/seat/mo",
    description:
      "Apollo bundles a 275M+ contact database with sequencing, a dialer, and a Chrome extension, making it the default starting point for SMB and mid-market outbound teams. The all-in-one breadth is the draw; data accuracy on niche segments and credit limits are the usual trade-offs.",
    bestFor:
      "SMB and mid-market teams that want data and outreach in one affordable tool.",
    pros: [
      "Huge contact database with a generous free tier",
      "Prospecting, sequencing, and dialer under one roof",
      "Excellent LinkedIn Chrome extension",
    ],
    cons: [
      "Email/phone accuracy dips on smaller or non-US accounts",
      "Credit limits force upgrades as volume grows",
      "Engagement features are shallower than dedicated platforms",
    ],
    features: {
      emailFinder: true,
      mobileNumbers: true,
      emailVerification: true,
      bulkEnrichment: true,
      chromeExtension: true,
      intentData: true,
      crmExport: true,
      multichannelSequences: true,
      emailSequencing: true,
      callTasks: true,
      abTesting: true,
      aiPersonalization: true,
      engagementAnalytics: true,
      accountResearch: true,
      dataEnrichment: true,
      icpScoring: true,
      freePlan: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["Salesforce", "HubSpot", "Gmail", "Outreach", "Zapier"],
    budgetTier: "budget",
    complexity: "intermediate",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "zoominfo",
    name: "ZoomInfo",
    badge: "Zi",
    badgeColor: "from-red-500 to-rose-600",
    primaryCategory: "prospecting",
    categories: ["prospecting", "sales-intelligence"],
    tagline: "Enterprise B2B data & intent at scale",
    website: "https://www.zoominfo.com",
    founded: 2007,
    hq: "Vancouver, WA",
    rating: 4.2,
    reviewCount: 8600,
    startingPriceMonthly: -1,
    pricingNote: "Custom annual contracts, typically $15k+/yr; no self-serve",
    description:
      "ZoomInfo is the enterprise standard for B2B data, pairing deep firmographics and org charts with intent signals, scoops, and a full go-to-market platform. Coverage and intent data are best-in-class; pricing is opaque, contracts are annual, and it is overkill for small teams.",
    bestFor:
      "Mid-market and enterprise teams that need maximum coverage and intent.",
    pros: [
      "Deepest US B2B coverage and org-chart data",
      "Strong intent data and buying-committee insights",
      "Robust enrichment and CRM hygiene tooling",
    ],
    cons: [
      "Expensive, opaque, annual-only contracts",
      "Aggressive upsell and seat-based pricing",
      "Weaker coverage and compliance posture in the EU",
    ],
    features: {
      emailFinder: true,
      mobileNumbers: true,
      emailVerification: true,
      bulkEnrichment: true,
      chromeExtension: true,
      intentData: true,
      crmExport: true,
      accountResearch: true,
      dataEnrichment: true,
      signalTracking: true,
      icpScoring: true,
      workflowAutomation: true,
      crmEnrichment: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 70,
    popularIntegrations: ["Salesforce", "HubSpot", "Outreach", "Salesloft", "Marketo"],
    budgetTier: "premium",
    complexity: "advanced",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "cognism",
    name: "Cognism",
    badge: "Cg",
    badgeColor: "from-blue-500 to-indigo-600",
    primaryCategory: "prospecting",
    categories: ["prospecting", "sales-intelligence"],
    tagline: "Phone-verified data with strong EU coverage",
    website: "https://www.cognism.com",
    founded: 2015,
    hq: "London, UK",
    rating: 4.6,
    reviewCount: 1300,
    startingPriceMonthly: -1,
    pricingNote: "Custom annual pricing; unrestricted-data packages available",
    description:
      "Cognism is the data provider of choice for teams selling into EMEA, with strong GDPR compliance, a DNC-checked phone database, and human-verified 'Diamond Data' mobile numbers. Coverage in Europe beats US-first rivals; the catch is custom annual pricing and no free tier.",
    bestFor:
      "Outbound teams selling into Europe that live and die by phone connect rates.",
    pros: [
      "Excellent EU/UK coverage and GDPR/DNC compliance",
      "Phone-verified 'Diamond' mobile numbers",
      "Unrestricted data views on most plans (no credit anxiety)",
    ],
    cons: [
      "Custom annual contracts, no self-serve or free plan",
      "US coverage trails ZoomInfo",
      "Best value only at team scale",
    ],
    features: {
      emailFinder: true,
      mobileNumbers: true,
      emailVerification: true,
      bulkEnrichment: true,
      chromeExtension: true,
      intentData: true,
      crmExport: true,
      accountResearch: true,
      dataEnrichment: true,
      signalTracking: true,
      crmEnrichment: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 30,
    popularIntegrations: ["Salesforce", "HubSpot", "Outreach", "Salesloft", "Pipedrive"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "pipecorn",
    name: "Pipecorn",
    badge: "Pc",
    badgeColor: "from-amber-400 to-orange-500",
    primaryCategory: "prospecting",
    categories: ["prospecting", "sales-intelligence"],
    tagline: "B2B lead search, enrichment & LinkedIn signals",
    website: "https://app.pipecorn.com",
    founded: 2022,
    hq: "Paris, France",
    rating: 4.5,
    reviewCount: 180,
    startingPriceMonthly: 0,
    pricingNote:
      "Credit-based: email enrichment from a few credits, phone enrichment costs more; rechargeable credits + plan limits",
    description:
      "Pipecorn is a B2B sales-intelligence platform for lead search, waterfall enrichment, and LinkedIn signal extraction, post engagers, reactions, commenters, and lookalike companies. Credit-based pricing keeps it accessible for lean teams, with email and phone enrichment billed separately so you only pay for the data you pull.",
    bestFor:
      "Lean outbound teams that want LinkedIn-signal prospecting without an enterprise contract.",
    pros: [
      "LinkedIn signal extraction (engagers, reactions, lookalikes)",
      "Transparent credit-based enrichment, email vs phone billed separately",
      "Personas, lists, and bulk enrichment built for fast list-building",
    ],
    cons: [
      "Smaller native database than ZoomInfo or Apollo",
      "Phone enrichment is credit-heavy at volume",
      "Younger product, ecosystem still expanding",
    ],
    features: {
      emailFinder: true,
      mobileNumbers: true,
      emailVerification: true,
      bulkEnrichment: true,
      chromeExtension: true,
      crmExport: true,
      accountResearch: true,
      dataEnrichment: true,
      signalTracking: true,
      icpScoring: true,
      crmEnrichment: true,
      freePlan: true,
      apiAccess: true,
    },
    integrationsCount: 25,
    popularIntegrations: ["LinkedIn", "Salesforce", "HubSpot", "Pipedrive", "Zapier"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "clay",
    name: "Clay",
    badge: "Cl",
    badgeColor: "from-orange-400 to-amber-600",
    primaryCategory: "sales-intelligence",
    categories: ["sales-intelligence", "prospecting"],
    tagline: "Waterfall enrichment + AI research in a spreadsheet",
    website: "https://www.clay.com",
    founded: 2017,
    hq: "New York, NY",
    rating: 4.7,
    reviewCount: 900,
    startingPriceMonthly: 134,
    pricingNote: "Free trial; paid from ~$134/mo billed annually, credit-based",
    description:
      "Clay is the power user's prospecting workbench: a spreadsheet that chains 100+ data providers in a waterfall, runs AI research agents, and pushes enriched, scored lists straight to your sequencer or CRM. Incredibly flexible, but there is a real learning curve and credits add up fast.",
    bestFor:
      "RevOps and growth teams building bespoke, signal-based outbound at scale.",
    pros: [
      "Waterfall enrichment across 100+ providers maximizes coverage",
      "AI research agents automate manual account research",
      "Endlessly composable, the Swiss-army knife of GTM data",
    ],
    cons: [
      "Steep learning curve, not a click-and-go tool",
      "Credit consumption is hard to predict",
      "You assemble the workflow, it is not opinionated",
    ],
    features: {
      intentData: true,
      accountResearch: true,
      dataEnrichment: true,
      signalTracking: true,
      icpScoring: true,
      workflowAutomation: true,
      aiResearch: true,
      crmEnrichment: true,
      emailFinder: true,
      mobileNumbers: true,
      bulkEnrichment: true,
      crmExport: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 120,
    popularIntegrations: ["HubSpot", "Salesforce", "Apollo", "Smartlead", "OpenAI"],
    budgetTier: "mid",
    complexity: "advanced",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  /* ------------------------- Sales engagement ------------------------- */
  {
    slug: "outreach",
    name: "Outreach",
    badge: "Or",
    badgeColor: "from-purple-600 to-fuchsia-700",
    primaryCategory: "sales-engagement",
    categories: ["sales-engagement", "conversation-intelligence"],
    tagline: "Enterprise sales execution & sequencing",
    website: "https://www.outreach.io",
    founded: 2014,
    hq: "Seattle, WA",
    rating: 4.3,
    reviewCount: 3800,
    startingPriceMonthly: -1,
    pricingNote: "Custom annual pricing, typically ~$100+/seat/mo at scale",
    description:
      "Outreach is the enterprise sales execution platform, deep sequencing, a dialer, deal management, conversation intelligence, and forecasting in one suite. It is built for large, process-driven teams; the power comes with cost, admin overhead, and a steeper ramp than lightweight sequencers.",
    bestFor:
      "Large outbound orgs that want sequencing, deals, and forecasting unified.",
    pros: [
      "Best-in-class sequencing and admin controls at scale",
      "Bundled conversation intelligence and deal management",
      "Mature reporting and rep-productivity analytics",
    ],
    cons: [
      "Enterprise pricing and annual contracts",
      "Heavier setup and admin burden",
      "Overkill for small teams",
    ],
    features: {
      multichannelSequences: true,
      emailSequencing: true,
      linkedinAutomation: true,
      callTasks: true,
      abTesting: true,
      deliverability: true,
      aiPersonalization: true,
      engagementAnalytics: true,
      callRecording: true,
      transcription: true,
      dealIntelligence: true,
      crmSync: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["Salesforce", "HubSpot", "ZoomInfo", "LinkedIn", "Gong"],
    budgetTier: "premium",
    complexity: "advanced",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "salesloft",
    name: "Salesloft",
    badge: "Sl",
    badgeColor: "from-sky-500 to-blue-700",
    primaryCategory: "sales-engagement",
    categories: ["sales-engagement", "conversation-intelligence"],
    tagline: "Revenue orchestration & cadences",
    website: "https://www.salesloft.com",
    founded: 2011,
    hq: "Atlanta, GA",
    rating: 4.4,
    reviewCount: 4100,
    startingPriceMonthly: -1,
    pricingNote: "Custom annual pricing; tiered Advanced/Premier packages",
    description:
      "Salesloft is Outreach's closest rival, a revenue orchestration platform with cadences, a dialer, conversation intelligence (Conversations), and deal management. Reps often find its cadence UX friendlier; like Outreach it is an annual-contract, enterprise-leaning purchase.",
    bestFor:
      "Mid-market and enterprise teams that want a rep-friendly engagement platform.",
    pros: [
      "Intuitive cadence builder reps actually adopt",
      "Built-in Conversations (call recording + analytics)",
      "Strong Salesforce sync and analytics",
    ],
    cons: [
      "Custom annual pricing, no free tier",
      "Premium features gated to higher packages",
      "Heavier than a standalone sequencer for small teams",
    ],
    features: {
      multichannelSequences: true,
      emailSequencing: true,
      linkedinAutomation: true,
      callTasks: true,
      abTesting: true,
      deliverability: true,
      aiPersonalization: true,
      engagementAnalytics: true,
      callRecording: true,
      transcription: true,
      coachingScorecards: true,
      crmSync: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 90,
    popularIntegrations: ["Salesforce", "HubSpot", "LinkedIn", "ZoomInfo", "Drift"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "lemlist",
    name: "lemlist",
    badge: "Le",
    badgeColor: "from-rose-500 to-pink-600",
    primaryCategory: "sales-engagement",
    categories: ["sales-engagement", "prospecting"],
    tagline: "Cold email + multichannel for small teams",
    website: "https://www.lemlist.com",
    founded: 2018,
    hq: "Paris, France",
    rating: 4.5,
    reviewCount: 1500,
    startingPriceMonthly: 39,
    pricingNote: "Free trial; paid from ~$39/seat/mo, lead database add-on",
    description:
      "lemlist made its name on personalized cold email, custom images, video, and liquid variables, and has grown into a multichannel platform with a built-in lead database and deliverability tooling (lemwarm). It is a favorite of agencies and SMB SDR teams; enterprises will find it light on admin controls.",
    bestFor:
      "Agencies, founders, and SMB teams running personalized cold outbound.",
    pros: [
      "Standout personalization (images, video, liquid variables)",
      "Built-in lead database + lemwarm deliverability",
      "Affordable and quick to launch",
    ],
    cons: [
      "Lighter analytics and admin than enterprise tools",
      "Database coverage trails dedicated data vendors",
      "Scales less gracefully for large orgs",
    ],
    features: {
      multichannelSequences: true,
      emailSequencing: true,
      linkedinAutomation: true,
      callTasks: true,
      abTesting: true,
      deliverability: true,
      aiPersonalization: true,
      engagementAnalytics: true,
      emailFinder: true,
      emailVerification: true,
      chromeExtension: true,
      crmExport: true,
      apiAccess: true,
    },
    integrationsCount: 40,
    popularIntegrations: ["HubSpot", "Pipedrive", "Salesforce", "Aircall", "Zapier"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  /* -------------------------------- CRM -------------------------------- */
  {
    slug: "salesforce",
    name: "Salesforce Sales Cloud",
    badge: "Sf",
    badgeColor: "from-sky-400 to-blue-600",
    primaryCategory: "crm",
    categories: ["crm", "sales-intelligence"],
    tagline: "The enterprise CRM standard",
    website: "https://www.salesforce.com",
    founded: 1999,
    hq: "San Francisco, CA",
    rating: 4.3,
    reviewCount: 19800,
    startingPriceMonthly: 25,
    pricingNote: "From ~$25/seat/mo (Starter); most teams land on $80–165/seat",
    description:
      "Salesforce Sales Cloud is the most powerful and customizable CRM on the market, the default for enterprise sales orgs. Anything is possible with enough configuration and AppExchange apps; that flexibility is also its burden, real implementations need admins, consultants, and budget.",
    bestFor:
      "Mid-market and enterprise teams that need deep customization and scale.",
    pros: [
      "Unmatched customization and AppExchange ecosystem",
      "Scales to the largest, most complex sales orgs",
      "Powerful reporting, forecasting, and automation (Flow)",
    ],
    cons: [
      "Expensive once you add the seats and add-ons you need",
      "Requires admin/consultant resources to run well",
      "Steep learning curve and slower to configure",
    ],
    features: {
      pipelineManagement: true,
      contactCompanyRecords: true,
      emailSyncTracking: true,
      workflowAutomation: true,
      reportingDashboards: true,
      forecasting: true,
      mobileApp: true,
      intentData: true,
      icpScoring: true,
      crmEnrichment: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 4000,
    popularIntegrations: ["Slack", "Outreach", "Gong", "ZoomInfo", "DocuSign"],
    budgetTier: "premium",
    complexity: "advanced",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "hubspot-sales",
    name: "HubSpot Sales Hub",
    badge: "Hs",
    badgeColor: "from-orange-500 to-orange-600",
    primaryCategory: "crm",
    categories: ["crm", "sales-engagement"],
    tagline: "Easy all-in-one CRM with built-in sequences",
    website: "https://www.hubspot.com/products/sales",
    founded: 2006,
    hq: "Cambridge, MA",
    rating: 4.5,
    reviewCount: 11200,
    startingPriceMonthly: 0,
    pricingNote: "Free CRM; paid Sales Hub from ~$20/seat/mo, scaling steeply",
    description:
      "HubSpot Sales Hub pairs a genuinely free CRM with sequences, a dialer, meeting links, and reporting in one tidy interface. It is the easiest full-featured CRM to adopt, but costs climb fast as you add seats and move up to Professional/Enterprise tiers.",
    bestFor:
      "Startups and mid-market teams that want one easy CRM + engagement suite.",
    pros: [
      "Free CRM tier and exceptionally easy onboarding",
      "Sequences, dialer, and meeting links built in",
      "Huge app marketplace and clean reporting",
    ],
    cons: [
      "Costs escalate quickly with seats and tiers",
      "Advanced automation gated to higher plans",
      "Less customizable than Salesforce at the top end",
    ],
    features: {
      pipelineManagement: true,
      contactCompanyRecords: true,
      emailSyncTracking: true,
      workflowAutomation: true,
      reportingDashboards: true,
      builtInDialer: true,
      forecasting: true,
      mobileApp: true,
      multichannelSequences: true,
      emailSequencing: true,
      callTasks: true,
      engagementAnalytics: true,
      freePlan: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 1500,
    popularIntegrations: ["Gmail", "Slack", "Aircall", "Gong", "Zapier"],
    budgetTier: "mid",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket", "enterprise"],
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    badge: "Pd",
    badgeColor: "from-emerald-500 to-green-600",
    primaryCategory: "crm",
    categories: ["crm"],
    tagline: "Simple, visual pipeline CRM for SMBs",
    website: "https://www.pipedrive.com",
    founded: 2010,
    hq: "Tallinn, Estonia",
    rating: 4.4,
    reviewCount: 9400,
    startingPriceMonthly: 14,
    pricingNote: "From ~$14/seat/mo; most teams on Advanced/Professional",
    description:
      "Pipedrive is a sales-first CRM built around a dead-simple visual pipeline. Reps love how fast it is to update deals, and admins love how little setup it needs. It trades the depth of Salesforce or HubSpot's marketing side for focus and ease, which is exactly the point for many SMB sales teams.",
    bestFor:
      "Small and mid-size sales teams that want a fast, no-fuss pipeline CRM.",
    pros: [
      "Cleanest visual pipeline, reps adopt it instantly",
      "Affordable and quick to set up",
      "Solid automation and activity reminders for the price",
    ],
    cons: [
      "Lighter on marketing and support features",
      "Reporting less powerful than HubSpot/Salesforce",
      "Add-ons (LeadBooster, dialer) raise the real cost",
    ],
    features: {
      pipelineManagement: true,
      contactCompanyRecords: true,
      emailSyncTracking: true,
      workflowAutomation: true,
      reportingDashboards: true,
      builtInDialer: true,
      forecasting: true,
      mobileApp: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 400,
    popularIntegrations: ["Gmail", "Slack", "Aircall", "lemlist", "Zapier"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "attio",
    name: "Attio",
    badge: "At",
    badgeColor: "from-ink-700 to-ink-900",
    primaryCategory: "crm",
    categories: ["crm"],
    tagline: "Flexible, data-native CRM for modern teams",
    website: "https://www.attio.com",
    founded: 2019,
    hq: "London, UK",
    rating: 4.7,
    reviewCount: 480,
    startingPriceMonthly: 0,
    pricingNote: "Free plan; paid from ~$29/seat/mo (Plus/Pro tiers)",
    description:
      "Attio is a new-generation CRM that feels like a fast, relational spreadsheet, highly customizable objects, real-time data sync, and automations that startups can shape to any go-to-market motion. It is winning over modern startups; it is younger than incumbents and lighter on out-of-the-box sales reporting.",
    bestFor:
      "Startups and product-led teams that want a flexible, modern CRM.",
    pros: [
      "Extremely flexible data model and slick, fast UI",
      "Real-time enrichment and email/calendar sync built in",
      "Strong free tier and quick to customize",
    ],
    cons: [
      "Younger ecosystem, fewer native integrations",
      "Forecasting and sales reporting still maturing",
      "Best for teams comfortable building their own workflows",
    ],
    features: {
      pipelineManagement: true,
      contactCompanyRecords: true,
      emailSyncTracking: true,
      workflowAutomation: true,
      reportingDashboards: true,
      mobileApp: true,
      freePlan: true,
      apiAccess: true,
    },
    integrationsCount: 50,
    popularIntegrations: ["Gmail", "Slack", "Outreach", "Clay", "Zapier"],
    budgetTier: "budget",
    complexity: "intermediate",
    teamFit: ["solo", "startup", "midmarket"],
  },
  /* ---------------------------- Phone system ---------------------------- */
  {
    slug: "aircall",
    name: "Aircall",
    badge: "Ac",
    badgeColor: "from-green-500 to-emerald-600",
    primaryCategory: "phone-system",
    categories: ["phone-system"],
    tagline: "Cloud phone system wired into your CRM",
    website: "https://www.aircall.io",
    founded: 2014,
    hq: "New York, NY",
    rating: 4.3,
    reviewCount: 1400,
    startingPriceMonthly: 30,
    pricingNote: "From ~$30/seat/mo (3-seat minimum); annual billing",
    description:
      "Aircall is a cloud phone system built for sales and support teams that want calling tightly integrated with the CRM. Setup is fast, the integrations are deep, and call logging is automatic. It is more business-phone than high-velocity dialer, raw outbound throughput is not its strength.",
    bestFor:
      "Sales and support teams that want a CRM-native business phone system.",
    pros: [
      "Fast setup and deep CRM/helpdesk integrations",
      "Automatic call logging and clean admin",
      "Power dialer, IVR, and SMS in one place",
    ],
    cons: [
      "3-seat minimum and per-seat pricing add up",
      "Not built for high-volume parallel dialing",
      "Advanced analytics need higher tiers",
    ],
    features: {
      powerDialer: true,
      localPresence: true,
      callRecording: true,
      voicemailDrop: true,
      ivrRouting: true,
      smsMessaging: true,
      crmIntegration: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["HubSpot", "Salesforce", "Pipedrive", "Zendesk", "Slack"],
    budgetTier: "mid",
    complexity: "beginner",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "orum",
    name: "Orum",
    badge: "Om",
    badgeColor: "from-violet-500 to-purple-700",
    primaryCategory: "phone-system",
    categories: ["phone-system"],
    tagline: "AI parallel dialer for live conversations",
    website: "https://www.orum.com",
    founded: 2019,
    hq: "San Francisco, CA",
    rating: 4.6,
    reviewCount: 520,
    startingPriceMonthly: -1,
    pricingNote: "Custom pricing, typically ~$300+/seat/mo billed annually",
    description:
      "Orum is a live-conversation platform built around an AI parallel dialer that calls multiple numbers at once, navigates phone trees, drops voicemails, and only connects a rep when a human answers. It dramatically lifts connect rates for high-velocity teams; the cost only pencils out at real dialing volume.",
    bestFor:
      "High-velocity SDR teams that grind outbound calls all day.",
    pros: [
      "Parallel dialing multiplies live conversations per hour",
      "AI skips voicemails, dial tones, and phone trees",
      "Strong CRM/engagement integrations and analytics",
    ],
    cons: [
      "Premium per-seat pricing, annual contracts",
      "ROI depends on genuinely high call volume",
      "Built for outbound calling, not a full phone system",
    ],
    features: {
      powerDialer: true,
      parallelDialer: true,
      localPresence: true,
      callRecording: true,
      voicemailDrop: true,
      crmIntegration: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 30,
    popularIntegrations: ["Salesforce", "Outreach", "Salesloft", "HubSpot", "Gong"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "justcall",
    name: "JustCall",
    badge: "Jc",
    badgeColor: "from-blue-500 to-cyan-600",
    primaryCategory: "phone-system",
    categories: ["phone-system", "conversation-intelligence"],
    tagline: "Calling, SMS & AI for sales teams",
    website: "https://www.justcall.io",
    founded: 2016,
    hq: "Palo Alto, CA",
    rating: 4.3,
    reviewCount: 2100,
    startingPriceMonthly: 29,
    pricingNote: "From ~$29/seat/mo; AI and dialer features on higher tiers",
    description:
      "JustCall is an affordable calling and texting platform with a sales dialer, SMS workflows, and built-in conversation intelligence. It packs a lot of value at SMB prices, including AI transcripts and coaching. Power and reliability trail premium phone systems, but the price-to-feature ratio is hard to beat.",
    bestFor:
      "SMB sales teams that want calling, SMS, and AI without a big budget.",
    pros: [
      "Calling, SMS, and AI coaching in one affordable tool",
      "Auto/predictive dialer and bulk SMS for outbound",
      "Solid CRM integrations at SMB pricing",
    ],
    cons: [
      "Call quality/reliability can be uneven",
      "Support response times vary",
      "Best AI features require pricier tiers",
    ],
    features: {
      powerDialer: true,
      parallelDialer: true,
      localPresence: true,
      callRecording: true,
      voicemailDrop: true,
      ivrRouting: true,
      smsMessaging: true,
      crmIntegration: true,
      transcription: true,
      aiSummaries: true,
      coachingScorecards: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Slack"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  /* ---------------------- Conversation intelligence ---------------------- */
  {
    slug: "gong",
    name: "Gong",
    badge: "Go",
    badgeColor: "from-purple-500 to-indigo-600",
    primaryCategory: "conversation-intelligence",
    categories: ["conversation-intelligence", "sales-intelligence"],
    tagline: "Revenue intelligence from every call",
    website: "https://www.gong.io",
    founded: 2015,
    hq: "San Francisco, CA",
    rating: 4.7,
    reviewCount: 6200,
    startingPriceMonthly: -1,
    pricingNote: "Custom annual pricing: platform fee + ~per-seat; enterprise-leaning",
    description:
      "Gong is the category leader in revenue intelligence, capturing calls, emails, and deals, then using AI to surface what's working, what's at risk, and how to coach. The insight depth is unmatched; it is also a premium, annual-contract purchase that's heavy for very small teams.",
    bestFor:
      "Revenue teams that want deal risk and coaching insight at scale.",
    pros: [
      "Best-in-class call analytics and deal-risk signals",
      "Powerful coaching, scorecards, and trackers",
      "Strong forecasting and pipeline intelligence",
    ],
    cons: [
      "Premium pricing with platform fees and annual contracts",
      "More than small teams need",
      "Setup and adoption take real change management",
    ],
    features: {
      callRecording: true,
      transcription: true,
      aiSummaries: true,
      talkAnalytics: true,
      dealIntelligence: true,
      coachingScorecards: true,
      crmSync: true,
      multiLanguage: true,
      intentData: true,
      signalTracking: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["Salesforce", "HubSpot", "Outreach", "Salesloft", "Zoom"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "fireflies",
    name: "Fireflies.ai",
    badge: "Ff",
    badgeColor: "from-orange-400 to-red-500",
    primaryCategory: "conversation-intelligence",
    categories: ["conversation-intelligence"],
    tagline: "AI notetaker for every meeting",
    website: "https://www.fireflies.ai",
    founded: 2016,
    hq: "San Francisco, CA",
    rating: 4.5,
    reviewCount: 4300,
    startingPriceMonthly: 0,
    pricingNote: "Free plan; paid from ~$10/seat/mo, AI features on higher tiers",
    description:
      "Fireflies is an affordable AI meeting assistant that joins calls to record, transcribe, and summarize, then makes everything searchable and syncs notes to the CRM. It is a fraction of Gong's price and great for notes and recall, but it is a notetaker, not a full revenue-intelligence platform.",
    bestFor:
      "Teams that want cheap, reliable AI notes and transcripts across meetings.",
    pros: [
      "Generous free tier and very low paid pricing",
      "Accurate transcripts, summaries, and search",
      "Works across Zoom, Meet, Teams, and dialers",
    ],
    cons: [
      "Lighter deal/pipeline intelligence than Gong",
      "Coaching and analytics are basic",
      "AI credit limits on lower tiers",
    ],
    features: {
      callRecording: true,
      transcription: true,
      aiSummaries: true,
      talkAnalytics: true,
      coachingScorecards: true,
      crmSync: true,
      multiLanguage: true,
      freePlan: true,
      apiAccess: true,
    },
    integrationsCount: 60,
    popularIntegrations: ["Zoom", "Google Meet", "Microsoft Teams", "Salesforce", "HubSpot"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "modjo",
    name: "Modjo",
    badge: "Mo",
    badgeColor: "from-teal-500 to-cyan-600",
    primaryCategory: "conversation-intelligence",
    categories: ["conversation-intelligence"],
    tagline: "European conversation intelligence & AI",
    website: "https://www.modjo.ai",
    founded: 2020,
    hq: "Paris, France",
    rating: 4.6,
    reviewCount: 410,
    startingPriceMonthly: -1,
    pricingNote: "Custom pricing, per-seat annual; mid-market friendly",
    description:
      "Modjo is the leading European conversation-intelligence platform, recording and transcribing calls with strong multilingual support, plus AI summaries, CRM auto-fill, and coaching. It is a natural Gong alternative for EU teams that want GDPR-aligned hosting and pricing pitched below the US incumbents.",
    bestFor:
      "European sales teams wanting GDPR-friendly call coaching and AI notes.",
    pros: [
      "Excellent multilingual transcription for EU teams",
      "AI CRM auto-fill saves reps admin time",
      "GDPR-aligned, European hosting and support",
    ],
    cons: [
      "Smaller integration ecosystem than Gong",
      "Custom annual pricing, no self-serve tier",
      "Less deal-intelligence depth than the US leader",
    ],
    features: {
      callRecording: true,
      transcription: true,
      aiSummaries: true,
      talkAnalytics: true,
      dealIntelligence: true,
      coachingScorecards: true,
      crmSync: true,
      multiLanguage: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 40,
    popularIntegrations: ["Salesforce", "HubSpot", "Pipedrive", "Aircall", "Zoom"],
    budgetTier: "mid",
    complexity: "beginner",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  /* ----------------------------- Scheduling ----------------------------- */
  {
    slug: "calendly",
    name: "Calendly",
    badge: "Cy",
    badgeColor: "from-blue-500 to-indigo-500",
    primaryCategory: "scheduling",
    categories: ["scheduling"],
    tagline: "The default meeting-scheduling link",
    website: "https://www.calendly.com",
    founded: 2013,
    hq: "Atlanta, GA",
    rating: 4.7,
    reviewCount: 16000,
    startingPriceMonthly: 0,
    pricingNote: "Free for one event type; paid from ~$10/seat/mo",
    description:
      "Calendly is the ubiquitous scheduling link, share your availability, let prospects book, done. It nails the core job with a generous free tier and clean UX, and adds round-robin and routing on higher plans. For complex inbound lead routing, dedicated tools like Chili Piper go deeper.",
    bestFor:
      "Anyone who wants frictionless booking, from solo reps to whole teams.",
    pros: [
      "Effortless to set up and universally recognized",
      "Strong free tier; reminders and calendar sync included",
      "Round-robin and routing forms on team plans",
    ],
    cons: [
      "Advanced lead routing trails Chili Piper",
      "Per-seat costs add up for large teams",
      "Deeper CRM workflows need higher tiers",
    ],
    features: {
      bookingPages: true,
      calendarSync: true,
      roundRobin: true,
      leadRouting: true,
      reminders: true,
      groupMeetings: true,
      crmIntegration: true,
      payments: true,
      freePlan: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["Google Calendar", "Outlook", "Salesforce", "HubSpot", "Zoom"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket", "enterprise"],
  },
  {
    slug: "chili-piper",
    name: "Chili Piper",
    badge: "Cp",
    badgeColor: "from-red-500 to-orange-600",
    primaryCategory: "scheduling",
    categories: ["scheduling", "crm"],
    tagline: "Inbound lead routing & instant booking",
    website: "https://www.chilipiper.com",
    founded: 2016,
    hq: "New York, NY",
    rating: 4.5,
    reviewCount: 1100,
    startingPriceMonthly: 22,
    pricingNote: "From ~$22/seat/mo; routing modules priced separately",
    description:
      "Chili Piper is built for inbound speed-to-lead: qualify a web form, route the lead to the right rep by territory or round-robin, and let them book a meeting instantly, before they cool off. It is more powerful than a simple booking link, and priced and configured accordingly.",
    bestFor:
      "Demand-gen and SDR teams that need instant inbound lead routing.",
    pros: [
      "Best-in-class form qualification and instant booking",
      "Sophisticated routing by territory, account, round-robin",
      "Tight Salesforce/HubSpot handoff for inbound",
    ],
    cons: [
      "Pricier and more complex than a basic booking link",
      "Modules (Concierge, Distro) billed separately",
      "Overkill for teams without real inbound volume",
    ],
    features: {
      bookingPages: true,
      calendarSync: true,
      roundRobin: true,
      leadRouting: true,
      reminders: true,
      groupMeetings: true,
      crmIntegration: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 50,
    popularIntegrations: ["Salesforce", "HubSpot", "Marketo", "Gong", "Slack"],
    budgetTier: "mid",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers */
/* ------------------------------------------------------------------ */

export const toolBySlug = (slug: string): Tool | undefined =>
  tools.find((t) => t.slug === slug);

export const toolsInCategory = (categorySlug: string): Tool[] =>
  tools.filter((t) => t.categories.includes(categorySlug));

export const categoryName = (slug: string): string =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export const formatStartingPrice = (t: Tool): string =>
  t.startingPriceMonthly < 0
    ? "Custom pricing"
    : t.startingPriceMonthly === 0
      ? "Free plan"
      : `$${t.startingPriceMonthly}/mo`;

export const budgetLabel: Record<BudgetTier, string> = {
  budget: "Budget-friendly",
  mid: "Mid-range",
  premium: "Premium",
};

export const complexityLabel: Record<Complexity, string> = {
  beginner: "Beginner-friendly",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
