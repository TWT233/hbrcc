import {Modifier} from "./modifier";
import {ATK, EnemyType, ModMain, Stat, StatMap} from "./types";

export interface Skill {
    readonly baseOn: Partial<StatMap>// eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX
    readonly bar: [number, number] // [min, max]
    readonly cap: number

    readonly presetModifiers: Modifier[]
}

export class DefaultSkill implements Skill {
    baseOn = {[Stat.STR]: 2, [Stat.DEX]: 1}
    bar: [number, number] = [2502, 12510]
    cap = 147

    enemyTypeMod = new Modifier([ModMain.EnemyType, EnemyType.HP], 0.5)
    eleATKMod = new Modifier([ModMain.ATK, ATK.ELEMENT], 0.5)

    presetModifiers = [this.eleATKMod, this.enemyTypeMod]

}