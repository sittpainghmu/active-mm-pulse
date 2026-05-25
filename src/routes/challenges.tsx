import { createFileRoute, Link } from "@tanstack/react-router";
import { Footprints, Bike, MapPin, Clock, Users, Plus } from "lucide-react";
import { useState } from "react";
import { AppShell, Screen } from "@/components/AppShell";
import { challenges, featuredChallenge, type Challenge } from "@/data/mock";

export const Route = createFileRoute("/challenges")({
  head: () => ({
    meta: [
      { title: "Challenges — ActiveMM" },
      { name: "description", content: "Join Yangon-local fitness challenges at Shwedagon, Kandawgyi, Inya Lake and more." },
    ],
  }),
  component: ChallengesPage,
});

const intensityColors: Record<Challenge["intensity"], string> = {
  Endurance: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "High-intensity": "bg-rose-500/15 text-rose-400 border-rose-500/30",
  "Heritage Trail": "bg-gold/15 text-gold border-gold/30",
};

const icons: Record<Challenge["type"], React.ComponentType<{ className?: string }>> = {
  walk: Footprints,
  run: Footprints,
  cycle: Bike,
};

function ChallengesPage() {
  const [shown, setShown] = useState(3);
  const list = challenges.slice(0, shown);
  return (
    <AppShell>
      <Screen>
        <header>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Yangon</p>
          <h1 className="text-3xl font-bold">Challenges</h1>
        </header>

        {/* Featured */}
        <Link to="/" className="block relative overflow-hidden rounded-3xl border border-primary/30 p-6 bg-grid glow-primary">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-wider">● Active</span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {featuredChallenge.expiresIn}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-1">{featuredChallenge.name}</h2>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {featuredChallenge.landmark}
          </p>
          <p className="text-sm text-primary font-semibold mb-4">+{featuredChallenge.points} AP</p>
          <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(featuredChallenge.progress! / featuredChallenge.goal!) * 100}%` }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-1.5 tabular-nums">
            <span>{featuredChallenge.progress!.toLocaleString()} / {featuredChallenge.goal!.toLocaleString()} steps</span>
            <span>{Math.round((featuredChallenge.progress! / featuredChallenge.goal!) * 100)}%</span>
          </div>
        </Link>

        <button className="w-full rounded-2xl bg-primary text-primary-foreground font-bold py-4 flex items-center justify-center gap-2 active:scale-[0.99] transition">
          <Plus className="h-5 w-5" /> Join New Challenge
        </button>

        {/* Localized list */}
        <section>
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Yangon Landmarks</h2>
          <div className="space-y-3">
            {list.map((c) => {
              const Icon = icons[c.type];
              return (
                <div key={c.id} className="rounded-2xl bg-surface border border-border p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-xl bg-surface-elevated grid place-items-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold leading-tight">{c.name}</h3>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3" /> {c.landmark}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-primary font-bold text-sm tabular-nums">+{c.points}</p>
                      <p className="text-[10px] text-muted-foreground">AP</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold uppercase tracking-wider ${intensityColors[c.intensity]}`}>
                      {c.intensity}
                    </span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {c.expiresIn}
                    </span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" /> {c.participants}
                    </span>
                    <button className="ml-auto text-xs font-bold bg-primary text-primary-foreground rounded-full px-4 py-1.5 active:scale-95 transition">
                      Join
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {shown < challenges.length && (
            <button onClick={() => setShown(challenges.length)} className="w-full mt-3 rounded-2xl border border-border bg-surface text-sm font-semibold py-3 text-muted-foreground hover:text-foreground transition">
              Load more challenges
            </button>
          )}
        </section>
      </Screen>
    </AppShell>
  );
}
