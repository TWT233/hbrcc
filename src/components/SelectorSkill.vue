<script lang="ts" setup>

import {SkillName, SKILLS_CATE} from "@/data/skills";
import {Skill} from "@/model/skill";
import {computed, ref} from "vue";

const props = defineProps<{
  callee: SkillName | Skill
}>()

const emit = defineEmits<{
  'update:callee': [
    callee: SkillName | Skill
  ]
}>()

let category = ref('CUSTOM')

const wrappedCallee = computed({
  get: () => props.callee,
  set: (value) => emit('update:callee', value),
})
</script>

<template>
  <v-card elevation="8" title="Skill">
    <v-container>
      <v-row>
        <v-col cols="auto">
          <v-tabs v-model="category" direction="vertical">
            <v-tab v-for="i in Object.keys(SKILLS_CATE.MOD)" :value="i">{{ i }}</v-tab>
            <v-tab value="CUSTOM">CUSTOM</v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-window :model-value="category">
            <v-window-item v-for="i in Object.keys(SKILLS_CATE.MOD)" :value="i">
              <v-radio-group v-model="wrappedCallee">
                <v-radio v-for="j in SKILLS_CATE.MOD[i]" :label="j" :value="j"></v-radio>
              </v-radio-group>
            </v-window-item>
            <v-window-item value="CUSTOM">
              <v-card title="Custom Skill"></v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>