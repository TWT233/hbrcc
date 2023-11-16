<script lang="ts" setup>
import {computed, ref} from "vue";

import {querySkill, SKILLS_CATE} from "@/data/skills";
import NumberField from "@/components/utils/NumberField.vue";
import {Stat} from "@/model/types";
import DialogChip from "@/components/utils/DialogChip.vue";
import {SKillCall} from "@/model/skill";

const props = defineProps<{
  call: SKillCall
}>()

const emit = defineEmits<{
  'update:call': [
    call: SKillCall
  ],
}>()

let category = ref('CUSTOM')

const ns = computed(() => querySkill(props.call.callee))
const base = computed(() => ns.value.map(e => Object.keys(e.base)).flat().filter((v, i, a) => i === a.indexOf(v)).map(s => s as Stat))
const param = computed(() => props.call.param)

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
              <v-radio-group v-model="props.call.callee">
                <v-radio v-for="j in SKILLS_CATE.MOD[i]" :label="j" :value="j"></v-radio>
              </v-radio-group>
            </v-window-item>
            <v-window-item value="CUSTOM"></v-window-item>
          </v-window>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <NumberField v-model="param.lv" label="Skill Level"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="param.hoju" label="Hoju Level"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in base">
          <NumberField v-model="param.stat[i]" :label="i"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in ns">
          <DialogChip :text="`${i.mt[0]} | ${i.mt[1]} | ${i.value(param,border)}`"></DialogChip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>