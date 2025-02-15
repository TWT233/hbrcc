import {SkillName} from "@/data/skills";
import {CustomEffect, Effect} from "@/model/effect";
import {Stat} from "@/model/stat";

export type Skill = Effect[]

export type CustomSkill = CustomEffect[]

export type SkillLV = {
    lv: number,
    hoju: number,
}

export type SkillParam = {
    lv: number,
    hoju: number,
    stat: Stat,
}

export type SKillCall = {
    callee: SkillName | Skill
    param: SkillParam
}

export function isSkillName(callee: SkillName | Skill): boolean {
    return !(callee instanceof Array)
}