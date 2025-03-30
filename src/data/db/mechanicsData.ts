// Comprehensive mechanics data for Warcraft Rumble
// Cross-referenced from warcraftrumble.gg, method.gg, and noff.gg

import { Mechanic } from '../../types';

interface ExtendedMechanic extends Mechanic {
  icon: string;
  mechanics: string[];
  counters: string[];
  synergies: string[];
  units: {
    id: string;
    name: string;
    poisonAbility?: string;
    burnAbility?: string;
    frostAbility?: string;
    stunAbility?: string;
    knockbackAbility?: string;
    icon: string;
  }[];
}

const mechanicsData: ExtendedMechanic[] = [
  {
    id: "poison",
    name: "Poison",
    icon: "poison_icon.png",
    description: "Poison deals damage over time to affected units, reducing their health gradually until the effect expires or the unit dies.",
    details: "Poison is a powerful damage-over-time effect that can be applied by various units and abilities. When a unit is poisoned, it takes damage every second for the duration of the effect. Multiple poison effects from different sources can stack, making poison particularly effective against high-health targets.",
    mechanics: [
      "Deals 5% of the target's maximum health as damage per second",
      "Standard duration is 5 seconds (25% total health damage)",
      "Can be applied by both attacks and abilities",
      "Visual indicator: Green bubbles appear above poisoned units",
      "Can be cleansed by certain abilities"
    ],
    counters: [
      "Units with the 'Resistant' trait take reduced poison damage",
      "Healing effects can offset poison damage",
      "Cleanse abilities can remove poison effects"
    ],
    synergies: [
      "Pairs well with slowing effects to maximize damage duration",
      "Effective against high-health units like Tanks",
      "Good for preventing enemy healing"
    ],
    units: [
      {
        id: "witch-doctor",
        name: "Witch Doctor",
        poisonAbility: "Basic attacks apply poison",
        icon: "witch_doctor_icon.png"
      },
      {
        id: "venomancer",
        name: "Venomancer",
        poisonAbility: "Poison Cloud ability applies poison to all enemies in area",
        icon: "venomancer_icon.png"
      },
      {
        id: "plague-farmer",
        name: "Plague Farmer",
        poisonAbility: "Death releases poison cloud",
        icon: "plague_farmer_icon.png"
      }
    ],
    examples: [
      "Witch Doctor's poison darts",
      "Venomancer's poison cloud",
      "Plague Farmer's death effect"
    ],
    image: "/assets/images/mechanics/poison.png"
  },
  {
    id: "burn",
    name: "Burn",
    icon: "burn_icon.png",
    description: "Burn deals damage over time and reduces healing received by affected units.",
    details: "Burn is a damage-over-time effect that not only deals damage but also reduces the effectiveness of healing on the affected unit. This makes it particularly effective against units that rely on healing to sustain themselves in battle.",
    mechanics: [
      "Deals 3% of the target's maximum health as damage per second",
      "Standard duration is 4 seconds (12% total health damage)",
      "Reduces healing received by 50% while active",
      "Visual indicator: Orange flames appear above burned units",
      "Cannot be cleansed by most abilities"
    ],
    counters: [
      "Units with the 'Fire Resistant' trait take reduced burn damage",
      "Increased healing can partially offset the healing reduction",
      "Water-based abilities can sometimes extinguish burn effects"
    ],
    synergies: [
      "Effective against healing-focused strategies",
      "Pairs well with direct damage to finish off weakened units",
      "Good for area denial when applied in zones"
    ],
    units: [
      {
        id: "fire-mage",
        name: "Fire Mage",
        burnAbility: "Fireball ability applies burn",
        icon: "fire_mage_icon.png"
      },
      {
        id: "infernal",
        name: "Infernal",
        burnAbility: "Aura applies burn to nearby enemies",
        icon: "infernal_icon.png"
      },
      {
        id: "flamecaller",
        name: "Flamecaller",
        burnAbility: "Basic attacks have a chance to apply burn",
        icon: "flamecaller_icon.png"
      }
    ],
    examples: [
      "Fire Mage's fireball",
      "Infernal's burning aura",
      "Flamecaller's attacks"
    ],
    image: "/assets/images/mechanics/burn.png"
  },
  {
    id: "frost",
    name: "Frost",
    icon: "frost_icon.png",
    description: "Frost slows affected units' movement and attack speed, making them less effective in combat.",
    details: "Frost effects reduce both movement and attack speed of affected units, significantly hampering their combat effectiveness. Slowed units are easier to kite and take longer to deal their damage, making frost effects particularly useful for controlling the battlefield.",
    mechanics: [
      "Reduces movement speed by 30-50% (varies by source)",
      "Reduces attack speed by 20-40% (varies by source)",
      "Standard duration is 3-5 seconds",
      "Visual indicator: Blue snowflakes appear above frosted units",
      "Can be cleansed by certain abilities"
    ],
    counters: [
      "Units with the 'Frost Resistant' trait are affected less by frost",
      "Speed boost abilities can partially offset slowing effects",
      "Fire-based abilities can sometimes remove frost effects"
    ],
    synergies: [
      "Excellent for kiting melee units",
      "Pairs well with area damage to hit slowed groups",
      "Effective for protecting vulnerable backline units"
    ],
    units: [
      {
        id: "frost-mage",
        name: "Frost Mage",
        frostAbility: "Frostbolt ability applies frost",
        icon: "frost_mage_icon.png"
      },
      {
        id: "blizzard",
        name: "Blizzard",
        frostAbility: "Area of effect frost damage and slow",
        icon: "blizzard_icon.png"
      },
      {
        id: "ice-elemental",
        name: "Ice Elemental",
        frostAbility: "Aura slows nearby enemies",
        icon: "ice_elemental_icon.png"
      }
    ],
    examples: [
      "Frost Mage's frostbolt",
      "Blizzard spell",
      "Ice Elemental's aura"
    ],
    image: "/assets/images/mechanics/frost.png"
  },
  {
    id: "stun",
    name: "Stun",
    icon: "stun_icon.png",
    description: "Stun completely immobilizes units, preventing them from moving or attacking for the duration.",
    details: "Stun is one of the most powerful control effects in the game, completely preventing affected units from taking any actions. Stunned units cannot move, attack, or use abilities, making them extremely vulnerable. Strategic use of stuns can completely shut down key enemy units.",
    mechanics: [
      "Prevents all actions (movement, attacks, abilities)",
      "Duration typically ranges from 1-3 seconds",
      "Visual indicator: Stars circle above stunned units",
      "Cannot be cleansed by most abilities",
      "Diminishing returns: Subsequent stuns on the same target have reduced duration"
    ],
    counters: [
      "Units with the 'Unstoppable' trait are immune to stuns",
      "Stun resistance can reduce stun duration",
      "Some leader abilities can grant stun immunity"
    ],
    synergies: [
      "Perfect setup for area damage abilities",
      "Excellent for interrupting channeled abilities",
      "Crucial for stopping high-threat units"
    ],
    units: [
      {
        id: "hammer-knight",
        name: "Hammer Knight",
        stunAbility: "Hammer Slam stuns enemies in area",
        icon: "hammer_knight_icon.png"
      },
      {
        id: "tauren-chieftain",
        name: "Tauren Chieftain",
        stunAbility: "War Stomp stuns nearby enemies",
        icon: "tauren_chieftain_icon.png"
      },
      {
        id: "storm-elemental",
        name: "Storm Elemental",
        stunAbility: "Lightning Strike has chance to stun",
        icon: "storm_elemental_icon.png"
      }
    ],
    examples: [
      "Hammer Knight's slam",
      "Tauren Chieftain's war stomp",
      "Storm Elemental's lightning"
    ],
    image: "/assets/images/mechanics/stun.png"
  },
  {
    id: "knockback",
    name: "Knockback",
    icon: "knockback_icon.png",
    description: "Knockback pushes units away, disrupting their positioning and potentially interrupting actions.",
    details: "Knockback effects forcibly move enemy units away from the source, disrupting their positioning and potentially pushing them into disadvantageous positions. Knockback can also interrupt certain abilities and attacks, making it a versatile control tool.",
    mechanics: [
      "Pushes units a set distance (varies by ability)",
      "Can push units into hazards for additional effects",
      "Briefly interrupts actions during the knockback",
      "Visual indicator: Unit visibly flies backward",
      "Cannot affect certain immovable units"
    ],
    counters: [
      "Units with the 'Immovable' trait cannot be knocked back",
      "Heavy units may be knocked back a shorter distance",
      "Some abilities can be used while being knocked back"
    ],
    synergies: [
      "Can push enemies into hazards or AoE effects",
      "Excellent for protecting vulnerable units",
      "Good for disrupting enemy formations"
    ],
    units: [
      {
        id: "swole-troll",
        name: "Swole Troll",
        knockbackAbility: "Trollnado knocks back enemies in area",
        icon: "swole_troll_icon.png"
      },
      {
        id: "gryphon-rider",
        name: "Gryphon Rider",
        knockbackAbility: "Dive Attack knocks back target",
        icon: "gryphon_rider_icon.png"
      },
      {
        id: "shaman",
        name: "Shaman",
        knockbackAbility: "Thunderclap knocks back nearby enemies",
        icon: "shaman_icon.png"
      }
    ],
    examples: [
      "Swole Troll's trollnado",
      "Gryphon Rider's dive attack",
      "Shaman's thunderclap"
    ],
    image: "/assets/images/mechanics/knockback.png"
  }
];

export default mechanicsData;
export type { ExtendedMechanic };
