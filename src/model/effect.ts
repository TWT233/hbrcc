import {ArbitraryGrowth, ArbitraryHojuGrowth, GrowthType, HojuGrowthType, Stat, StatMap} from "@/model/types";

export class Effect {
    growth: GrowthType | ArbitraryGrowth
    hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth

    bar: [number, number] // [min, max]
    cap: number

    baseOn: Partial<StatMap>// eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX

    produce(lv: number, stat: Stat, border: number): number {
        const bar = this.calcBar(lv)
        const sd = this.calcES(stat) - border

        if (sd < -this.cap / 2) {
            return 1
        }
        if (sd <= 0) {
            return (sd + this.cap / 2) * bar[0] / (this.cap / 2)
        }
        if (sd < this.cap) {
            return (bar[1] - bar[0]) * sd / this.cap
        }
        return bar[1]
    }

    calcBar(lv: number): [number, number] {
        const g: ArbitraryGrowth = (this.growth instanceof Array) ? this.growth : growthRateMap[this.growth]
        return [this.bar[0] * (1 + g[0] * lv), this.bar[1] * (1 + g[1] * lv)]
    }

    calcES(stat: Stat): number {
        let sall = 0
        let smultiplier = 0
        for (const s in this.baseOn) {
            sall += stat[s] * this.baseOn[s]
            smultiplier += this.baseOn[s]
        }
        return sall / smultiplier
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

