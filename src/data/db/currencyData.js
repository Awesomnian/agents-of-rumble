// Comprehensive currency data for Warcraft Rumble
// Cross-referenced from warcraftrumble.gg, method.gg, and noff.gg

const currencyData = [
  {
    id: "gold",
    name: "Gold",
    icon: "gold_icon.png",
    description: "The primary currency used to upgrade minis and purchase items in the shop.",
    detailedDescription: "Gold is the most common currency in Warcraft Rumble, earned through completing campaign levels, daily quests, and opening chests. It's primarily used to upgrade your minis to higher levels, increasing their stats and combat effectiveness. Gold can also be used to purchase certain items in the shop.",
    sources: [
      "Campaign level completion rewards",
      "Daily and weekly quests",
      "Opening chests (Victory, Daily, and Weekly)",
      "Guild rewards",
      "Season rewards",
      "Dungeon runs"
    ],
    uses: [
      "Upgrading minis to higher levels",
      "Purchasing specific items in the shop",
      "Refreshing the shop inventory"
    ],
    farmingTips: [
      "Focus on completing all daily quests",
      "Join an active guild for additional rewards",
      "Replay campaign levels with gold rewards",
      "Complete dungeon runs for bonus gold",
      "Participate in events that offer gold rewards"
    ]
  },
  {
    id: "arclight",
    name: "Arclight",
    icon: "arclight_icon.png",
    description: "Premium currency used for purchasing special offers and accelerating progress.",
    detailedDescription: "Arclight is the premium currency in Warcraft Rumble. While it can be earned in small amounts through gameplay, it's primarily obtained through real-money purchases. Arclight offers the most flexibility in the game's economy, allowing players to purchase special bundles, refresh shop inventories, and acquire rare minis directly.",
    sources: [
      "Real-money purchases",
      "Season rewards (small amounts)",
      "Special events and achievements",
      "First-time campaign completion bonuses",
      "Milestone rewards"
    ],
    uses: [
      "Purchasing special offers in the shop",
      "Buying mini bundles",
      "Refreshing shop inventory",
      "Purchasing cosmetic items",
      "Buying gold when needed"
    ],
    farmingTips: [
      "Complete all achievements that reward Arclight",
      "Reach higher ranks in PvP for better season rewards",
      "Look for special events that offer free Arclight",
      "Complete the campaign to earn first-time completion bonuses",
      "Check daily login rewards for occasional Arclight"
    ]
  },
  {
    id: "sigils",
    name: "Sigils",
    icon: "sigils_icon.png",
    description: "Specialized currency used to unlock and upgrade specific minis.",
    detailedDescription: "Sigils are specialized currency items tied to specific minis. Each mini has its own type of sigil, which is required to unlock that mini and upgrade it beyond certain levels. Collecting enough sigils for a mini you don't yet own will unlock it, while additional sigils allow for further upgrades.",
    sources: [
      "Mini-specific chests",
      "Campaign level rewards",
      "PvP rewards",
      "Guild donations",
      "Shop purchases",
      "Season rewards"
    ],
    uses: [
      "Unlocking new minis",
      "Upgrading minis beyond certain levels",
      "Converting excess sigils to other resources"
    ],
    farmingTips: [
      "Focus on campaign levels that drop sigils for minis you want",
      "Request specific sigils from your guild",
      "Check the shop daily for sigils of desired minis",
      "Participate in events that offer sigil rewards",
      "Complete PvP matches for random sigil rewards"
    ]
  },
  {
    id: "valor",
    name: "Valor",
    icon: "valor_icon.png",
    description: "PvP currency earned through competitive play and used for exclusive rewards.",
    detailedDescription: "Valor is earned exclusively through PvP activities in Warcraft Rumble. It serves as a measure of your competitive accomplishments and can be exchanged for exclusive rewards that aren't available through other means. Valor resets at the end of each season, so it's important to spend it before the season ends.",
    sources: [
      "Winning PvP matches",
      "Climbing the PvP ranks",
      "Season milestone rewards",
      "PvP events and tournaments"
    ],
    uses: [
      "Purchasing exclusive minis in the Valor shop",
      "Buying cosmetic items",
      "Acquiring rare mini sigils",
      "Purchasing special PvP chests"
    ],
    farmingTips: [
      "Focus on maintaining a high win rate in PvP",
      "Reach higher ranks for better Valor rewards",
      "Complete all PvP-related quests",
      "Participate in special PvP events",
      "Use your strongest army composition for PvP"
    ]
  },
  {
    id: "energy",
    name: "Energy",
    icon: "energy_icon.png",
    description: "Regenerating resource that limits how many activities you can do in a session.",
    detailedDescription: "Energy is a time-gated resource that limits how many activities you can perform in Warcraft Rumble. It regenerates over time, with a maximum cap that increases as you level up your account. Different activities consume varying amounts of energy, with more challenging content typically requiring more energy to attempt.",
    sources: [
      "Natural regeneration over time (1 energy per 5 minutes)",
      "Level-up rewards",
      "Daily login bonuses",
      "Special events",
      "Shop purchases"
    ],
    uses: [
      "Playing campaign levels",
      "Attempting dungeon runs",
      "Participating in certain events",
      "Replaying content for rewards"
    ],
    farmingTips: [
      "Plan your play sessions around energy regeneration",
      "Use energy efficiently by attempting harder content with better rewards",
      "Don't let energy cap out and waste natural regeneration",
      "Save energy potions for special events with better rewards",
      "Level up your account to increase maximum energy capacity"
    ]
  },
  {
    id: "experience",
    name: "Experience (XP)",
    icon: "experience_icon.png",
    description: "Points that contribute to player level progression and unlock new features.",
    detailedDescription: "Experience points (XP) measure your overall progression in Warcraft Rumble. As you earn XP and level up your account, you unlock new features, increase your energy cap, and gain access to more challenging content with better rewards. XP is earned through almost all activities in the game.",
    sources: [
      "Completing campaign levels",
      "PvP matches",
      "Daily and weekly quests",
      "First-time completion bonuses",
      "Dungeon runs",
      "Guild activities"
    ],
    uses: [
      "Leveling up your account",
      "Unlocking new game features",
      "Increasing energy cap",
      "Accessing higher-tier content"
    ],
    farmingTips: [
      "Focus on first-time completion bonuses for maximum XP",
      "Complete all daily and weekly quests",
      "Participate in all available game modes",
      "Join an active guild for additional XP opportunities",
      "Look for XP boost events"
    ]
  }
];
