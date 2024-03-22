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

const dialog = ref(false)

</script>

<template>
  <v-card max-width="400">
    <div>
      {{ acceptable }}
    </div>
    <v-toolbar title="Skills">
      <template v-slot:append>
        <v-btn icon="mdi-plus" @click="dialog=true"></v-btn>
      </template>
    </v-toolbar>
    <v-container>
      <v-row v-for="s in skills">
        <v-col>
          {{ s.toString() }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>