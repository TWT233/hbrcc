export class Enemy {
    border: number = 320

    eleWeak: number = 0
    phyWeak: number = 0

    des: number = 1 // Destruction

    type: EnemyType = EnemyType.HP
}

export enum EnemyType {
    HP = "HP",
    DP = "DP",
}
