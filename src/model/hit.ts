import {Character} from "./character";
import {Modifier} from "./modifier";
import {Enemy} from "./enemy";
import {CRIT, ModMain, ModMap, ModSub} from "./types";

export class Hit {
    char: Character = new Character()
    enemy: Enemy = new Enemy()
    isCrit: boolean = true

    mods: Modifier[] = []

    calculate(): number {
        let modMap = this.mergeMods()

        let rs = [
            defaultModValueCalc(modMap[ModMain.ATK]),
            defaultModValueCalc(modMap[ModMain.DEF]),
            this.enemy.weak > 1 ? defaultModValueCalc(modMap[ModMain.FRAGILE]) : 1,
            defaultModValueCalc(modMap[ModMain.EnemyType].filter(v => v.sub == this.enemy.type)),
            defaultModValueCalc(modMap[ModMain.CRIT]),
            this.enemy.weak,
            this.enemy.des,
        ].reduce((a, b) => a * b, 1)

        return this.calcBaseDamage() * rs
    }

    mergeMods(): ModMap {
        let res: ModMap = {}
        let mods = [...this.mods, ...this.char.skill.presetModifiers].filter(mod => !!mod)
        if (this.isCrit) mods.push(new Modifier(ModMain.CRIT, CRIT.NORMAL, 0.5))

        for (const mod of mods) {
            mod.main in res ? res[mod.main].push(mod) : res[mod.main] = [mod]
        }
        return res
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

    calcSD(isCrit: boolean): number {
        return this.char.es - (this.enemy.border - (isCrit ? 50 : 0))
    }
}

function defaultModValueCalc(mods: Modifier[]): number {
    if (!mods) return 1

    let res = 1
    let modMapSub = categorizeAndSort(mods.filter(m => !!m))
    for (let sub in modMapSub) res += modMapSub[sub].slice(0, 2).reduce((a, b) => a + b.value, 0)

    return res
}

function categorizeAndSort(ms: Modifier[]): Partial<Record<ModSub, Modifier[]>> {
    let res = ms.reduce((res, m) => (m.sub in res ? res[m.sub].push(m) : res[m.sub] = [m], res), {})
    for (const sub in res) res[sub].sort((m1: Modifier, m2: Modifier) => m2.value - m1.value)
    return res
}
