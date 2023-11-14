import {DefaultSkill, Skill} from "./skill";
import {Stat, StatMap} from "./types";

export class Character {
    stat: StatMap = {CON: 0, DEX: 320, LUK: 0, SPR: 0, STR: 320, WIS: 0}
    skill: Skill = new DefaultSkill()

    get es(): number { // effective stat
        let sall = 0
        let smultiplier = 0
        for (const s in this.skill.baseOn) {
            sall += this.stat[s] * this.skill.baseOn[s]
            smultiplier += this.skill.baseOn[s]
        }
        return sall / smultiplier
    }
}
