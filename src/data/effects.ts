import {ADDITIONAL, ATK, CRIT, EnemyType, GrowthType, HojuGrowthType, ModMain, ModSub, StatMap} from "@/model/types";
import {Effect} from "@/model/effect";

export function buff(bar: [number, number], cap: number, main: ModMain, sub: ModSub, hoju: boolean): Effect {
    return new Effect(bar, cap, {WIS: 1}, [main, sub], GrowthType.BUFF, hoju ? HojuGrowthType.ATK : HojuGrowthType.NO)
}

export function dmg(bar: [number, number], cap: number, base: Partial<StatMap>): Effect {
    return new Effect(bar, cap, base, undefined, GrowthType.ATK, HojuGrowthType.ATK)
}

// ATK

export const ATK_NORMAL_S = (cap: number, hoju: boolean = false) => buff([0.35, 0.5], cap, ModMain.ATK, ATK.NORMAL, hoju)
export const ATK_NORMAL_M = (cap: number, hoju: boolean = false) => buff([0.5, 0.65], cap, ModMain.ATK, ATK.NORMAL, hoju)
export const ATK_NORMAL_L = (cap: number, hoju: boolean = false) => buff([0.75, 0.9], cap, ModMain.ATK, ATK.NORMAL, hoju)

export const ATK_ELEMENT_S = (cap: number, hoju: boolean = false) => buff([0.4, 0.55], cap, ModMain.ATK, ATK.ELEMENT, hoju)

// EnemyType

export const ENEMY_TYPE = (type: EnemyType, value: number) => new Effect([value, value], 0, {}, [ModMain.EnemyType, EnemyType.HP], GrowthType.FIXED)

// CRIT

export const CRIT_NORMAL = new Effect([0.3, 0.3], 0, {}, [ModMain.CRIT, CRIT.NORMAL], GrowthType.FIXED)

// ADDITIONAL

export const ADDITIONAL_S = new Effect([0.5, 0.5], 0, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL], GrowthType.FIXED)
export const ADDITIONAL_L = (cap: number) => new Effect([0.8, 1.2], cap, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL], GrowthType.FIXED)
