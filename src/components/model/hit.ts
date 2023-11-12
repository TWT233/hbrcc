import {Character} from "./character";
import {Modifier} from "./modifier/modifier";
import {Enemy, EnemyType} from "./enemy";
import {MainTypes} from "./modifier/types";

export class Hit {
    char: Character = new Character()
    enemy: Enemy = new Enemy()
    isCrit: boolean = true

    modMap: Record<MainTypes, Modifier[]> = {ATK: [], DEF: [], EnemyType: [], FRAGILE: []}

    addMod(mod: Modifier) {
        this.modMap[mod.main].push(mod)
    }

    check(): boolean {
        return this.char.skill.requiredStats.every(s => s in this.char.stat)
    }

    calculate(): number {
        let mods = {...this.modMap, ...this.char.skill.presetModifiers}

        let rs: number[] = []
        rs.push(
            defaultModValueCalc(mods[MainTypes.ATK]),
            defaultModValueCalc(mods[MainTypes.DEF]),
            defaultModValueCalc(mods[MainTypes.FRAGILE]),
            defaultModValueCalc(
                mods[MainTypes.EnemyType].filter(v => v.sub == this.enemy.type)
            ),
        )

        return this.calcBaseDamage() * this.calcDes() * rs.reduce((a, b) => a * b, 1)
    }

    calcBaseDamage(): number {
        let sd = this.calcSD(this.isCrit)
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

    calcDes(): number {
        return this.enemy.type == EnemyType.HP ? this.enemy.des : 1
    }

    calcSD(isCrit: boolean): number {
        let sd =
            this.char.skill.requiredStats
                .map((v) => this.char.stat[v])
                .reduce((a, b) => a + b)

        return sd / this.char.skill.requiredStats.length - (this.enemy.border - (isCrit ? 50 : 0))
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
