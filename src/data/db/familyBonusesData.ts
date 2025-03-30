// Comprehensive family bonuses data for Warcraft Rumble
// Cross-referenced from warcraftrumble.gg, method.gg, and noff.gg

import { FamilyBonus } from '../../types';

interface ExtendedFamilyBonus extends FamilyBonus {
  name: string;
  color: string;
  icon: string;
}

const familyBonusesData: ExtendedFamilyBonus[] = [
  {
    family: "alliance",
    name: "Alliance",
    bonuses: [
      { unitCount: 3, description: "+10% Health to all Alliance units", effect: "health_boost_10" },
      { unitCount: 5, description: "+20% Health to all Alliance units", effect: "health_boost_20" }
    ],
    icon: "alliance_icon.png",
    color: "#0074e0",
    image: "/assets/images/families/alliance.png"
  },
  {
    family: "horde",
    name: "Horde",
    bonuses: [
      { unitCount: 3, description: "+10% Damage to all Horde units", effect: "damage_boost_10" },
      { unitCount: 5, description: "+20% Damage to all Horde units", effect: "damage_boost_20" }
    ],
    icon: "horde_icon.png",
    color: "#b30000",
    image: "/assets/images/families/horde.png"
  },
  {
    family: "undead",
    name: "Undead",
    bonuses: [
      { unitCount: 3, description: "+15% Attack Speed to all Undead units", effect: "attack_speed_15" },
      { unitCount: 5, description: "+30% Attack Speed to all Undead units", effect: "attack_speed_30" }
    ],
    icon: "undead_icon.png",
    color: "#9c27b0",
    image: "/assets/images/families/undead.png"
  },
  {
    family: "blackrock",
    name: "Blackrock",
    bonuses: [
      { unitCount: 3, description: "+15% Area Damage to all Blackrock units", effect: "area_damage_15" },
      { unitCount: 5, description: "+30% Area Damage to all Blackrock units", effect: "area_damage_30" }
    ],
    icon: "blackrock_icon.png",
    color: "#ff5722",
    image: "/assets/images/families/blackrock.png"
  },
  {
    family: "beast",
    name: "Beast",
    bonuses: [
      { unitCount: 3, description: "+15% Movement Speed to all Beast units", effect: "movement_speed_15" },
      { unitCount: 5, description: "+30% Movement Speed to all Beast units", effect: "movement_speed_30" }
    ],
    icon: "beast_icon.png",
    color: "#8BC34A",
    image: "/assets/images/families/beast.png"
  },
  {
    family: "cenarion",
    name: "Cenarion",
    bonuses: [
      { unitCount: 3, description: "+15% Healing to all Cenarion units", effect: "healing_boost_15" },
      { unitCount: 5, description: "+30% Healing to all Cenarion units", effect: "healing_boost_30" }
    ],
    icon: "cenarion_icon.png",
    color: "#00bcd4",
    image: "/assets/images/families/cenarion.png"
  }
];

export default familyBonusesData;
