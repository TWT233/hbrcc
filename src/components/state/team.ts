import {defineStore} from "pinia"
import {ref} from "vue";
import {Team} from "@/model/team";

export const useTeamStore = defineStore('team', () => {
    const team = ref(new Team())
    
    return {
        team,
    }
})
