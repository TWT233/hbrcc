import {DefaultSkill, Skill} from "./skill";
import {Stat} from "./types";

export class Character {
    stat: Record<Stat, number> = {CON: 0, DEX: 320, LUK: 0, SPR: 0, STR: 320, WIS: 0}
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
