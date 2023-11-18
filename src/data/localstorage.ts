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

export function storeSkillParam(sn: SkillName, param: SkillParam | undefined) {
    const key = keySkillParam(sn)
    if (param === undefined) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, JSON.stringify(param))
    }
}

function keySkillParam(sn: SkillName): string {
    return `SP_${sn}`
}

export function fetchCustomSkillList(): string[] {
    let res = []
    try {
        res = JSON.parse(localStorage.getItem(keyCustomSkillList))
    } catch (e) {
        localStorage.setItem(keyCustomSkillList, '')
    }
    return res ? res : []
}

export function storeCustomSkillList(csl: string[]) {
    localStorage.setItem(keyCustomSkillList, JSON.stringify(csl))
}

const keyCustomSkillList = "_CSL_"

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

export function storeCustomSkill(name: string, skill: Skill | undefined) {
    const key = keyCustomSkill(name)
    if (skill === undefined) {
        localStorage.removeItem(key)
        const l = fetchCustomSkillList()
        const idx = l.indexOf(key)
        if (idx != -1) {
            l.splice(idx, 1)
            storeCustomSkillList(l)
        }
    } else {
        localStorage.setItem(key, JSON.stringify(skill))
        const l = fetchCustomSkillList()
        if (l.indexOf(key) == -1) {
            l.push(key)
            storeCustomSkillList(l)
        }
    }
}

function keyCustomSkill(name: string): string {
    return `CS_${name}`
}