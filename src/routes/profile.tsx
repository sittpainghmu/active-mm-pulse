import { createFileRoute } from "@tanstack/react-router";
import { Settings, Bell, Wallet, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { AppShell, Screen } from "@/components/AppShell";
import { TierBadge } from "@/components/TierBadge";
import { user } from "@/data/mock";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — ActiveMM" },
      { name: "description", content: "Manage your ActiveMM account, KBZPay wallet and notifications." },
    ],
  }),
  component: ProfilePage,
});

const items = [
  { icon: Wallet, label: "KBZPay Wallet", sub: "Connected" },
  { icon: Bell, label: "Notifications", sub: "On" },
  { icon: Shield, label: "Privacy & Data" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

function ProfilePage() {
  return (
    <AppShell>
      <Screen>
        <h1 className="text-3xl font-bold">Profile</h1>

        <div className="rounded-3xl border border-border bg-surface p-6 text-center">
          <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 border-2 border-primary grid place-items-center text-2xl font-bold text-primary">
            MK
          </div>
          <h2 className="text-xl font-bold mt-3">{user.name}</h2>
          <p className="text-xs text-muted-foreground">Yangon, Myanmar</p>
          <TierBadge tier={user.tier} className="mt-3" />
          <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border">
            <Stat label="Points" value={user.points.toLocaleString()} />
            <Stat label="Steps" value={(user.steps / 1000).toFixed(1) + "K"} />
            <Stat label="Streak" value="14d" />
          </div>
        </div>

        <div className="rounded-2xl bg-surface border border-border overflow-hidden">
          {items.map((it, i) => (
            <button
              key={it.label}
              className={`w-full flex items-center gap-3 p-4 text-left active:bg-surface-elevated transition ${
                i !== items.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="h-9 w-9 rounded-lg bg-surface-elevated grid place-items-center">
                <it.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{it.label}</p>
                {it.sub && <p className="text-[11px] text-muted-foreground">{it.sub}</p>}
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        <button className="w-full rounded-2xl border border-border bg-surface py-4 text-sm font-semibold text-destructive flex items-center justify-center gap-2">
          <LogOut className="h-4 w-4" /> Sign out
        </button>

        <p className="text-center text-[10px] text-muted-foreground">
          ActiveMM v1.0 · All values in MMK · AP = Active Points
        </p>
      </Screen>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-base font-bold text-primary tabular-nums">{value}</p>
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  );
}
