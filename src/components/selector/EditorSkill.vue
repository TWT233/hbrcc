<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

import {Skill} from "@/components/model/skill";


const props = defineProps<{
  skill: Skill,
}>()

const emit = defineEmits<{
  update: [
    skill: Skill,
  ]
}>()
</script>

<template>
  <v-card elevation="8" variant="outlined" title="Skill">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="skill.cap" label="Skill cap" type="number"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="skill.bar[0]" label="Min DMG" type="number"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="skill.bar[1]" label="Max DMG" type="number"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>