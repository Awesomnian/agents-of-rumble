// Patch Notes Data
// This file contains the latest patch notes for Warcraft Rumble

import { PatchNote } from '../../types';

interface ExtendedPatchNote extends PatchNote {
  id: string;
  title: string;
  description: string;
  majorChanges: {
    title: string;
    description: string;
    image: string;
  }[];
  balanceChanges: {
    unit: string;
    changes: string[];
  }[];
  bugFixes: string[];
}

export const patchNotesData: ExtendedPatchNote[] = [
  {
    id: "12.0.0",
    version: "12.0.0",
    date: "2025-03-17",
    title: "Season 7: Cenarion Family",
    description: "Welcome to Season 7 of Warcraft Rumble! This season introduces the new Cenarion Family of minis, featuring powerful druids and nature-themed units. We've also made significant balance changes to existing minis and fixed several bugs.",
    highlights: [
      "New Cenarion Circle family with 5 new minis",
      "New Moonglade campaign with 15 missions",
      "Talent system revamp with three paths per mini"
    ],
    majorChanges: [
      {
        title: "New Family: Cenarion Circle",
        description: "Introducing the Cenarion Circle family with 5 new minis, including Malfurion Stormrage as a leader. The Cenarion family bonus provides healing over time to all friendly units.",
        image: "/assets/images/patch_notes/cenarion_family.jpg"
      },
      {
        title: "New Campaign: Moonglade",
        description: "Explore the sacred forests of Moonglade in a new 15-mission campaign featuring unique mechanics and challenging boss fights.",
        image: "/assets/images/patch_notes/moonglade_campaign.jpg"
      },
      {
        title: "Talent System Revamp",
        description: "We've redesigned the talent system to provide more meaningful choices. Each mini now has three talent paths with unique synergies and playstyles.",
        image: "/assets/images/patch_notes/talent_revamp.jpg"
      }
    ],
    changes: [
      {
        category: "Balance Changes",
        details: [
          "Jaina Proudmoore: Base damage reduced by 5%, Blizzard cooldown increased from 8 to 10 seconds, New talent: Ice Barrier",
          "Grommash Hellscream: Health increased by 10%, Whirlwind damage increased by 15%, Charge cooldown reduced from 12 to 10 seconds",
          "Abomination: Movement speed increased by 5%, Hook range reduced by 10%, Poison damage increased by 8%",
          "Archmage: Mana cost reduced from 5 to 4, Base damage reduced by 8%, Polymorph duration reduced from 5 to 4 seconds"
        ]
      },
      {
        category: "Bug Fixes",
        details: [
          "Fixed an issue where Frost Nova would sometimes not properly freeze enemies",
          "Fixed a visual glitch with Illidan's metamorphosis animation",
          "Corrected tooltip information for several talents",
          "Fixed a crash that could occur when using certain combinations of abilities simultaneously",
          "Resolved an issue where guild rewards would sometimes not be properly distributed"
        ]
      }
    ],
    balanceChanges: [
      {
        unit: "Jaina Proudmoore",
        changes: [
          "Base damage reduced by 5%",
          "Blizzard cooldown increased from 8 to 10 seconds",
          "New talent: Ice Barrier - Creates a shield that absorbs damage"
        ]
      },
      {
        unit: "Grommash Hellscream",
        changes: [
          "Health increased by 10%",
          "Whirlwind damage increased by 15%",
          "Charge cooldown reduced from 12 to 10 seconds"
        ]
      },
      {
        unit: "Abomination",
        changes: [
          "Movement speed increased by 5%",
          "Hook range reduced by 10%",
          "Poison damage increased by 8%"
        ]
      },
      {
        unit: "Archmage",
        changes: [
          "Mana cost reduced from 5 to 4",
          "Base damage reduced by 8%",
          "Polymorph duration reduced from 5 to 4 seconds"
        ]
      }
    ],
    bugFixes: [
      "Fixed an issue where Frost Nova would sometimes not properly freeze enemies",
      "Fixed a visual glitch with Illidan's metamorphosis animation",
      "Corrected tooltip information for several talents",
      "Fixed a crash that could occur when using certain combinations of abilities simultaneously",
      "Resolved an issue where guild rewards would sometimes not be properly distributed"
    ]
  },
  {
    id: "11.5.0",
    version: "11.5.0",
    date: "2025-02-10",
    title: "Mid-Season Update",
    description: "This mid-season update brings balance changes to several underperforming and overperforming minis, along with quality-of-life improvements and bug fixes.",
    highlights: [
      "New Legendary mini: Chromie with time manipulation abilities",
      "Guild Wars improvements with better matchmaking",
      "Balance adjustments to several minis"
    ],
    majorChanges: [
      {
        title: "New Mini: Chromie",
        description: "Chromie joins the battle as a new Legendary mini with time manipulation abilities, including slowing enemy attacks and rewinding friendly unit cooldowns.",
        image: "/assets/images/patch_notes/chromie.jpg"
      },
      {
        title: "Guild Wars Improvements",
        description: "Guild Wars now feature more strategic map options and improved matchmaking to ensure fair and exciting competitions.",
        image: "/assets/images/patch_notes/guild_wars.jpg"
      }
    ],
    changes: [
      {
        category: "Balance Changes",
        details: [
          "Muradin Bronzebeard: Avatar duration increased from 6 to 8 seconds, Thunderclap radius increased by 15%",
          "Sylvanas Windrunner: Base damage reduced by 7%, Black Arrow cooldown increased from 15 to 18 seconds",
          "Murloc Tidehunter: Health increased by 15%, Spawn rate increased by 10%"
        ]
      },
      {
        category: "Bug Fixes",
        details: [
          "Fixed an issue where certain talents would not properly activate",
          "Resolved a bug causing inconsistent damage from area-of-effect abilities",
          "Fixed visual artifacts on several mini models",
          "Corrected localization errors in multiple languages"
        ]
      }
    ],
    balanceChanges: [
      {
        unit: "Muradin Bronzebeard",
        changes: [
          "Avatar duration increased from 6 to 8 seconds",
          "Thunderclap radius increased by 15%"
        ]
      },
      {
        unit: "Sylvanas Windrunner",
        changes: [
          "Base damage reduced by 7%",
          "Black Arrow cooldown increased from 15 to 18 seconds"
        ]
      },
      {
        unit: "Murloc Tidehunter",
        changes: [
          "Health increased by 15%",
          "Spawn rate increased by 10%"
        ]
      }
    ],
    bugFixes: [
      "Fixed an issue where certain talents would not properly activate",
      "Resolved a bug causing inconsistent damage from area-of-effect abilities",
      "Fixed visual artifacts on several mini models",
      "Corrected localization errors in multiple languages"
    ]
  }
];

// Add default export
export default patchNotesData;
