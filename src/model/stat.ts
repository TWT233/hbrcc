import {StatType} from "@/model/types";

export type Stat = { [t in StatType]: number }

export function newStatMap(): Stat {
    return {
        CON: 0, DEX: 0, LUK: 0, SPR: 0, STR: 0, WIS: 0
    }
}