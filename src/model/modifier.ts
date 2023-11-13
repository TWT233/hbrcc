import {ModMain, ModSub} from "./types";

export class Modifier {
    main: ModMain
    sub: ModSub
    value: number

    constructor(main: ModMain, sub: ModSub, value: number) {
        this.main = main;
        this.sub = sub;
        this.value = value;
    }
}

export const COLOR_MAP = {
    [ModMain.ATK]: "red-darken-4",
    [ModMain.DEF]: "blue-darken-4",
    [ModMain.FRAGILE]: "light-blue-darken-4",
    [ModMain.EnemyType]: "lime-darken-4",
}