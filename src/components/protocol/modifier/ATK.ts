import {MainType, Modifier, ModifierType} from "./modifier";

enum ATKSubType {
    Default
}

class DefaultATKBuff implements Modifier {
    readonly type: ModifierType = [MainType.ATK, ATKSubType.Default]
    value: number
}