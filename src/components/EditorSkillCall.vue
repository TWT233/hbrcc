<script lang="ts" setup>
import SelectorSkill from "@/components/SelectorSkill.vue";
import NumberField from "@/components/utils/NumberField.vue";
import DialogChip from "@/components/utils/DialogChip.vue";
import {SKillCall} from "@/model/skill";
import {computed, inject} from "vue";
import {querySkill} from "@/data/skills";
import {Stat} from "@/model/types";

const props = defineProps<{
  call: SKillCall
  type: "MOD" | "DMG"
}>()

const emit = defineEmits<{
  'update:call': [
    calls: SKillCall
  ]
}>()

const border = inject<() => number>('border')

const skill = computed(() => querySkill(props.call.callee))
const base = computed(() => skill.value
    .map(e => Object.keys(e.base))
    .flat()
    .filter((v, i, a) => i === a.indexOf(v))
    .map(s => s as Stat)
)
</script>

<template>
  <v-card width="auto">
    <v-toolbar title="Edit Skill"></v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <SelectorSkill v-model:callee="call.callee" :type="type"></SelectorSkill>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <NumberField v-model="call.param.lv" label="Skill Level"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="call.param.hoju" label="Hoju Level"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in base">
          <NumberField v-model="call.param.stat[i]" :label="i"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in skill">
          <DialogChip :text="i.desc(call.param,border())"></DialogChip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>