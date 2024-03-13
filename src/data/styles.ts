import {SkillName} from "@/data/skills";

export enum Styles {
    AliceADefault = "AliceADefault",
    AliceAOnePiece = "AliceAOnePiece",
    LShanhuaDefault = "LShanhuaDefault",
    MKiryuuGothic = "MKiryuuGothic",
}

export const CHARACTER_SKILLS: Record<Styles, SkillName[]> = {
    [Styles.AliceAOnePiece]: [
        SkillName.AliceASkill51,
    ],
    [Styles.AliceADefault]: [
        SkillName.AliceASkill51,
    ],
    [Styles.LShanhuaDefault]: [
        SkillName.LShanhuaSkill02,
    ],
    [Styles.MKiryuuGothic]: [
        SkillName.MKiryuSkill52,
    ]
}