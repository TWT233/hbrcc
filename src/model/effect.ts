import {
    ArbitraryGrowth,
    ArbitraryHojuGrowth,
    GrowthType,
    HojuGrowthType,
    ModMain,
    ModSub,
    Stat,
    StatMap
} from "@/model/types";

export class Effect {
    growth: GrowthType | ArbitraryGrowth
    hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth

    bar: [number, number] // [min, max]
    cap: number

    baseOn: Partial<StatMap>// eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX

    type: { main: ModMain, sub: ModSub } | undefined = undefined

    get isDMG(): boolean {
        return this.type == undefined
    }

    value(lv: number, hojuLV: number, stat: Stat, border: number): number {
        const bar = this.calcBar(lv)
        const sd = this.calcES(stat) - border

        return this.calcBase(bar, sd, this.cap) + this.calcHoju(bar, sd, hojuLV)
    }

    calcBar(lv: number): [number, number] {
        const growth = (this.growth instanceof Array) ? this.growth : growthRateMap[this.growth]
        return [this.bar[0] * (1 + growth[0] * lv), this.bar[1] * (1 + growth[1] * lv)]
    }

    calcES(stat: Stat): number {
        let all = 0
        let multiplier = 0
        for (const s in this.baseOn) {
            all += stat[s] * this.baseOn[s]
            multiplier += this.baseOn[s]
        }
        return all / multiplier
    }

    calcBase(bar: [number, number], sd: number, cap: number) {
        if (sd < -cap / 2) {
            return 1
        }
        if (sd <= 0) {
            return (sd + cap / 2) * bar[0] / (cap / 2)
        }
        if (sd < cap) {
            return (bar[1] - bar[0]) * sd / cap
        }
        return bar[1]
    }

    calcHoju(bar: [number, number], sd: number, lv: number): number {
        const growth = (this.hojuGrowth instanceof Array) ? this.hojuGrowth : hojuGrowthRateMap[this.hojuGrowth]
        const hojuBar: [number, number] = [bar[0] * growth[0] * lv, bar[1] * growth[0] * lv]
        const hojuCap = this.cap + growth[1] * lv
        return this.calcBase(hojuBar, sd, hojuCap)
    }
}

const growthRateMap: Record<GrowthType, ArbitraryGrowth> = {
    [GrowthType.ATK]: [0.05, 0.02],
    [GrowthType.HEAL]: [0.05, 0.02],
    [GrowthType.BUFF]: [0.03, 0.02],
    [GrowthType.DEBUFF]: [0.05, 0.02],
    [GrowthType.OTHER]: [0, 0],
}

const hojuGrowthRateMap: Record<HojuGrowthType, ArbitraryHojuGrowth> = {
    [HojuGrowthType.ATK]: [0.02, 20],
    [HojuGrowthType.HEAL]: [0.06, 60],
    [HojuGrowthType.BUFF]: [0.04, 60],
    [HojuGrowthType.DEBUFF]: [0.02, 20],
    [HojuGrowthType.CRIT]: [0.02, 60],
    [HojuGrowthType.OTHER]: [0, 0],
}

