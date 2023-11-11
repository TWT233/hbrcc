import {EnemyType} from "../enemy";

export enum MainTypes {
    ATK = 'ATK',
    DEF = 'DEF',
    FRAGILE = 'FRAGILE',
    EnemyType = 'EnemyType',
}

export type SubTypes =
    | ATK
    | DEF
    | FRAGILE
    | EnemyType;

export enum ATK {
    NORMAL, // normal atk buff
    ELEMENT,
}

export enum DEF {
    NORMAL_DOWN,
    ELEMENT_DOWN,

    NORMAL_UP,
    ELEMENT_UP,
}

export enum FRAGILE {
    NORMAL,
}
