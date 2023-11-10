import {Skill} from "./skill";

export class Character {
    stat: Record<Stat, number>
    skill: Skill
}

export enum Stat {
    STR,
    DEX,

    CON,
    SPR,

    WIS,
    LUK,
}

