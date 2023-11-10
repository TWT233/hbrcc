import {MainType, Modifier} from "./modifier";

enum ATKSubType {
    Default
}

class DefaultATK implements Modifier {
    readonly type = [MainType.ATK, ATKSubType.Default]

    value: number
}