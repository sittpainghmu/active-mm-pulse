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

export type RewardTier = "Free and above" | "Gold and above" | "Platinum only";

export type Reward = {
  id: string;
  partner: string;
  description: string;
  cost: number;
  category: "Lifestyle" | "Travel" | "Fitness";
  status: "Redeem" | "Locked" | "Ready";
  logo: string;
  tier: RewardTier;
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
    tier: "Free and above",
  },
  {
    id: "r2",
    partner: "Gong Cha Yangon",
    description: "Free Brown Sugar Milk Tea",
    cost: 350,
    category: "Lifestyle",
    status: "Ready",
    logo: "🧋",
    tier: "Free and above",
  },
  {
    id: "r3",
    partner: "Balance Fitness",
    description: "1 Week Gym Pass",
    cost: 1200,
    category: "Fitness",
    status: "Redeem",
    logo: "🏋️",
    tier: "Free and above",
  },
  {
    id: "r4",
    partner: "Zawana Badminton",
    description: "2 Hour Court Booking",
    cost: 3000,
    category: "Fitness",
    status: "Locked",
    logo: "🏸",
    tier: "Free and above",
  },
  {
    id: "r5",
    partner: "PathLab Myanmar",
    description: "Basic Health Screening Package",
    cost: 1500,
    category: "Lifestyle",
    status: "Locked",
    logo: "🩺",
    tier: "Platinum only",
  },
  {
    id: "r6",
    partner: "Pyone Dental",
    description: "Dental Assessment",
    cost: 800,
    category: "Lifestyle",
    status: "Redeem",
    logo: "🦷",
    tier: "Free and above",
  },
  {
    id: "r7",
    partner: "Garmin",
    description: "10% Off Garmin Devices",
    cost: 600,
    category: "Fitness",
    status: "Locked",
    logo: "⌚",
    tier: "Platinum only",
  },
  {
    id: "r8",
    partner: "Samsung Myanmar",
    description: "10% Off Samsung Wearables",
    cost: 600,
    category: "Fitness",
    status: "Redeem",
    logo: "📱",
    tier: "Gold and above",
  },
  {
    id: "r9",
    partner: "Adidas Myanmar",
    description: "10% Off All Adidas Products",
    cost: 500,
    category: "Fitness",
    status: "Redeem",
    logo: "👟",
    tier: "Gold and above",
  },
  {
    id: "r10",
    partner: "U9 Myanmar",
    description: "K1,000 M-Pite San Top Up",
    cost: 200,
    category: "Lifestyle",
    status: "Redeem",
    logo: "📶",
    tier: "Free and above",
  },
  {
    id: "r11",
    partner: "Atom Myanmar",
    description: "K1,000 Airtime Top Up",
    cost: 200,
    category: "Lifestyle",
    status: "Redeem",
    logo: "📡",
    tier: "Free and above",
  },
  {
    id: "r12",
    partner: "OWAY",
    description: "K10,000 Cashback on Booking",
    cost: 1000,
    category: "Travel",
    status: "Redeem",
    logo: "🧳",
    tier: "Free and above",
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
