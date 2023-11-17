import {SkillName} from "@/data/skills";

import {Skill, SkillParam} from "@/model/skill";

export function fetchSkillParam(sn: SkillName): SkillParam | undefined {
    const key = keySkillParam(sn)
    let res: SkillParam
    try {
        res = JSON.parse(localStorage.getItem(key)) as SkillParam
    } catch (e) {
        localStorage.setItem(key, '')
        res = undefined
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

export function fetchCustomSkill(name: string): Skill | undefined {
    const key = keyCustomSkill(name)
    let res: Skill
    try {
        res = JSON.parse(localStorage.getItem(key)) as Skill
    } catch (e) {
        localStorage.setItem(key, '')
        res = undefined
    }
    return res
}

export function storeCustomSkill(name: string, skill: Skill) {

}

function keyCustomSkill(name: string): string {
    return `CS_${name}`
}