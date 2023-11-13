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
