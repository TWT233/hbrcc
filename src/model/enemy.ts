import {EnemyType} from "./types";

export class Enemy {
    border: number = 320

    eleWeak: number = 0
    phyWeak: number = 0

    des: number = 1 // Destruction

    type: EnemyType = EnemyType.HP

    get weak(): number {
        return (1 + this.eleWeak) * (1 + this.phyWeak)
    }
}

