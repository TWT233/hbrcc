import {DefaultSkill, Skill} from "./skill";
import {DefaultATKBuff} from "./modifier/modifier";

export class Character {
    stat: Record<Stat, number> = {CON: 0, DEX: 0, LUK: 0, SPR: 0, STR: 0, WIS: 0}
    skill: Skill = new DefaultSkill()
}

export enum Stat {
    STR = "STR",
    DEX = "DEX",

    CON = "CON",
    SPR = "SPR",

    WIS = "WIS",
    LUK = "LUK",
}

