import {ADDITIONAL, ATK, GrowthType, HojuGrowthType, ModMain, ModSub, StatMap} from "@/model/types";
import {Effect} from "@/model/effect";

export function buff(bar: [number, number], cap: number, main: ModMain, sub: ModSub, hoju: boolean): Effect {
    return new Effect(GrowthType.BUFF, hoju ? HojuGrowthType.ATK : HojuGrowthType.NO, bar, cap, {WIS: 1}, [main, sub])
}

export function dmg(bar: [number, number], cap: number, base: Partial<StatMap>): Effect {
    return new Effect(GrowthType.ATK, HojuGrowthType.ATK, bar, cap, base, undefined)
}

export const ATK_NORMAL_S = (cap: number, hoju: boolean = false) => buff([0.35, 0.5], cap, ModMain.ATK, ATK.NORMAL, hoju)
export const ATK_NORMAL_M = (cap: number, hoju: boolean = false) => buff([0.5, 0.65], cap, ModMain.ATK, ATK.NORMAL, hoju)
export const ATK_NORMAL_L = (cap: number, hoju: boolean = false) => buff([0.75, 0.9], cap, ModMain.ATK, ATK.NORMAL, hoju)

export const ATK_ELEMENT_S = (cap: number, hoju: boolean = false) => buff([0.4, 0.55], cap, ModMain.ATK, ATK.ELEMENT, hoju)


export const ADDITIONAL_S = new Effect(
    GrowthType.FIXED, HojuGrowthType.NO, [0.5, 0.5], 0, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL],
)

const ADDITIONAL_L = (cap: number) => new Effect(
    GrowthType.FIXED, HojuGrowthType.NO, [0.8, 1.2], cap, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL],
)
