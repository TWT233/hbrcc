import {
    ADDITIONAL,
    ATK,
    BorderType,
    CRIT,
    EnemyType,
    GrowthType,
    HojuGrowthType,
    ModMain,
    ModType,
    StatMap
} from "@/model/types";
import {Effect} from "@/model/effect";

function buff(bar: [number, number], mt: ModType) {
    return (cap: number, growth: boolean = true, hoju: boolean = false) => {
        return new Effect(
            bar, cap, {WIS: 1},
            mt, BorderType.NO,
            growth ? GrowthType.BUFF : GrowthType.NO,
            hoju ? HojuGrowthType.ATK : HojuGrowthType.NO,
        )
    }
}


export function dmg(
    bar: [number, number], cap: number, base: Partial<StatMap>
): Effect {
    return new Effect(bar, cap, base, undefined, BorderType.ENEMY, GrowthType.ATK, HojuGrowthType.ATK)
}

// ATK

export const ATK_NORMAL_S = buff([0.35, 0.5], [ModMain.ATK, ATK.NORMAL])
export const ATK_NORMAL_M = buff([0.5, 0.65], [ModMain.ATK, ATK.NORMAL])
export const ATK_NORMAL_L = buff([0.75, 0.9], [ModMain.ATK, ATK.NORMAL])

export const ATK_ELEMENT_S = buff([0.4, 0.55], [ModMain.ATK, ATK.ELEMENT])

// EnemyType

export const ENEMY_TYPE = (type: EnemyType, value: number) => new Effect([value, value], 0, {}, [ModMain.EnemyType, EnemyType.HP])

// CRIT

export const CRIT_NORMAL = new Effect([0.3, 0.3], 0, {}, [ModMain.CRIT, CRIT.NORMAL])

// ADDITIONAL

export const ADDITIONAL_S = new Effect([0.5, 0.5], 0, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL])
export const ADDITIONAL_L = (cap: number) => new Effect([0.8, 1.2], cap, {}, [ModMain.ADDITIONAL, ADDITIONAL.NORMAL])
