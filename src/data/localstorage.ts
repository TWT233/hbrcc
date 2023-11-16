import {SkillName} from "@/data/skills";

import {SkillParam} from "@/model/skill";

function getSkillData(sn: SkillName): SkillParam | undefined {
    const key = getSDKey(sn)
    let res: SkillParam
    try {
        res = JSON.parse(localStorage.getItem(key)) as SkillParam
    } catch (e) {
        localStorage.setItem(key, '')
    }
    return res
}

function getSDKey(sn: SkillName): string {
    return `SD_${sn}`
}