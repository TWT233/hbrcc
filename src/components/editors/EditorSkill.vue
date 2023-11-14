<script lang="ts" setup>
import {ref} from "vue";

import ViewMod from "@/components/ViewMods.vue";

import {Skill} from "@/model/skill";
import NumberField from "@/components/utils/NumberField.vue";

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
          <NumberField v-model="skill.cap" label="Skill Cap"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="skill.bar[0]" label="Min DMG"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="skill.bar[1]" label="Max DMG"></NumberField>
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
      <v-row>
        <v-col cols="12">
          <ViewMod v-model:mods="skill.presetModifiers" title="Preseted Buffs"></ViewMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>