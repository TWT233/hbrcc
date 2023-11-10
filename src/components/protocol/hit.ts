import {Character} from "./character";
import {Modifier} from "./modifier/modifier";
import {Enemy} from "./enemy";

export class Hit {
    char: Character
    enemy: Enemy

    mods: Modifier[]

    calculate(): number {
        return 0
    }
}
