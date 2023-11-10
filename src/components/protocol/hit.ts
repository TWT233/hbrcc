import {Character} from "./character";
import {Modifier} from "./modifier/modifier";
import {Enemy} from "./enemy";
import {MainTypes} from "./modifier/types";

export class Hit {
    char: Character
    enemy: Enemy

    mods: Record<MainTypes, Modifier[]>

    check(): boolean {
        return this.char.skill.requiredStats.every(s => s in this.char.stat)
    }

    calculate(): number {
        this.char.skill.presetModifiers.forEach(m => this.addMod(m))

        let rs: number[] = []
        rs.push(
            defaultModValueCalc(
                this.mods[MainTypes.ATK]
            ),
            defaultModValueCalc(
                this.mods[MainTypes.EnemyType].filter(v => v.sub == this.enemy.type)
            ),
        )

        return this.getBaseDamage() * rs.reduce((a, b) => a * b, 1)
    }

    addMod(mod: Modifier) {
        this.mods[mod.main].push(mod)
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

}


function defaultModValueCalc(mods: Modifier[]): number {
    let res = 1
    let modMapSub = categorizeAndSort(mods)
    for (let sub in modMapSub) {
        res += modMapSub[sub].slice(0, 2).reduce((a, b) => a + b.value, 0)
    }
    return res
}

function categorizeAndSort(ms: Modifier[]): Record<any, Modifier[]> {
    let res: Record<any, Modifier[]> = ms.reduce((res, v) => res[v.sub].push(v), {})
    for (const sub in res) {
        res[sub].sort((m1, m2) => m1.value - m2.value)
    }
    return res
}
