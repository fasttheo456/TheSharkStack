import { categories } from "./categories";
import type {
  Tool,
  FeatureDef,
  FeatureKey,
  PricingTier,
  BudgetTier,
  Complexity,
  TeamFit,
} from "./tool-types";
import { prospectingTools } from "./catalog/prospecting";
import { salesEngagementTools } from "./catalog/sales-engagement";
import { crmTools } from "./catalog/crm";
import { phoneSystemTools } from "./catalog/phone-system";
import { conversationIntelligenceTools } from "./catalog/conversation-intelligence";
import { schedulingTools } from "./catalog/scheduling";
import { salesIntelligenceTools } from "./catalog/sales-intelligence";

/* Re-export the shared types so existing `import { Tool } from "../data/tools"`
   call sites keep working after the split into per-category catalog files. */
export type {
  Tool,
  FeatureDef,
  FeatureKey,
  PricingTier,
  BudgetTier,
  Complexity,
  TeamFit,
};

/* ------------------------------------------------------------------ */
/* Shared feature catalog, every tool answers the same questions so */
/* comparison tables line up row-for-row. */
/* ------------------------------------------------------------------ */

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
/* The catalog, assembled from the per-category data files. */
/* ------------------------------------------------------------------ */

export const tools: Tool[] = [
  ...prospectingTools,
  ...salesEngagementTools,
  ...crmTools,
  ...phoneSystemTools,
  ...conversationIntelligenceTools,
  ...schedulingTools,
  ...salesIntelligenceTools,
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
