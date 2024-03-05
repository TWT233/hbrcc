import {defineStore} from "pinia"
import {Characters} from "@/data/characters";
import {ref} from "vue";

export const useTeamStore = defineStore('team', () => {
    const members = ref<(Characters | null)[]>(Array.from({length: 6}, () => null))

    function pushMember(member: Characters): boolean {
        if (members.value.length >= 6) {
            return false
        }
        members.value.push(member)
        return true
    }

    function editMember(index: number, member: Characters | null): boolean {
        if (index < 0 || index >= members.value.length) {
            return false
        }
        members.value[index] = member
        return true
    }

    return {
        members, pushMember, editMember,
    }
})
