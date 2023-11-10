import {Modifier} from "./modifier/modifier";
import {Stat} from "./character";
import {DefaultOnEnemyType} from "./modifier/ON_ENEMY_TYPE";
import {Enemy, EnemyType} from "./enemy";

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

    enemyTypeModifier = new DefaultOnEnemyType(EnemyType.HP, 0.5)

    presetModifiers: Modifier[] = [this.enemyTypeModifier]

}