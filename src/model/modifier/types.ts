import {EnemyType} from "../enemy";

export enum MainTypes {
    ATK = "ATK",
    DEF = "DEF",
    FRAGILE = "FRAGILE",
    EnemyType = "EnemyType",
}

export const COLOR_MAP = {
    [MainTypes.ATK]: "red-darken-4",
    [MainTypes.DEF]: "blue-darken-4",
    [MainTypes.FRAGILE]: "light-blue-darken-4",
    [MainTypes.EnemyType]: "lime-darken-4",
}

export type SubTypes =
    | ATK
    | DEF
    | FRAGILE
    | EnemyType;

export enum ATK {
    NORMAL = "NORMAL", // normal atk buff
    ELEMENT = "ELEMENT",
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
