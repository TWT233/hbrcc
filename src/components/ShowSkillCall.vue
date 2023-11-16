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


const border = inject<() => number>('border')

const dialog = ref(false)

const skill = computed(() => querySkill(props.call.callee))
const base = computed(() => skill.value
    .map(e => Object.keys(e.base))
    .flat()
    .filter((v, i, a) => i === a.indexOf(v))
    .map(s => s as Stat)
)

function getEffectDesc(e: Effect): string {
  if (e.mt == undefined) {
    return `DMG: ${e.value(props.call.param, border())} (${e.bar[0]}, ${e.bar[1]})`
  }
  return `${e.mt[0]} | ${e.mt[1]} | ${e.value(props.call.param, border())} (${e.bar[0]}, ${e.bar[1]})`
}
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
                <SelectorSkill v-model:callee="call.callee" type="DMG"></SelectorSkill>
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
                <DialogChip :text="getEffectDesc(i)"></DialogChip>
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