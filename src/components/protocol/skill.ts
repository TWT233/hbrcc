import {Modifier} from "./modifier";
import {Stat} from "./character";

export interface Skill {
    requiredStats(): Stat[] // eg: [STR, DEX]

    sd(): [number, number] // [min, max]

    presetModifier(): Modifier
}