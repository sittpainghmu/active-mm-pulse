export type Tier = "Free" | "Gold" | "Platinum Elite";

export const user = {
  name: "Min Khant",
  tier: "Gold" as Tier,
  points: 2450,
  nextTierAt: 3500,
  steps: 12400,
  stepsGoal: 15000,
  calories: 650,
  sleep: "7h 20m",
  fluxScore: 82,
};

export type Challenge = {
  id: string;
  name: string;
  landmark: string;
  type: "walk" | "run" | "cycle";
  intensity: "Endurance" | "High-intensity" | "Heritage Trail";
  points: number;
  expiresIn: string;
  participants: number;
  progress?: number;
  goal?: number;
  active?: boolean;
};

export const featuredChallenge: Challenge = {
  id: "c0",
  name: "Shwedagon Pagoda Walk",
  landmark: "Shwedagon Pagoda",
  type: "walk",
  intensity: "Heritage Trail",
  points: 500,
  expiresIn: "3 days left",
  participants: 1248,
  progress: 32400,
  goal: 50000,
  active: true,
};

export const challenges: Challenge[] = [
  {
    id: "c1",
    name: "Kandawgyi Lake Morning Run",
    landmark: "Kandawgyi Lake",
    type: "run",
    intensity: "Endurance",
    points: 350,
    expiresIn: "5 days left",
    participants: 642,
  },
  {
    id: "c2",
    name: "Inya Lake Cycle Sprint",
    landmark: "Inya Lake",
    type: "cycle",
    intensity: "High-intensity",
    points: 420,
    expiresIn: "2 days left",
    participants: 318,
  },
  {
    id: "c3",
    name: "Bogyoke Heritage Walk",
    landmark: "Bogyoke Market",
    type: "walk",
    intensity: "Heritage Trail",
    points: 280,
    expiresIn: "1 week left",
    participants: 901,
  },
];

export type Reward = {
  id: string;
  partner: string;
  description: string;
  cost: number;
  category: "Lifestyle" | "Travel" | "Fitness";
  status: "Redeem" | "Locked" | "Ready";
  logo: string;
};

export const rewards: Reward[] = [
  {
    id: "r1",
    partner: "MAI Airways",
    description: "500 Flight Miles Voucher",
    cost: 2000,
    category: "Travel",
    status: "Redeem",
    logo: "✈️",
  },
  {
    id: "r2",
    partner: "Gong Cha Yangon",
    description: "Free Brown Sugar Milk Tea",
    cost: 350,
    category: "Lifestyle",
    status: "Ready",
    logo: "🧋",
  },
  {
    id: "r3",
    partner: "Balance Fitness",
    description: "1 Week Gym Pass",
    cost: 1200,
    category: "Fitness",
    status: "Redeem",
    logo: "🏋️",
  },
  {
    id: "r4",
    partner: "Zawana Badminton",
    description: "2 Hour Court Booking",
    cost: 3000,
    category: "Fitness",
    status: "Locked",
    logo: "🏸",
  },
];

export const leaderboard = [
  { name: "Aung Myo", points: 5820, tier: "Platinum Elite" },
  { name: "Thiri Lwin", points: 4210, tier: "Gold" },
  { name: "Min Khant", points: 2450, tier: "Gold", you: true },
  { name: "Hnin Wai", points: 2105, tier: "Gold" },
  { name: "Kyaw Zin", points: 1840, tier: "Free" },
  { name: "Ei Phyu", points: 1620, tier: "Free" },
];
