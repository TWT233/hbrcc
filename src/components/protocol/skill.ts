import {DefaultATKBuff, DefaultEnemyType, Modifier} from "./modifier/modifier";
import {Stat} from "./character";
import {EnemyType} from "./enemy";
import {ATK} from "./modifier/types";

export interface Skill {
    readonly requiredStats: Stat[] // eg: [STR, STR, DEX] means 2*STR+1*DEX
    readonly bar: [number, number] // [min, max]
    readonly cap: number

    readonly presetModifiers: Modifier[]
}

export class DefaultSkill implements Skill {
    requiredStats = [Stat.STR, Stat.STR, Stat.DEX]
    bar: [number, number] = [2502, 12510]
    cap = 147

    enemyTypeModifier = new DefaultEnemyType(EnemyType.HP, 0.5)
    eleATKModifier = new DefaultATKBuff(ATK.ELEMENT, 50)

    presetModifiers: Modifier[] = [this.enemyTypeModifier, this.eleATKModifier]

}