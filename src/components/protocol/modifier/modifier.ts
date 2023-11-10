export interface Modifier {
    readonly type: [MainType, number]
    readonly value: number
}

export enum MainType {
    ATK,
}