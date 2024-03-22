<script lang="ts" setup>

import {computed, ref} from "vue";
import {STYLE_SKILLS, Styles} from "@/data/styles";
import {SkillName} from "@/data/skills";

const props = defineProps<{
  members: Styles[]
}>()

const emit = defineEmits<{
  update: [skills: SkillName[]]
}>()

const skills = ref<SkillName[]>([])

const acceptable = computed(() => {
  return props.members.map(m => STYLE_SKILLS[m]).flat().filter(v => !!v)
})

</script>

<template>
  <v-card>
    <div>
      {{ acceptable }}
    </div>
    <v-container>
      <v-row>
        <v-col>
          
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>