import {StatMap} from "@/model/types";
import {Modifier} from "@/model/modifier";

export interface Effect {
    bar: [number, number] // [min, max]
    cap: number
    baseOn: Partial<StatMap>// eg: {[STR]: 2, [DEX]: 1} means 2*STR+1*DEX
}

export class ModEffect implements Effect {
    bar: [number, number];
    baseOn: Partial<StatMap>;
    cap: number;

    constructor(bar: [number, number], baseOn: Partial<StatMap>, cap: number) {
        this.bar = bar;
        this.baseOn = baseOn;
        this.cap = cap;
    }

    produce(lv: number, bd: number, stat: StatMap): Modifier {

    }
}