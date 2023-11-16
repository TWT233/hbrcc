<script lang="ts" setup>

import {SKillCall} from "@/model/skill";
import {SkillName} from "@/data/skills";
import {newStatMap} from "@/model/types";
import ShowSkillCall from "@/components/ShowSkillCall.vue";

const props = defineProps<{
  calls: SKillCall[]
}>()

const emit = defineEmits<{
  'update:calls': [
    calls: SKillCall[]
  ]
}>()

function addCall() {
  props.calls.push({callee: SkillName.LShanhuaSkill51, param: {lv: 13, hoju: 5, stat: newStatMap()}})
}


</script>

<template>
  <v-card>
    <v-toolbar title="Skills">
      <v-btn icon="mdi-plus" @click="addCall"></v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="(call, i) in calls" :key="i">
        <ShowSkillCall v-model:call="calls[i]"></ShowSkillCall>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>

</style>