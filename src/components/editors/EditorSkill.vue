<script lang="ts" setup>
import {ref} from "vue";

import ViewMod from "@/components/ViewMods.vue";

import {Skill} from "@/model/skill";
import NumberField from "@/components/utils/NumberField.vue";
import {Stat} from "@/model/types";
import DialogChip from "@/components/utils/DialogChip.vue";
import EditorSkillBaseOn from "@/components/editors/EditorSkillBaseOn.vue";
import {sk} from "vuetify/locale";

const props = defineProps<{
  skill: Skill,
}>()

const emit = defineEmits<{
  update: [
    skill: Skill,
  ]
}>()

function getBaseString(): string {
  let result = []
  for (const stat in props.skill.baseOn) {
    result.push(`${stat} x ${props.skill.baseOn[stat]}`)
  }
  return result.join(' + ')
}

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
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <DialogChip :text="`Base on: ${ getBaseString() }`">
            <EditorSkillBaseOn v-model:base-on="skill.baseOn"></EditorSkillBaseOn>
          </DialogChip>
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