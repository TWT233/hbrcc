import {
    ArbitraryGrowth,
    ArbitraryHojuGrowth,
    BorderType,
    GrowthType,
    HojuGrowthType,
    ModMain,
    ModSub,
    ModType,
    StatMap
} from "@/model/types";
import {SkillParam} from "@/model/skill";

export class Effect {
    bar: [number, number] // [min, max]
    cap: number

    base: Partial<StatMap> // eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX

    mt: ModType | undefined = undefined // undefined: atk skill
    bdt: BorderType

    growth: GrowthType | ArbitraryGrowth
    hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth

    constructor(
        bar: [number, number],
        cap: number,
        base: Partial<StatMap>,
        mt: [ModMain, ModSub] | undefined,
        bdt: BorderType = BorderType.NO,
        growth: GrowthType | ArbitraryGrowth = GrowthType.FIXED,
        hojuGrowth: HojuGrowthType | ArbitraryHojuGrowth = HojuGrowthType.NO,
    ) {
        this.bar = bar;
        this.cap = cap;
        this.base = base;
        this.mt = mt;
        this.bdt = bdt;
        this.growth = growth;
        this.hojuGrowth = hojuGrowth;
    }

    get isDMG(): boolean {
        return this.mt == undefined
    }

    desc(p: SkillParam, border: number): string {
        const bar = this.calcBar(p.lv)
        const hojuBar = this.calcHojuBar(bar, p.hoju, this.arbiHojuGrowth[0])

        const value = `${this.value(p, border).toFixed(2)}` +
            ` (${(bar[0] + hojuBar[0]).toFixed(2)}, ${(bar[1] + hojuBar[1]).toFixed(2)})`
        return (this.mt == undefined) ? `DMG: ${value}` : `${this.mt[0]} | ${this.mt[1]} | ${value}`
    }

    value(p: SkillParam, border: number): number {
        if (this.growth == GrowthType.FIXED) return this.bar[0]

        const bar = this.calcBar(p.lv)
        const sd = this.calcES(p.stat) - (this.bdt == BorderType.NO ? 0 : border)

        return this.calcBase(bar, sd, this.cap) + this.calcHoju(bar, sd, p.hoju)
    }

    calcBar(lv: number): [number, number] {
        const growth = this.arbiGrowth
        return [this.bar[0] * (1 + growth[0] * (lv - 1)), this.bar[1] * (1 + growth[1] * (lv - 1))]
    }

    get arbiGrowth(): ArbitraryGrowth {
        return (this.growth instanceof Array) ? this.growth : growthRateMap[this.growth]
    }

    calcES(stat: Partial<StatMap>): number {
        let all = 0
        let multiplier = 0
        for (const s in this.base) {
            all += stat[s] * this.base[s]
            multiplier += this.base[s]
        }
        return multiplier == 0 ? 0 : all / multiplier
    }

    calcBase(bar: [number, number], sd: number, cap: number) {
        if (sd < -cap / 2) {
            return 0
        }
        if (sd <= 0) {
            return (sd + cap / 2) * bar[0] / (cap / 2)
        }
        if (sd < cap) {
            return bar[0] + (bar[1] - bar[0]) * sd / cap
        }
        return bar[1]
    }

    calcHoju(bar: [number, number], sd: number, lv: number): number {
        if (this.hojuGrowth == HojuGrowthType.NO) return 0

        const growth = this.arbiHojuGrowth
        const hojuBar = this.calcHojuBar(bar, lv, growth[0])
        const hojuCap = this.cap + growth[1] * lv
        return this.calcBase(hojuBar, sd, hojuCap)
    }

    get arbiHojuGrowth(): ArbitraryHojuGrowth {
        return (this.hojuGrowth instanceof Array) ? this.hojuGrowth : hojuGrowthRateMap[this.hojuGrowth]
    }

    calcHojuBar(bar: [number, number], lv: number, growth: number): [number, number] {
        return [bar[0] * growth * lv, bar[1] * growth * lv]
    }
}

export class CustomEffect extends Effect {
    constructor(value: number, mt: ModType) {
        super([value, value], 0, {}, mt);
    }
}

const growthRateMap: Record<GrowthType, ArbitraryGrowth> = {
    ATK: [0.05, 0.02],
    HEAL: [0.05, 0.02],
    BUFF: [0.03, 0.02],
    DEBUFF: [0.05, 0.02],
    FIXED: [0, 0],
    NO: [0, 0],
}

const hojuGrowthRateMap: Record<HojuGrowthType, ArbitraryHojuGrowth> = {
    ATK: [0.02, 20],
    HEAL: [0.06, 60],
    BUFF: [0.04, 60],
    DEBUFF: [0.02, 20],
    CRIT: [0.02, 60],
    NO: [0, 0],
}
