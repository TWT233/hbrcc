import {StatMap} from "@/model/types";
import {SkillName} from "@/data/skills";

export type SkillData = {
    lv: number,
    hoju: number,
    stat: StatMap,
}

function getSkillData(sn: SkillName): SkillData | undefined {
    return JSON.parse(localStorage.getItem(getSDKey(sn))) as SkillData
}

function getSDKey(sn: SkillName): string {
    return `SD_${sn}`
}