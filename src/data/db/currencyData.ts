// Comprehensive currency data for Warcraft Rumble
// Cross-referenced from warcraftrumble.gg, method.gg, and noff.gg

import { Currency } from '../../types';

// Extended Currency interface for the currency page
interface ExtendedCurrency extends Currency {
  usages: string[];
  obtainMethods: string[];
  maxAmount: number;
  icon: string;
  rarity: string;
  category: string;
  detailedDescription: string;
  farmingTips: string[];
  conversionRate?: {
    currency: string;
    rate: number;
  };
  tips: string[];
}

const currencyData: ExtendedCurrency[] = [
  {
    id: "gold",
    name: "Gold",
    icon: "gold.png",
    description: "The primary currency used for most purchases and upgrades in Warcraft Rumble.",
    detailedDescription: "Gold is the most common currency in Warcraft Rumble, used for purchasing minis, upgrading units, and buying various items in the shop. It can be earned through battles, quests, and achievements.",
    obtainedFrom: [
      "Completing campaign missions",
      "Winning PvP battles",
      "Opening chests",
      "Daily and weekly quests",
      "Achievements"
    ],
    usedFor: [
      "Upgrading minis",
      "Purchasing items in the shop",
      "Refreshing the shop",
      "Buying talent points"
    ],
    farmingTips: [
      "Focus on completing all daily quests",
      "Participate in events for bonus gold",
      "Complete achievements for large gold rewards",
      "Sell excess mini fragments"
    ],
    image: "/assets/images/currency/gold.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 9999999,
    rarity: "Common",
    category: "Primary",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "gems",
    name: "Gems",
    icon: "gems.png",
    description: "Premium currency used for special purchases and speeding up processes.",
    detailedDescription: "Gems are a premium currency that can be purchased with real money or earned through special events. They are used for premium purchases, speeding up timers, and buying exclusive items.",
    obtainedFrom: [
      "In-app purchases",
      "Special events",
      "Achievement rewards",
      "Season rewards"
    ],
    usedFor: [
      "Purchasing premium items",
      "Speeding up timers",
      "Buying exclusive minis",
      "Refreshing the shop"
    ],
    farmingTips: [
      "Complete all achievements",
      "Participate in special events",
      "Reach higher ranks in PvP for season rewards",
      "Look for special offers that include gems"
    ],
    image: "/assets/images/currency/gems.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 999999,
    rarity: "Rare",
    category: "Premium",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "arcane-dust",
    name: "Arcane Dust",
    icon: "arcane_dust.png",
    description: "Specialized currency used for crafting and enhancing talents.",
    detailedDescription: "Arcane Dust is a specialized currency primarily used for enhancing talents and crafting special items. It can be obtained by disenchanting unwanted minis or as rewards from specific game modes.",
    obtainedFrom: [
      "Disenchanting minis",
      "Raid rewards",
      "Special events",
      "Weekly challenges"
    ],
    usedFor: [
      "Enhancing talents",
      "Crafting special items",
      "Upgrading legendary minis",
      "Purchasing special abilities"
    ],
    farmingTips: [
      "Disenchant duplicate minis",
      "Complete weekly challenges",
      "Participate in raids",
      "Look for events that reward Arcane Dust"
    ],
    image: "/assets/images/currency/arcane_dust.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 99999,
    rarity: "Epic",
    category: "Crafting",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "sigils",
    name: "Sigils",
    icon: "sigils.png",
    description: "Faction-specific currency used to unlock and upgrade faction minis.",
    detailedDescription: "Sigils are faction-specific currencies that are used to unlock and upgrade minis from specific factions. Different types of sigils exist for Alliance, Horde, Blackrock, and other factions.",
    obtainedFrom: [
      "Faction-specific quests",
      "Campaign missions",
      "Faction chests",
      "Guild contributions"
    ],
    usedFor: [
      "Unlocking faction minis",
      "Upgrading faction minis",
      "Purchasing faction-specific items",
      "Accessing faction content"
    ],
    farmingTips: [
      "Focus on faction-specific quests",
      "Join a guild that focuses on your preferred faction",
      "Complete campaign missions for the specific faction",
      "Participate in faction events"
    ],
    image: "/assets/images/currency/sigils.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 5000,
    rarity: "Rare",
    category: "Faction",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "valor",
    name: "Valor",
    icon: "valor.png",
    description: "PvP currency earned through competitive play and used for exclusive rewards.",
    detailedDescription: "Valor is a currency earned exclusively through PvP battles and competitive play. It is used to purchase exclusive PvP rewards, cosmetics, and special minis that cannot be obtained through other means.",
    obtainedFrom: [
      "Winning PvP battles",
      "Ranking up in competitive seasons",
      "PvP events",
      "Tournament participation"
    ],
    usedFor: [
      "Purchasing PvP-exclusive minis",
      "Buying PvP cosmetics",
      "Unlocking special PvP talents",
      "Entering special PvP tournaments"
    ],
    farmingTips: [
      "Focus on improving your PvP skills",
      "Participate in all PvP events",
      "Join a competitive guild",
      "Study meta strategies and counter-builds"
    ],
    image: "/assets/images/currency/valor.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 5000,
    rarity: "Epic",
    category: "PvP",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "energy",
    name: "Energy",
    icon: "energy.png",
    description: "Regenerating resource used to play campaign missions and special events.",
    detailedDescription: "Energy is a regenerating resource that limits how many campaign missions and special events you can play in a given time period. It regenerates over time, and can also be refilled using gems.",
    obtainedFrom: [
      "Natural regeneration over time",
      "Level-up rewards",
      "Special events",
      "Daily login bonuses"
    ],
    usedFor: [
      "Playing campaign missions",
      "Participating in special events",
      "Accessing daily challenges",
      "Entering raid battles"
    ],
    farmingTips: [
      "Plan your play sessions around energy regeneration",
      "Use energy efficiently on high-reward missions",
      "Save energy refills for special events",
      "Don't let energy cap out and waste regeneration"
    ],
    image: "/assets/images/currency/energy.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 5000,
    rarity: "Common",
    category: "Resource",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  },
  {
    id: "experience",
    name: "Experience",
    icon: "experience.png",
    description: "Points earned through gameplay that increase your account level.",
    detailedDescription: "Experience points (XP) are earned through various gameplay activities and contribute to increasing your account level. Higher account levels unlock new features, game modes, and rewards.",
    obtainedFrom: [
      "Completing missions",
      "Winning battles",
      "Daily quests",
      "Achievements"
    ],
    usedFor: [
      "Increasing account level",
      "Unlocking new features",
      "Accessing advanced game modes",
      "Earning level-up rewards"
    ],
    farmingTips: [
      "Complete all available quests daily",
      "Focus on achievements that award bonus XP",
      "Participate in XP boost events",
      "Play regularly to maximize XP gain"
    ],
    image: "/assets/images/currency/experience.png",
    usages: [
      "Purchase items in the shop",
      "Upgrade minis",
      "Unlock new talents",
      "Buy special offers"
    ],
    obtainMethods: [
      "Complete daily quests",
      "Win PvP battles",
      "Open chests",
      "Complete campaign missions"
    ],
    maxAmount: 5000,
    rarity: "Common",
    category: "Progression",
    tips: [
      "Save for special events",
      "Prioritize upgrading your main army",
      "Don't waste on cosmetics early game",
      "Complete all daily quests for maximum gain"
    ]
  }
];

export default currencyData;
export type { ExtendedCurrency };
