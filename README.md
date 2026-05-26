# ActiveMM — Move More, Earn More 🇲🇲

> Myanmar's first wellness rewards app. Earn AP points for steps, sleep, and landmark challenges across Yangon.

![ActiveMM Banner](https://img.shields.io/badge/Status-MVP-brightgreen) ![React](https://img.shields.io/badge/React-TanStack-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8) ![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-ff69b4)

---

## 📱 What is ActiveMM?

ActiveMM is a mobile-first behavioral wellness app built for the Myanmar market. Users earn **Active Points (AP)** by completing daily fitness goals and localized challenges at Yangon's iconic landmarks — then redeem those points for real rewards from local brand partners.

Think **Strava meets Grab Rewards**, built for Yangon.

---

## ✨ Features

- **Dashboard** — Track daily steps, calories, sleep, and Flux Score at a glance
- **Membership Tiers** — Progress from Free → Gold → Platinum Elite
- **Localized Challenges** — Walk Shwedagon, run Kandawgyi, cycle Inya Lake
- **Rewards Marketplace** — Redeem AP for MAI Airways miles, Gong Cha bubble tea, gym passes, and more
- **Leaderboard** — Compete with the ActiveMM community
- **Profile** — Manage your account and tier status

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TanStack Router |
| Styling | Tailwind CSS + shadcn/ui |
| Build tool | Vite |
| Package manager | Bun |
| Backend (planned) | Supabase |
| Payments (planned) | KBZPay / Wave Money |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── AppShell.tsx        # Layout wrapper + bottom nav
│   ├── TierBadge.tsx       # Gold / Platinum Elite badge
│   └── ui/                 # shadcn/ui component library
├── data/
│   └── mock.ts             # Dummy data (user, challenges, rewards)
├── routes/
│   ├── index.tsx           # Home Dashboard
│   ├── challenges.tsx      # Challenges screen
│   ├── rewards.tsx         # Rewards Marketplace
│   ├── leaderboard.tsx     # Leaderboard
│   └── profile.tsx         # Profile screen
└── styles.css              # Global styles + design tokens
```

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed on your machine

### Installation

```bash
# Clone the repo
git clone https://github.com/sittpainghmu/active-mm-pulse.git
cd active-mm-pulse

# Install dependencies
bun install

# Start dev server
bun dev
```

The app will be running at `http://localhost:5173`

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Primary accent | `#00ff88` (neon green) |
| Card surface | `#1a1a1a` |
| Gold tier | `#f5c518` |
| Font | System / Inter |

---

## 🗺 Roadmap

- [x] MVP UI — all 5 screens
- [x] Dummy data layer (`mock.ts`)
- [ ] Supabase auth (email login / signup)
- [ ] Live database integration
- [ ] Apple Health / Google Fit step sync
- [ ] KBZPay / Wave Money payment integration
- [ ] Push notifications for challenges
- [ ] Corporate wellness dashboard (B2B)

---

## 🤝 Partners (Planned)

| Partner | Reward |
|---|---|
| MAI Airways | Flight miles vouchers |
| Gong Cha Yangon | Free bubble tea |
| Balance Fitness | Gym passes |
| Zawana Badminton | Court bookings |

---

## 👤 Author

**Sitt Paing Hmu**  
Founder, ActiveMM  
[GitHub](https://github.com/sittpainghmu)

---

## 📄 License

This project is private and proprietary. All rights reserved.
