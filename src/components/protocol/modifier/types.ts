import {EnemyType} from "../enemy";

export enum MainTypes {
    ATK,
    DEF,
    FRAGILE,
    EnemyType,
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


export const MAIN_SUB_MAP: Record<MainTypes, any> = {
    [MainTypes.ATK]: ATK,
    [MainTypes.DEF]: DEF,
    [MainTypes.FRAGILE]: FRAGILE,
    [MainTypes.EnemyType]: EnemyType
}