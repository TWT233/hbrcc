import {SkillName} from "@/data/skills";

export enum Styles {
    KanadeTachibana_EtherFlair = "KanadeTachibana_EtherFlair",
    KanadeTachibana_EtherFlairAurora = "KanadeTachibana_EtherFlairAurora",
    YingXiaLi_TacticalWheel = "YingXiaLi_TacticalWheel",
}

export const CHARACTER_SKILLS: Record<Styles, SkillName[]> = {
    [Styles.KanadeTachibana_EtherFlair]: [
        SkillName.AliceASkill51,
    ],
    [Styles.KanadeTachibana_EtherFlairAurora]: [
        SkillName.AliceASkill51,
    ],
    [Styles.YingXiaLi_TacticalWheel]: [
        SkillName.LShanhuaSkill02,
    ],
}