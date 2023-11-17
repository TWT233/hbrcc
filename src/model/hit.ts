import {Modifier} from "./modifier";
import {Enemy} from "./enemy";
import {CRIT, ModMain, ModSub} from "./types";
import {querySkill, SkillName} from "@/data/skills";
import {SKillCall} from "@/model/skill";

export class Hit {
    enemy: Enemy = new Enemy()
    isCrit: boolean = true

    atk: SKillCall = {
        callee: SkillName.AliceASkill51,
        param: {
            lv: 3,
            hoju: 5,
            stat: {CON: 0, DEX: 320, LUK: 0, SPR: 0, STR: 320, WIS: 260}
        }
    }
    buffs: SKillCall[] = []

    calculate(): number {
        const mods = this.getMods()
        if (this.isCrit) mods.push(new Modifier([ModMain.CRIT, CRIT.BASE], 0.5))
        const modMap = mods.reduce((res, m) => m.join(res), {})

        let rs = [
            defaultModValueCalc(modMap[ModMain.ATK]),
            defaultModValueCalc(modMap[ModMain.DEF]),
            this.enemy.weak > 1 ? defaultModValueCalc(modMap[ModMain.FRAGILE]) : 1,
            defaultModValueCalc(modMap[ModMain.EnemyType]?.filter(v => v.sub == this.enemy.type)),
            defaultModValueCalc(modMap[ModMain.CRIT]),
            this.enemy.weak,
            this.enemy.des,
        ].reduce((a, b) => a * b, 1)

        return this.getBaseDMG() * rs
    }

    getBaseDMG(): number {
        const baseDMGs = querySkill(this.atk.callee)
            .filter(e => e.isDMG)
            .map(e => e.value(this.atk.param, this.border()))
        return baseDMGs.length ? baseDMGs[0] : 0
    }

    getMods(): Modifier[] {
        const call2Mods = (call: SKillCall): Modifier[] =>
            querySkill(call.callee)
                .filter(e => !e.isDMG)
                .map(e => new Modifier(e.mt, e.value(call.param, this.border())))

        return [...this.buffs, this.atk].map(call => call2Mods(call)).flat()
    }

    border(): number {
        return this.enemy.border - (this.isCrit ? 50 : 0)
    }
}

function defaultModValueCalc(mods: Modifier[]): number {
    let res = 1
    let modMapSub = categorizeAndSort(mods?.filter(m => !!m))
    for (let sub in modMapSub) res += modMapSub[sub].slice(0, 2).reduce((a, b) => a + b.value, 0)
    return res
}

function categorizeAndSort(ms: Modifier[]): Partial<Record<ModSub, Modifier[]>> {
    let res = ms?.reduce((res, m) => (m.sub in res ? res[m.sub].push(m) : res[m.sub] = [m], res), {})
    for (const sub in res) res[sub].sort((m1: Modifier, m2: Modifier) => m2.value - m1.value)
    return res
}
