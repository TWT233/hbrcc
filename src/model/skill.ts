import {SkillName} from "@/data/SKILLS";
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