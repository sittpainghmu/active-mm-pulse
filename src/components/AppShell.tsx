import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Home, Trophy, Gift, Crown, User } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/challenges", label: "Challenges", icon: Trophy },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/leaderboard", label: "Ranks", icon: Crown },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function AppShell({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md min-h-screen pb-24 relative">
        {children ?? <Outlet />}
      </div>
      <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-md grid grid-cols-5">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = to === "/" ? path === "/" : path.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-wider"
              >
                <Icon
                  className={`h-5 w-5 transition ${active ? "text-primary" : "text-muted-foreground"}`}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span className={active ? "text-primary font-semibold" : "text-muted-foreground"}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function Screen({ children }: { children: ReactNode }) {
  return <div className="px-5 pt-6 space-y-6">{children}</div>;
}
