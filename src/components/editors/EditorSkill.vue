<script lang="ts" setup>
import {defineEmits, defineProps} from "vue";

import {Skill} from "@/components/model/skill";
import ViewMod from "@/components/ViewMods.vue";


const props = defineProps<{
  skill: Skill,
}>()

const emit = defineEmits<{
  update: [
    skill: Skill,
  ]
}>()

function addMod() {
}

function deleteMod(ii, index) {
  ii.splice(index, 1)
}
</script>

<template>
  <v-card elevation="8" title="Skill" variant="outlined">
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
      <v-row>
        <v-col>
          <ViewMod v-model:mods="skill.presetModifiers" title="Preseted Buffs"></ViewMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>