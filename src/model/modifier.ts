import {ModMain, ModMap, ModSub, ModType} from "./types";

export class Modifier {
    value: number
    type: ModType

    constructor(type: ModType, value: number) {
        this.value = value;
        this.type = type
    }

    get main(): ModMain {
        return this.type[0]
    }

    set main(v) {
        this.type[0] = v
    }

    get sub(): ModSub {
        return this.type[1]
    }

    set sub(v) {
        this.type[1] = v
    }

    join(mm: ModMap): ModMap {
        if (!(this.main in mm)) {
            mm[this.main] = []
        }
        mm[this.main].push(this)
        return mm
    }
}
