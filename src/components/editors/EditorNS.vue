<script lang="ts" setup>
import {computed, ref} from "vue";

import {NS} from "@/model/effect";
import {SkillName, SKILLS, SKILLS_MOD} from "@/data/skills";
import {SkillData} from "@/data/localstorage";
import NumberField from "@/components/utils/NumberField.vue";
import {Stat} from "@/model/types";
import DialogChip from "@/components/utils/DialogChip.vue";

const props = defineProps<{
  selected: SkillName | NS
  data: SkillData
  border: number
}>()

const emit = defineEmits<{
  'update:selected': [
    selected: SkillName | NS,
  ],
  'update:data': [
    data: SkillData,
  ]
}>()

let category = ref('CUSTOM')

const wrappedSelected = computed({
  get: () => (props.selected instanceof Array) ? '' : props.selected,
  set: (value: SkillName) => emit('update:selected', value)
})

const ns = computed(() => (props.selected instanceof Array) ? props.selected : SKILLS[props.selected])
const base = computed(() => ns.value.map(e => Object.keys(e.base)).flat().filter((v, i, a) => i === a.indexOf(v)).map(s => s as Stat))
</script>

<template>
  <v-card elevation="8" title="Skill">
    <v-container>
      <v-row>
        <v-col cols="auto">
          <v-tabs v-model="category" direction="vertical">
            <v-tab v-for="i in Object.keys(SKILLS_MOD)" :value="i">{{ i }}</v-tab>
            <v-tab value="CUSTOM">CUSTOM</v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-window :model-value="category">
            <v-window-item v-for="i in Object.keys(SKILLS_MOD)" :value="i">
              <v-radio-group v-model="wrappedSelected">
                <v-radio v-for="j in SKILLS_MOD[i]" :label="j" :value="j"></v-radio>
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
          <NumberField v-model="data.lv" label="Skill Level"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="data.hoju" label="Hoju Level"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in base">
          <NumberField v-model="data.stat[i]" :label="i"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in ns">
          <DialogChip :text="`${i.mt[0]} | ${i.mt[1]} | ${i.value(data.lv,data.hoju,data.stat,border)}`"></DialogChip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>