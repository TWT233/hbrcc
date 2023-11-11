export class Enemy {
    border: number = 320

    eleWeak: number = 0
    phyWeak: number = 0

    type: EnemyType = EnemyType.HP
}

export enum EnemyType {
    HP = "HP",
    DP = "DP",
}
