import {SkillName} from "@/data/skills";
import {StatMap} from "@/model/types";
import {CustomEffect, Effect} from "@/model/effect";

export type Skill = Effect[]

export type CustomSkill = CustomEffect[]

export type SkillLV = {
    lv: number,
    hoju: number,
}

export type SkillParam = {
    lv: number,
    hoju: number,
    stat: StatMap,
}

export type SKillCall = {
    callee: SkillName | Skill
    param: SkillParam
}

export function isSkillName(callee: SkillName | Skill): boolean {
    return !(callee instanceof Array)
}