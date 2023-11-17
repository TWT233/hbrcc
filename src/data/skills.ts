import {
    ADDITIONAL_S,
    ATK_ELEMENT_S,
    ATK_NORMAL_L,
    CRIT_NORMAL,
    DEF_NORMAL_M,
    dmg,
    ENEMY_TYPE,
    FRAGILE_NORMAL
} from "@/data/effects";
import {EnemyType} from "@/model/types";
import {Skill} from "@/model/skill";

export enum SkillName {
    AliceASkill51 = "天使光線",
    LShanhuaSkill51 = "第七計 無中生有",
    SHiguchiSkill52 = "絕對現象",
    MKiryuSkill52 = "御稲荷神話",
    LShanhuaSkill02 = "臥龍演舞斬",
}

export const SKILLS: Record<SkillName, Skill> = {
    [SkillName.AliceASkill51]: [
        ATK_ELEMENT_S(147),
        ENEMY_TYPE(EnemyType.HP, 0.5),
        dmg([2502, 12510], 147, {STR: 2, DEX: 1}),
    ],
    [SkillName.LShanhuaSkill51]: [
        ATK_NORMAL_L(248, true),
        ADDITIONAL_S,
    ],
    [SkillName.SHiguchiSkill52]: [
        ATK_NORMAL_L(232, true),
        CRIT_NORMAL,
    ],
    [SkillName.MKiryuSkill52]: [
        DEF_NORMAL_M(143),
        FRAGILE_NORMAL(143),
        dmg([2025, 10125], 143, {STR: 1, DEX: 1}),
    ],
    [SkillName.LShanhuaSkill02]: [
        DEF_NORMAL_M(123),
    ]
}

export const SKILLS_CATE = {
    MOD: {
        FREQUENTLY: [
            SkillName.LShanhuaSkill51,
            SkillName.SHiguchiSkill52,
        ],
        DEF: [
            SkillName.MKiryuSkill52,
            SkillName.LShanhuaSkill02,
        ],
        FRAGILE: [
            SkillName.MKiryuSkill52,
        ],
        ADDITIONAL: [
            SkillName.LShanhuaSkill51,
        ],
        CRIT: [
            SkillName.SHiguchiSkill52,
        ],
    },
    DMG: {
        FIRE: [],
        THUNDER: [
            SkillName.MKiryuSkill52,
        ],
        ICE: [],
        DARK: [],
        LIGHT: [
            SkillName.AliceASkill51,
        ],
    },

}

export function querySkillName(key: SkillName | Skill): string {
    return (key instanceof Array) ? "CUSTOM" : key
}

export function querySkill(key: SkillName | Skill): Skill {
    return (key instanceof Array) ? key : SKILLS[key]
}