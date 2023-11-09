export class Modifier {
    type: ModifierType
    value: number

    isUnique: boolean // can be added in spite of stack limit

}

class ModifierType {
    main: MainType
    sub: SubType

    equals(t: ModifierType): boolean {
        return this.main == t.main && this.sub == t.sub
    }
}

enum MainType {
    ATK,
}

enum SubType {
}