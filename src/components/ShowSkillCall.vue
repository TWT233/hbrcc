<script setup lang="ts">
import {SKillCall} from "@/model/skill";
import {querySkill, querySkillName} from "@/data/skills";
import {Effect} from "@/model/effect";
import {computed, inject, ref} from "vue";
import SelectorSkill from "@/components/SelectorSkill.vue";
import NumberField from "@/components/utils/NumberField.vue";
import DialogChip from "@/components/utils/DialogChip.vue";
import {Stat} from "@/model/types";

const props = defineProps<{
  call: SKillCall
}>()

const emit = defineEmits<{
  'update:call': [
    calls: SKillCall
  ]
}>()

function getEffectDesc(e: Effect): string {
  return `${e.mt[0]} | ${e.mt[1]} | ${e.bar[0]}, ${e.bar[1]}`
}

const border = inject<number>('border')

const dialog = ref(false)

const ns = computed(() => querySkill(props.call.callee))
const base = computed(() => ns.value.map(e => Object.keys(e.base)).flat().filter((v, i, a) => i === a.indexOf(v)).map(s => s as Stat))
const param = computed(() => props.call.param)
</script>

<template>
  <v-card>
    <div class="d-flex flex-nowrap justify-space-between align-center">
      <div>
        <v-card-title>{{ querySkillName(call.callee) }}</v-card-title>
        <v-card-subtitle v-for="effect in querySkill(call.callee)">{{ getEffectDesc(effect) }}</v-card-subtitle>
      </div>
      <v-btn @click="dialog=true" icon="mdi-pencil"></v-btn>

      <v-dialog v-model="dialog" width="auto">
        <v-card width="auto">
          <v-toolbar title="Edit Skill"></v-toolbar>
          <v-container>
            <v-row>
              <v-col>
                <SelectorSkill v-model:callee="call.callee"></SelectorSkill>
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
      </v-dialog>
    </div>
  </v-card>
</template>

<style scoped>

</style>