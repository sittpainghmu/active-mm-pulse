import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Check } from "lucide-react";
import { AppShell, Screen } from "@/components/AppShell";
import { TierBadge } from "@/components/TierBadge";
import { rewards, user, type Reward } from "@/data/mock";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards Marketplace — ActiveMM" },
      { name: "description", content: "Redeem AP points for MAI Airways miles, Gong Cha, Balance Fitness and more." },
    ],
  }),
  component: RewardsPage,
});

const tabs = ["All", "Lifestyle", "Travel", "Fitness"] as const;
type Tab = (typeof tabs)[number];

function RewardsPage() {
  const [tab, setTab] = useState<Tab>("All");
  const list = tab === "All" ? rewards : rewards.filter((r) => r.category === tab);
  return (
    <AppShell>
      <Screen>
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Rewards</h1>
            <TierBadge tier={user.tier} className="mt-2" />
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-primary tabular-nums leading-none mt-1">
              {user.points.toLocaleString()}
            </p>
            <p className="text-[10px] text-muted-foreground">AP</p>
          </div>
        </header>

        <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 text-xs font-semibold uppercase tracking-wider rounded-full px-4 py-2 border transition ${
                tab === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface border-border text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {list.map((r) => (
            <RewardCard key={r.id} reward={r} />
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-4 text-center">
          <p className="text-xs text-muted-foreground">Pay top-ups with</p>
          <p className="text-sm font-bold mt-1">KBZPay · Wave Money</p>
        </div>
      </Screen>
    </AppShell>
  );
}

function RewardCard({ reward }: { reward: Reward }) {
  const locked = reward.status === "Locked";
  const ready = reward.status === "Ready";
  const platinumOnly = reward.tier === "Platinum only";
  const goldPlus = reward.tier === "Gold and above";
  return (
    <div className={`rounded-2xl border p-4 flex flex-col ${locked ? "border-border bg-surface opacity-60" : "border-border bg-surface"}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="h-14 w-14 rounded-xl bg-surface-elevated grid place-items-center text-3xl">
          {reward.logo}
        </div>
        {platinumOnly && (
          <span className="text-[9px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 bg-platinum/15 text-platinum border border-platinum/30">
            Platinum
          </span>
        )}
        {goldPlus && (
          <span className="text-[9px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 bg-gold/15 text-gold border border-gold/30">
            Gold+
          </span>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{reward.partner}</p>
      <p className="text-sm font-semibold leading-snug mt-0.5 line-clamp-2 flex-1">{reward.description}</p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-lg font-bold text-primary tabular-nums">{reward.cost.toLocaleString()}</span>
        <span className="text-[10px] text-muted-foreground">AP</span>
      </div>
      <button
        disabled={locked}
        className={`mt-3 text-xs font-bold rounded-full py-2 transition active:scale-95 flex items-center justify-center gap-1 ${
          locked
            ? "bg-surface-elevated text-muted-foreground cursor-not-allowed"
            : ready
            ? "bg-gold text-background"
            : "bg-primary text-primary-foreground"
        }`}
      >
        {locked && <Lock className="h-3 w-3" />}
        {ready && <Check className="h-3 w-3" />}
        {reward.status}
      </button>
    </div>
  );
}

