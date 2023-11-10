import {Character} from "./character";
import {MainType, Modifier, ModifierType} from "./modifier/modifier";
import {Enemy} from "./enemy";

export class Hit {
    char: Character
    enemy: Enemy

    mods: Record<MainType, Modifier[]>

    calculate(): number {
        let base = this.getBaseDamage()
        let ratk = this.dealWithATK()

        return base * ratk
    }

    getBaseDamage(): number {
        let sd = this.getSD()
        let skill = this.char.skill
        let cap = skill.cap

        if (sd < -cap / 2) {
            return 1
        }
        if (sd <= 0) {
            return (sd + cap / 2) * skill.bar[0] / (cap / 2)
        }
        if (sd < cap) {
            return (skill.bar[1] - skill.bar[0]) * sd / cap
        }
        return skill.bar[1]
    }

    getSD(): number {
        let sd =
            this.char.skill.requiredStats
                .map((v) => this.char.stat[v])
                .reduce((a, b) => a + b)

        return sd / this.char.skill.requiredStats.length - this.enemy.border
    }

    dealWithATK(): number {
        let r = 1
        let ms = this.categorizeBySubType(this.mods[MainType.ATK])
        

        return r
    }

    categorizeBySubType(ms: Modifier[]): Record<any, Modifier[]> {
        return ms.reduce((res, v) => res[v.type[1]].push(v), {})
    }

}
