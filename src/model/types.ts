import {Modifier} from "./modifier";

export type ModType = [ModMain, ModSub]
export type ModMap = Partial<Record<ModMain, Modifier[]>>
export type StatMap = Record<Stat, number>

export function newStatMap(): StatMap {
    return {
        CON: 0, DEX: 0, LUK: 0, SPR: 0, STR: 0, WIS: 0
    }
}

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

export enum BorderType {
    NO = "NO",
    ENEMY = "ENEMY",
}

export enum GrowthType {
    ATK = "ATK",
    HEAL = "HEAL",
    BUFF = "BUFF",
    DEBUFF = "DEBUFF",
    FIXED = "FIXED",
    NO = "NO",
}

export type ArbitraryGrowth = [number, number] // [bar min growth, bar max growth], e.g. [5%, 2%]

export enum HojuGrowthType {
    ATK = "ATK",
    HEAL = "HEAL",
    BUFF = "BUFF",
    DEBUFF = "DEBUFF",
    CRIT = "CRIT",
    NO = "NO",
}

export type ArbitraryHojuGrowth = [number, number] // [bar rate, cap], e.g. [2%, 20]

export enum ModMain {
    ATK = "ATK",
    DEF = "DEF",
    FRAGILE = "FRAGILE",
    EnemyType = "EnemyType",
    CRIT = "CRIT",
    ADDITIONAL = "ADDITIONAL",
}

export type ModSub =
    | ATK
    | DEF
    | FRAGILE
    | EnemyType
    | CRIT
    | ADDITIONAL;

export enum ATK {
    NORMAL = "NORMAL", // normal atk buff
    ELEMENT = "ELEMENT",
}

export enum DEF {
    NORMAL_DOWN = "NORMAL_DOWN",
    ELEMENT_DOWN = "ELEMENT_DOWN",

    NORMAL_UP = "NORMAL_UP",
    ELEMENT_UP = "ELEMENT_UP",
}

export enum FRAGILE {
    NORMAL = "NORMAL",
}

export enum CRIT {
    BASE = "BASE",
    NORMAL = "NORMAL", // normal atk buff
    ELEMENT = "ELEMENT",
}

export enum ADDITIONAL {
    NORMAL = "NORMAL",
}

