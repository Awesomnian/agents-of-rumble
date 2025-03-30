// Type definitions for the Agents of Rumble application

// Mini types
export interface Ability {
  name: string;
  description: string;
}

export interface Talent {
  name: string;
  description: string;
  unlockLevel: number;
  pickRate: number;
  image: string;
}

export interface Mini {
  id: string;
  name: string;
  family: string;
  rarity: string;
  role: string;
  cost: number;
  baseHealth: number;
  baseDamage: number;
  attackSpeed: number;
  movementSpeed: string;
  range: string;
  healthGrowth: number;
  damageGrowth: number;
  description: string;
  abilities: Ability[];
  talents: Talent[];
  strategyTips: string[];
  strongAgainst: string[];
  weakAgainst: string[];
  synergies: string[];
  image: string;
}

// Currency types
export interface Currency {
  id: string;
  name: string;
  description: string;
  obtainedFrom: string[];
  usedFor: string[];
  image: string;
}

// Mechanics types
export interface Mechanic {
  id: string;
  name: string;
  description: string;
  details: string;
  examples: string[];
  image?: string;
}

// Family Bonus types
export interface FamilyBonus {
  family: string;
  bonuses: {
    unitCount: number;
    description: string;
    effect: string;
  }[];
  image: string;
}

// Patch Notes types
export interface PatchNote {
  version: string;
  date: string;
  highlights: string[];
  changes: {
    category: string;
    details: string[];
  }[];
}