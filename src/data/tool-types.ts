/* Shared types for the tool catalog. Kept separate so the per-category data
   files in ./catalog/* can import the Tool type without a circular dependency
   on the tools.ts barrel. */

export interface FeatureDef {
  key: string;
  label: string;
}

export type FeatureKey = string;

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
