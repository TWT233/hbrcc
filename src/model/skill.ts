import {ATKBuff, EnemyTypeBuff, Modifier} from "./modifier/modifier";
import {Stat} from "./character";
import {EnemyType} from "./enemy";
import {ATK, MainTypes} from "./modifier/types";

export interface Skill {
    readonly requiredStats: Stat[] // eg: [STR, STR, DEX] means 2*STR+1*DEX
    readonly bar: [number, number] // [min, max]
    readonly cap: number

    readonly presetModifiers: Record<MainTypes, Modifier[]>
}

export class DefaultSkill implements Skill {
    requiredStats = [Stat.STR, Stat.STR, Stat.DEX]
    bar: [number, number] = [2502, 12510]
    cap = 147

    enemyTypeMod = new EnemyTypeBuff(EnemyType.HP, 0.5)
    eleATKMod = new ATKBuff(ATK.ELEMENT, 0.5)

    presetModifiers: Record<MainTypes, Modifier[]> = {
        ATK: [this.eleATKMod],
        DEF: [],
        EnemyType: [this.enemyTypeMod],
        FRAGILE: []
    }

}