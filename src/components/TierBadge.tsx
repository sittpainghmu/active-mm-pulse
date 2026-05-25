import type { Tier } from "@/data/mock";

export function TierBadge({ tier, className = "" }: { tier: Tier; className?: string }) {
  const styles: Record<Tier, string> = {
    Free: "bg-muted text-muted-foreground",
    Gold: "bg-gold/15 text-gold border border-gold/30",
    "Platinum Elite": "bg-platinum/15 text-platinum border border-platinum/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${styles[tier]} ${className}`}
    >
      ★ {tier}
    </span>
  );
}
