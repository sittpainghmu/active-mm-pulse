import { createFileRoute } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { AppShell, Screen } from "@/components/AppShell";
import { TierBadge } from "@/components/TierBadge";
import { leaderboard } from "@/data/mock";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — ActiveMM" },
      { name: "description", content: "See where you rank against other Yangon movers." },
    ],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  return (
    <AppShell>
      <Screen>
        <header>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Weekly</p>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
        </header>

        <div className="rounded-3xl bg-grid border border-primary/20 p-6 text-center glow-primary">
          <Crown className="h-8 w-8 text-gold mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Top this week</p>
          <p className="text-2xl font-bold mt-1">{leaderboard[0].name}</p>
          <p className="text-primary font-bold tabular-nums">{leaderboard[0].points.toLocaleString()} AP</p>
        </div>

        <div className="rounded-2xl bg-surface border border-border overflow-hidden">
          {leaderboard.map((p, i) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 p-4 ${i !== leaderboard.length - 1 ? "border-b border-border" : ""} ${p.you ? "bg-primary/5" : ""}`}
            >
              <span className={`text-sm font-bold w-6 tabular-nums ${i < 3 ? "text-primary" : "text-muted-foreground"}`}>
                {i + 1}
              </span>
              <div className="h-9 w-9 rounded-full bg-surface-elevated grid place-items-center text-xs font-bold">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">
                  {p.name} {p.you && <span className="text-primary text-[10px] ml-1">YOU</span>}
                </p>
                <TierBadge tier={p.tier as any} className="mt-0.5" />
              </div>
              <p className="text-sm font-bold text-primary tabular-nums">{p.points.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </Screen>
    </AppShell>
  );
}
