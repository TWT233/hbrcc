export interface Modifier {
    readonly type: ModifierType
    readonly value: number
}

export type ModifierType = [MainType, any] // [MainType, SubType]
// SubType is defined according to specific MainType implements, thus typing with any here

export enum MainType {
    ATK,
    ON_ENEMY_TYPE,
}