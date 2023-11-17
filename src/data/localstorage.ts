import {SkillName} from "@/data/skills";

import {SkillParam} from "@/model/skill";

export function fetchSkillParam(sn: SkillName): SkillParam | undefined {
    const key = keySkillParam(sn)
    let res: SkillParam
    try {
        res = JSON.parse(localStorage.getItem(key)) as SkillParam
    } catch (e) {
        localStorage.setItem(key, '')
    }
    return res
}

export function storeSkillParam(sn: SkillName, param: SkillParam) {
    const key = keySkillParam(sn)
    localStorage.setItem(key, JSON.stringify(param))
}

function keySkillParam(sn: SkillName): string {
    return `SP_${sn}`
}

