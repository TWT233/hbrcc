import {SkillName} from "@/data/skills";

import {SkillParam} from "@/model/skill";

export function fetchSkillParam(sn: SkillName): SkillParam | undefined {
    const key = getSDKey(sn)
    let res: SkillParam
    try {
        res = JSON.parse(localStorage.getItem(key)) as SkillParam
    } catch (e) {
        localStorage.setItem(key, '')
    }
    return res
}

export function storeSkillParam(sn: SkillName, param: SkillParam) {
    const key = getSDKey(sn)
    localStorage.setItem(key, JSON.stringify(param))
}

function getSDKey(sn: SkillName): string {
    return `SD_${sn}`
}