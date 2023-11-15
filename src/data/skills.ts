import {Effect, NS} from "@/model/effect";
import {ATK, GrowthType, HojuGrowthType, ModMain, ModSub, StatMap} from "@/model/types";

function buff(bar: [number, number], cap: number, main: ModMain, sub: ModSub): Effect {
    return new Effect(GrowthType.BUFF, HojuGrowthType.BUFF, bar, cap, {WIS: 1}, [main, sub])
}

function dmg(bar: [number, number], cap: number, base: Partial<StatMap>): Effect {
    return new Effect(GrowthType.ATK, HojuGrowthType.ATK, bar, cap, base, undefined)
}

export enum SkillName {
    ANGELSRAY = "ANGELSRAY"
}

const SKILLS: Record<SkillName, NS> = {
    [SkillName.ANGELSRAY]: [
        buff([0.4, 0.55], 147, ModMain.ATK, ATK.ELEMENT),
        dmg([2502, 12510], 147, {STR: 2, DEX: 1})
    ],
}