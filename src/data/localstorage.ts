import {SkillName} from "@/data/SKILLS";

import {SkillParam} from "@/model/skill";

function getSkillData(sn: SkillName): SkillParam | undefined {
    return JSON.parse(localStorage.getItem(getSDKey(sn))) as SkillParam
}

function getSDKey(sn: SkillName): string {
    return `SD_${sn}`
}