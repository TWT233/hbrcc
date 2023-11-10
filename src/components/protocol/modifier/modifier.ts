import {EnemyType} from "../enemy";
import {ATK, MainTypes, SubTypes} from "./types";

export interface Modifier {
    readonly main: MainTypes
    readonly sub: SubTypes
    readonly value: number
}

class CustomMod implements Modifier {
    main = MainTypes.ATK
    sub: any;
    value: number;
}

class DefaultATKBuff implements Modifier {
    main = MainTypes.ATK
    sub = ATK.NORMAL
    value: number
}


export class DefaultEnemyType implements Modifier {
    main = MainTypes.EnemyType
    sub = EnemyType.HP;
    value: number;

    constructor(t: EnemyType, value: number) {
        this.sub = t
        this.value = value;
    }
}