import {newStatMap, StatMap} from "@/model/types";
import {SkillName} from "@/data/skills";
import {SkillLV} from "@/model/skill";

export function Style(name: string) {
    return {
        fetch: () => {
            try {
                return JSON.parse(localStorage.getItem(keyStyle(name))) as StatMap
            } catch (e) {
                return newStatMap()
            }
        },
        store: (stat: StatMap | undefined) => {
            if (stat === undefined) {
                localStorage.removeItem(keyStyle(name))
            } else {
                localStorage.setItem(keyStyle(name), JSON.stringify(stat))
            }
        },
    }
}

function keyStyle(name: string): string {
    return `Style:${name}`
}

export function Skill(name: SkillName) {
    return {
        fetch: () => {
            try {
                return JSON.parse(localStorage.getItem(keySKill(name))) as SkillLV
            } catch (e) {
                return {} as SkillLV
            }
        },
        store: (skill: SkillLV | undefined) => {
            if (skill === undefined) {
                localStorage.removeItem(keySKill(name))
            } else {
                localStorage.setItem(keySKill(name), JSON.stringify(skill))
            }
        },
    }
}

function keySKill(name: SkillName): string {
    return `Skill:${name}`
}