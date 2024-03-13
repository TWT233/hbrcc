<script lang="ts" setup>

import {useTeamStore} from "@/components/state/team";
import {computed} from "vue";
import {STYLE_SKILLS} from "@/data/styles";

const team = useTeamStore()

const skillList = computed(() => {
  return team.team.members.map(m => STYLE_SKILLS[m]).flat().filter(v => !!v)
})

</script>

<template>
  <v-card>
    <div>
      {{ skillList }}
    </div>
  </v-card>
</template>

<style scoped>

</style>