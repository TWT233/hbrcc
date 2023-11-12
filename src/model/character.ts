import {DefaultSkill, Skill} from "./skill";

export class Character {
    stat: Record<Stat, number> = {CON: 0, DEX: 0, LUK: 0, SPR: 0, STR: 0, WIS: 0}
    skill: Skill = new DefaultSkill()

    get es(): number { // effective stat
        let sall = 0
        let smultiplier = 0
        for (const s in this.skill.requiredStats) {
            sall += this.stat[s] * this.skill.requiredStats[s]
            smultiplier += this.skill.requiredStats[s]
        }
        return sall / smultiplier
    }
}

export enum Stat {
    STR = "STR",
    DEX = "DEX",

    CON = "CON",
    SPR = "SPR",

    WIS = "WIS",
    LUK = "LUK",
}

