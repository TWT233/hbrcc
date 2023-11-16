import {ADDITIONAL_S, ATK_ELEMENT_S, ATK_NORMAL_L, CRIT_NORMAL, dmg, ENEMY_TYPE} from "@/data/effects";
import {EnemyType} from "@/model/types";
import {Skill} from "@/model/skill";

export enum SkillName {
    AliceASkill51 = "天使光線",
    LShanhuaSkill51 = "第七計 無中生有",
    SHiguchiSkill52 = "絕對現象"
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
    ]
}

export const SKILLS_CATE = {
    MOD: {
        FREQUENTLY: [
            SkillName.LShanhuaSkill51,
            SkillName.SHiguchiSkill52,
        ],
        ADDITIONAL: [
            SkillName.LShanhuaSkill51,
        ],
        CRIT: [
            SkillName.SHiguchiSkill52,
        ],
    },
    DMG: [
        SkillName.AliceASkill51,
    ]
}

export function querySkill(key: SkillName | Skill): Skill {
    return (key instanceof Array) ? key : SKILLS[key]
}