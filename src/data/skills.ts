import {NS} from "@/model/effect";
import {ADDITIONAL_S, ATK_ELEMENT_S, ATK_NORMAL_L, dmg} from "@/data/effects";

export enum SkillName {
    AliceASkill51 = "エンジェルズ・レイ",
    LShanhuaSkill51 = "第七計 無中生有",
}

const SKILLS: Record<SkillName, NS> = {
    [SkillName.AliceASkill51]: [
        ATK_ELEMENT_S(147),
        dmg([2502, 12510], 147, {STR: 2, DEX: 1}),
    ],
    [SkillName.LShanhuaSkill51]: [
        ATK_NORMAL_L(248, true),
        ADDITIONAL_S,
    ]
}

