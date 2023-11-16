import {NS} from "@/model/effect";
import {ADDITIONAL_S, ATK_ELEMENT_S, ATK_NORMAL_L, CRIT_NORMAL, dmg, ENEMY_TYPE} from "@/data/effects";
import {EnemyType} from "@/model/types";

export enum NSName {
    AliceASkill51 = "天使光線",
    LShanhuaSkill51 = "第七計 無中生有",
    SHiguchiSkill52 = "絕對現象"
}

export const NSS: Record<NSName, NS> = {
    [NSName.AliceASkill51]: [
        ATK_ELEMENT_S(147),
        ENEMY_TYPE(EnemyType.HP, 0.5),
        dmg([2502, 12510], 147, {STR: 2, DEX: 1}),
    ],
    [NSName.LShanhuaSkill51]: [
        ATK_NORMAL_L(248, true),
        ADDITIONAL_S,
    ],
    [NSName.SHiguchiSkill52]: [
        ATK_NORMAL_L(232, true),
        CRIT_NORMAL,
    ]
}

export const NSS_DMG = [
    NSName.AliceASkill51,
]

export const NSS_MOD = {
    FREQUENTLY: [
        NSName.LShanhuaSkill51,
        NSName.SHiguchiSkill52,
    ],
    ADDITIONAL: [
        NSName.LShanhuaSkill51,
    ],
    CRIT: [
        NSName.SHiguchiSkill52,
    ]
}
