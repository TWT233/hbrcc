import {Modifier} from "./modifier";

export type ModMap = Partial<Record<ModMain, Modifier[]>>

export enum EnemyType {
    HP = "HP",
    DP = "DP",
}

export enum Stat {
    STR = "STR",
    DEX = "DEX",

    CON = "CON",
    SPR = "SPR",

    WIS = "WIS",
    LUK = "LUK",
}

export enum ModMain {
    ATK = "ATK",
    DEF = "DEF",
    FRAGILE = "FRAGILE",
    EnemyType = "EnemyType",
}

export type ModSub =
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
