<script setup lang="ts">
import {SKillCall} from "@/model/skill";
import {querySkill, querySkillName} from "@/data/SKILLS";
import {Effect} from "@/model/effect";

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
</script>

<template>
  <v-card>
    <div class="d-flex flex-nowrap justify-space-between">
      <div>
        <v-card-title>{{ querySkillName(call.callee) }}</v-card-title>
        <v-card-subtitle v-for="effect in querySkill(call.callee)">{{ getEffectDesc(effect) }}</v-card-subtitle>
      </div>
      <v-btn icon="mdi-pencil"></v-btn>
    </div>
  </v-card>
</template>

<style scoped>

</style>