import {SkillName} from "@/data/skills";

export enum Characters {
    KanadeTachibana = "KanadeTachibana"
}

export const CHARACTER_SKILLS: Record<Characters, SkillName[]> = {
    [Characters.KanadeTachibana]: [
        SkillName.AliceASkill51,
    ],
}