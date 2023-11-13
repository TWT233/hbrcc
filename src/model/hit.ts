import {Character} from "./character";
import {Modifier} from "./modifier";
import {Enemy} from "./enemy";
import {EnemyType, ModMain, ModMap} from "./types";

export class Hit {
    char: Character = new Character()
    enemy: Enemy = new Enemy()
    isCrit: boolean = true

    mods: Modifier[] = []

    calculate(): number {
        let modMap = this.mergeMods()

        let rs: number[] = []
        rs.push(
            defaultModValueCalc(modMap[ModMain.ATK]),
            defaultModValueCalc(modMap[ModMain.DEF]),
            defaultModValueCalc(modMap[ModMain.FRAGILE]),
            defaultModValueCalc(
                modMap[ModMain.EnemyType].filter(v => v.sub == this.enemy.type)
            ),
        )

        return this.calcBaseDamage() * this.calcDes() * rs.reduce((a, b) => a * b, 1)
    }

    mergeMods(): ModMap {
        return [...this.mods, ...this.char.skill.presetModifiers]
            .filter(mod => !!mod)
            .reduce(
                (res, mod) => {
                    mod.main in res ? res[mod.main].concat(mod) : res[mod.main] = [mod]
                    return res
                }, {},
            )
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
        return this.char.es - (this.enemy.border - (isCrit ? 50 : 0))
    }

}

function defaultModValueCalc(mods: Modifier[]): number {
    let res = 1
    if (!mods) {
        return res
    }
    let modMapSub = categorizeAndSort(mods)
    for (let sub in modMapSub) {
        res += modMapSub[sub].slice(0, 2).reduce((a, b) => a + b.value, 0)
    }
    return res
}

function categorizeAndSort(ms: Modifier[]): Record<any, Modifier[]> {
    let res: Record<any, Modifier[]> = {}
    for (const m of ms) {
        if (!(m.sub in res)) {
            res[m.sub] = []
        }
        res[m.sub].push(m)
    }
    for (const sub in res) {
        res[sub].sort((m1, m2) => m2.value - m1.value)
    }
    return res
}
