import {MainType, Modifier, ModifierType} from "./modifier";
import {EnemyType} from "../enemy";

export class DefaultOnEnemyType implements Modifier {
    type: ModifierType = [MainType.ON_ENEMY_TYPE, EnemyType.HP];
    value: number;


    constructor(t: EnemyType, value: number) {
        this.type[1] = t
        this.value = value;
    }
}