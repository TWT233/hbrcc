import {Character} from "./character";
import {MainTypes, Modifier} from "./modifier";
import {Enemy, EnemyType} from "./enemy";
import {ModMap} from "./types";

export class Hit {
    char: Character = new Character()
    enemy: Enemy = new Enemy()
    isCrit: boolean = true

    modMap: ModMap = {ATK: [], DEF: [], EnemyType: [], FRAGILE: []}

    addMod(mod: Modifier) {
        this.modMap[mod.main].push(mod)
    }

    check(): boolean {
        let rs = this.char.skill.requiredStats
        return Object.keys(rs).every(s => rs[s] && this.char.stat[s] > 0)
    }

    calculate(): number {
        let mods = mergeModMap(this.modMap, this.char.skill.presetModifiers)

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
        return this.char.es - (this.enemy.border - (isCrit ? 50 : 0))
    }

}

function mergeModMap(...modMaps: ModMap[]): ModMap {
    let res: ModMap = {}
    for (const modMap of modMaps) {
        for (const main in modMap) {
            if (!(main in res)) {
                res[main] = []
            }
            res[main].push(...modMap[main])
        }
    }
    return res
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
