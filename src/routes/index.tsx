import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Flame, Footprints, Moon, Activity, ArrowRight, Sparkles } from "lucide-react";
import { AppShell, Screen } from "@/components/AppShell";
import { TierBadge } from "@/components/TierBadge";
import { user, featuredChallenge, rewards } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActiveMM — Move More, Earn More" },
      { name: "description", content: "Myanmar's wellness rewards app. Earn AP points for steps, sleep, and challenges at Yangon's iconic landmarks." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const tierProgress = Math.min(100, (user.points / user.nextTierAt) * 100);
  return (
    <AppShell>
      <Screen>
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Good morning</p>
            <h1 className="text-2xl font-bold mt-0.5">{user.name}</h1>
          </div>
          <div className="h-11 w-11 rounded-full bg-surface-elevated grid place-items-center text-sm font-bold text-primary border border-border">
            MK
          </div>
        </header>

        {/* Points card */}
        <div className="relative overflow-hidden rounded-3xl p-6 glow-primary bg-grid border border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Current Points</p>
            <TierBadge tier={user.tier} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-gradient-primary tabular-nums">
              {user.points.toLocaleString()}
            </span>
            <span className="text-primary font-semibold">AP</span>
          </div>
          <div className="mt-5">
            <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
              <span>Next: Platinum Elite</span>
              <span className="tabular-nums">{user.points} / {user.nextTierAt}</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-elevated overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${tierProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatTile icon={Footprints} label="Daily Steps" value={user.steps.toLocaleString()} sub={`/ ${user.stepsGoal.toLocaleString()}`} />
          <StatTile icon={Flame} label="Calories" value={user.calories.toString()} sub="kcal" />
          <StatTile icon={Moon} label="Sleep" value={user.sleep} />
          <StatTile icon={Activity} label="Flux Score" value={user.fluxScore.toString()} accent />
        </div>

        {/* Active challenge */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Active Challenge</h2>
            <Link to="/challenges" className="text-xs text-primary font-semibold">View all →</Link>
          </div>
          <Link to="/challenges" className="block rounded-2xl bg-surface border border-border p-5 active:scale-[0.99] transition">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">● Active</span>
              <span className="text-[10px] text-muted-foreground">{featuredChallenge.expiresIn}</span>
            </div>
            <h3 className="font-bold text-lg">{featuredChallenge.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">+{featuredChallenge.points} AP reward</p>
            <div className="h-1.5 rounded-full bg-surface-elevated overflow-hidden mb-1.5">
              <div className="h-full bg-primary" style={{ width: `${(featuredChallenge.progress! / featuredChallenge.goal!) * 100}%` }} />
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground tabular-nums">
              <span>{featuredChallenge.progress!.toLocaleString()} steps</span>
              <span>{featuredChallenge.goal!.toLocaleString()} goal</span>
            </div>
          </Link>
        </section>

        {/* Quick rewards */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Available Rewards</h2>
            <Link to="/rewards" className="text-xs text-primary font-semibold">Shop →</Link>
          </div>
          <div className="space-y-2">
            {rewards.slice(0, 3).map((r) => (
              <Link key={r.id} to="/rewards" className="flex items-center gap-3 rounded-2xl bg-surface border border-border p-3 active:scale-[0.99] transition">
                <div className="h-12 w-12 rounded-xl bg-surface-elevated grid place-items-center text-2xl shrink-0">{r.logo}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{r.partner}</p>
                  <p className="text-xs text-muted-foreground truncate">{r.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-primary tabular-nums">{r.cost.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground">AP</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold">Bonus weekend!</p>
            <p className="text-xs text-muted-foreground">Earn 2× AP on all walking challenges until Sunday.</p>
          </div>
        </div>
      </Screen>
    </AppShell>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-4 border ${accent ? "border-primary/30 bg-primary/5" : "border-border bg-surface"}`}>
      <Icon className={`h-4 w-4 mb-2 ${accent ? "text-primary" : "text-muted-foreground"}`} />
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className={`text-xl font-bold mt-1 tabular-nums ${accent ? "text-primary" : ""}`}>{value}</p>
      {sub && <p className="text-[10px] text-muted-foreground tabular-nums">{sub}</p>}
    </div>
  );
}
