<script lang="ts" setup>
import {ref} from "vue";

import ViewMod from "@/components/ViewMods.vue";

import {Skill} from "@/model/skill";

const props = defineProps<{
  skill: Skill,
}>()

const emit = defineEmits<{
  update: [
    skill: Skill,
  ]
}>()

const dialog = ref(false)

</script>

<template>
  <v-card elevation="8" title="Skill" variant="outlined">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="skill.cap" label="Skill Cap" type="number"></v-text-field>
          <v-text-field v-model.number="skill.bar[0]" label="Min DMG" type="number"></v-text-field>
          <v-text-field v-model.number="skill.bar[1]" label="Max DMG" type="number"></v-text-field>
        </v-col>
        <v-col>
          <v-chip @click="dialog=true">
            <v-icon start icon="mdi-pencil"></v-icon>
            Base on
            <v-dialog v-model="dialog" width="auto">
              <v-card></v-card>
            </v-dialog>
          </v-chip>
        </v-col>
      </v-row>
      <v-col cols="12">
        <ViewMod v-model:mods="skill.presetModifiers" title="Preseted Buffs"></ViewMod>
      </v-col>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>