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
    CRIT = "CRIT"
}

export type ModSub =
    | ATK
    | DEF
    | FRAGILE
    | EnemyType
    | CRIT;

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

export enum CRIT {
    NORMAL = "NORMAL", // normal atk buff
    ELEMENT = "ELEMENT",
}

export const COLOR_MAP = {
    [ModMain.ATK]: "red-darken-4",
    [ModMain.DEF]: "blue-darken-4",
    [ModMain.FRAGILE]: "light-blue-darken-4",
    [ModMain.EnemyType]: "lime-darken-4",
    [ModMain.CRIT]: "red-darken-2",
}