<script lang="ts" setup>
import SelectorSkill from "@/components/SelectorSkill.vue";
import NumberField from "@/components/utils/NumberField.vue";
import DialogChip from "@/components/utils/DialogChip.vue";
import {isSkillName, Skill, SKillCall, SkillParam} from "@/model/skill";
import {computed, inject, onMounted} from "vue";
import {querySkill, SkillName} from "@/data/skills";
import {Stat} from "@/model/types";
import {fetchSkillParam, storeSkillParam} from "@/data/localstorage";

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

function storeSP() {
  if (isSkillName(props.call.callee)) {
    storeSkillParam(props.call.callee as SkillName, props.call.param)
  }
}

function loadSP(callee: SkillName | Skill) {
  if (isSkillName(callee)) {
    const res = fetchSkillParam(callee as SkillName)
    res && (props.call.param = res)
  }
}

onMounted(() => {
  loadSP(props.call.callee)
})
</script>

<template>
  <v-card width="auto">
    <v-toolbar title="Edit Skill"></v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <SelectorSkill v-model:callee="call.callee"
                         @update:callee="callee=>loadSP(callee)"
                         :type="type">
          </SelectorSkill>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <NumberField v-model="call.param.lv" @update:model-value="storeSP()" label="Skill Level"></NumberField>
        </v-col>
        <v-col>
          <NumberField v-model="call.param.hoju" @update:model-value="storeSP()" label="Hoju Level"></NumberField>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in base">
          <NumberField v-model="call.param.stat[i]" @update:model-value="storeSP()" :label="i"></NumberField>
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