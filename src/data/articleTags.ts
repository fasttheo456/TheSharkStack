/* Light, per-category colors for article flair pills. */
export function tagColor(tag: string): string {
  const map: Record<string, string> = {
    comparison: "bg-blue-50 text-blue-700",
    guide: "bg-green-50 text-green-700",
    explainer: "bg-purple-50 text-purple-700",
    reference: "bg-amber-50 text-amber-700",
    news: "bg-pink-50 text-pink-700",
    tutorial: "bg-teal-50 text-teal-700",
  };
  return map[tag.toLowerCase()] ?? "bg-ink-100 text-ink-600";
}
