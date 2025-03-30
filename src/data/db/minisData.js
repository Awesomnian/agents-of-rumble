// Comprehensive mini data for Warcraft Rumble
// Cross-referenced from warcraftrumble.gg, method.gg, and noff.gg

export const minisData = [
  // Alliance Family
  {
    id: "footman",
    name: "Footman",
    family: "Alliance",
    rarity: "Common",
    role: "Tank",
    cost: 2,
    baseHealth: 450,
    baseDamage: 40,
    attackSpeed: 1.2,
    movementSpeed: "Medium",
    range: "Melee",
    healthGrowth: 0.1,
    damageGrowth: 0.08,
    description: "Sturdy melee unit that can take a beating.",
    abilities: [
      {
        name: "Shield Block",
        description: "Reduces incoming damage"
      }
    ],
    talents: [
      {
        name: "Shield Wall",
        description: "Increases damage reduction from Shield Block",
        unlockLevel: 5,
        pickRate: 65,
        image: "/assets/images/talents/shield_wall.png"
      },
      {
        name: "Counter Attack",
        description: "Has a chance to counter-attack when hit",
        unlockLevel: 10,
        pickRate: 35,
        image: "/assets/images/talents/counter_attack.png"
      }
    ],
    strategyTips: [
      "Use Footmen as frontline units to protect your ranged attackers",
      "Effective against melee units due to Shield Block ability",
      "Deploy in groups for maximum effectiveness"
    ],
    strongAgainst: ["Grunt", "Ghoul", "Troll Headhunter"],
    weakAgainst: ["Abomination", "Knight", "Infernal"],
    synergies: ["Archer", "Jaina Proudmoore", "Priest"],
    image: "/assets/images/minis/footman.png"
  },
  {
    id: "archer",
    name: "Archer",
    family: "Alliance",
    rarity: "Common",
    role: "Ranged",
    cost: 3,
    baseHealth: 280,
    baseDamage: 60,
    attackSpeed: 1.5,
    movementSpeed: "Medium",
    range: "Long",
    healthGrowth: 0.08,
    damageGrowth: 0.1,
    description: "Ranged unit that can target both ground and air units.",
    abilities: [
      {
        name: "Rapid Fire",
        description: "Occasionally fires arrows more quickly"
      }
    ],
    talents: [
      {
        name: "Fire Arrows",
        description: "Arrows have a chance to apply Burn effect",
        unlockLevel: 5,
        pickRate: 55,
        image: "/assets/images/talents/fire_arrows.png"
      },
      {
        name: "Longshot",
        description: "Increases attack range",
        unlockLevel: 10,
        pickRate: 45,
        image: "/assets/images/talents/longshot.png"
      }
    ],
    strategyTips: [
      "Position behind tanks to maximize damage output",
      "Effective against flying units",
      "Use Fire Arrows talent against high-health enemies"
    ],
    strongAgainst: ["Gargoyle", "Frost Wyrm", "Bat Rider"],
    weakAgainst: ["Knight", "Troll Headhunter", "Assassin"],
    synergies: ["Footman", "Priest", "Paladin"],
    image: "/assets/images/minis/archer.png"
  },
  {
    id: "jaina",
    name: "Jaina Proudmoore",
    family: "Alliance",
    rarity: "Epic",
    role: "Leader",
    cost: 5,
    baseHealth: 750,
    baseDamage: 90,
    attackSpeed: 1.8,
    movementSpeed: "Slow",
    range: "Long",
    healthGrowth: 0.12,
    damageGrowth: 0.15,
    description: "Powerful mage who controls the battlefield with frost magic.",
    abilities: [
      {
        name: "Blizzard",
        description: "Deals area damage and slows enemies"
      }
    ],
    talents: [
      {
        name: "Ice Barrier",
        description: "Creates a shield that absorbs damage",
        unlockLevel: 10,
        pickRate: 40,
        image: "/assets/images/talents/ice_barrier.png"
      },
      {
        name: "Improved Blizzard",
        description: "Increases Blizzard damage and slow effect",
        unlockLevel: 15,
        pickRate: 60,
        image: "/assets/images/talents/improved_blizzard.png"
      }
    ],
    strategyTips: [
      "Use Blizzard to control choke points and slow enemy advances",
      "Position behind tanks to maximize survival",
      "Effective against grouped enemies"
    ],
    strongAgainst: ["Grunt", "Ghoul", "Troll Headhunter"],
    weakAgainst: ["Sylvanas", "Assassin", "Thrall"],
    synergies: ["Footman", "Knight", "Priest"],
    image: "/assets/images/minis/jaina.png"
  },
  {
    id: "abomination",
    name: "Abomination",
    family: "Undead",
    rarity: "Epic",
    role: "Tank",
    cost: 6,
    baseHealth: 1100,
    baseDamage: 90,
    attackSpeed: 0.8,
    movementSpeed: "Slow",
    range: "Melee",
    healthGrowth: 0.15,
    damageGrowth: 0.1,
    description: "Massive undead monstrosity with high health and cleave attacks.",
    abilities: [
      {
        name: "Meat Hook",
        description: "Pulls a distant enemy closer"
      },
      {
        name: "Cleave",
        description: "Attacks damage multiple enemies"
      }
    ],
    talents: [
      {
        name: "Putrid Bile",
        description: "Deals poison damage to nearby enemies",
        unlockLevel: 10,
        pickRate: 45,
        image: "/assets/images/talents/putrid_bile.png"
      },
      {
        name: "Improved Hook",
        description: "Increases hook range and stuns hooked targets",
        unlockLevel: 15,
        pickRate: 55,
        image: "/assets/images/talents/improved_hook.png"
      }
    ],
    strategyTips: [
      "Use Meat Hook to pull high-value targets into your army",
      "Effective against groups of low-health units due to Cleave",
      "Deploy with ranged support for maximum effectiveness"
    ],
    strongAgainst: ["Footman", "Archer", "Grunt"],
    weakAgainst: ["Knight", "Infernal", "Mountain Giant"],
    synergies: ["Necromancer", "Lich", "Sylvanas"],
    image: "/assets/images/minis/abomination.png"
  },
  {
    id: "witch_doctor",
    name: "Witch Doctor",
    family: "Horde",
    rarity: "Rare",
    role: "Ranged",
    cost: 4,
    baseHealth: 320,
    baseDamage: 65,
    attackSpeed: 1.3,
    movementSpeed: "Medium",
    range: "Long",
    healthGrowth: 0.09,
    damageGrowth: 0.11,
    description: "Troll healer who can curse enemies with powerful hexes.",
    abilities: [
      {
        name: "Healing Ward",
        description: "Places a totem that heals nearby allies"
      },
      {
        name: "Poison Dart",
        description: "Attacks apply poison that deals damage over time"
      }
    ],
    talents: [
      {
        name: "Serpent Ward",
        description: "Summons a ward that attacks enemies",
        unlockLevel: 8,
        pickRate: 40,
        image: "/assets/images/talents/serpent_ward.png"
      },
      {
        name: "Voodoo Ritual",
        description: "Increases poison damage and duration",
        unlockLevel: 12,
        pickRate: 60,
        image: "/assets/images/talents/voodoo_ritual.png"
      }
    ],
    strategyTips: [
      "Place Healing Ward in a safe position behind your frontline",
      "Effective against high-health units due to poison damage over time",
      "Use Serpent Ward to create additional pressure points"
    ],
    strongAgainst: ["Knight", "Mountain Giant", "Abomination"],
    weakAgainst: ["Archer", "Assassin", "Frost Mage"],
    synergies: ["Grunt", "Tauren", "Thrall"],
    image: "/assets/images/minis/witch_doctor.png"
  }
];

// Add default export
export default minisData;