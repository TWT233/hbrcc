import {SkillName} from "@/data/skills";
import {StatMap} from "@/model/types";
import {Effect} from "@/model/effect";

export type Skill = Effect[]

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