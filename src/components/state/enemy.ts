import {defineStore} from "pinia"
import {ref} from "vue";
import {Enemy} from "@/model/enemy";

export const useEnemyStore = defineStore('enemy', () => {
    const enemy = ref(new Enemy())

    return {
        enemy: enemy,
    }
})
