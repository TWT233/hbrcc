import {
    ArbitraryGrowth,
    ArbitraryHojuGrowth, BorderType,
    GrowthType,
    HojuGrowthType,
    ModMain,
    ModSub,
    Stat,
    StatMap
} from "@/model/types";

export type NS = Effect[]

export class Effect {
    bar: [number, number] // [min, max]
    cap: number

    baseOn: Partial<StatMap>// eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX

    type: [ModMain, ModSub] | undefined = undefined

    bdt: BorderType

    growth: GrowthType | ArbitraryGrowth
    hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth

    constructor(
        bar: [number, number],
        cap: number,
        baseOn: Partial<StatMap>,
        type: [ModMain, ModSub] | undefined,
        bdt: BorderType,
        growth: GrowthType | ArbitraryGrowth,
        hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth = HojuGrowthType.NO,
    ) {
        this.bar = bar;
        this.cap = cap;
        this.baseOn = baseOn;
        this.type = type;
        this.bdt = bdt;
        this.growth = growth;
        this.hojuGrowth = hojuGrowth;
    }

    get isDMG(): boolean {
        return this.type == undefined
    }

    value(lv: number, hojuLV: number, stat: Stat, border: number): number {
        if (this.growth == GrowthType.FIXED) return this.bar[0]

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
        return multiplier == 0 ? 0 : all / multiplier
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
        if (this.hojuGrowth == HojuGrowthType.NO) return 0

        const growth = (this.hojuGrowth instanceof Array) ? this.hojuGrowth : hojuGrowthRateMap[this.hojuGrowth]
        const hojuBar: [number, number] = [bar[0] * growth[0] * lv, bar[1] * growth[0] * lv]
        const hojuCap = this.cap + growth[1] * lv
        return this.calcBase(hojuBar, sd, hojuCap)
    }
}

const growthRateMap: Record<GrowthType, ArbitraryGrowth> = {
    ATK: [0.05, 0.02],
    HEAL: [0.05, 0.02],
    BUFF: [0.03, 0.02],
    DEBUFF: [0.05, 0.02],
    FIXED: [0, 0],
}

const hojuGrowthRateMap: Record<HojuGrowthType, ArbitraryHojuGrowth> = {
    ATK: [0.02, 20],
    HEAL: [0.06, 60],
    BUFF: [0.04, 60],
    DEBUFF: [0.02, 20],
    CRIT: [0.02, 60],
    NO: [0, 0],
}
