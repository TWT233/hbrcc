<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

import EditorStat from "@/components/editors/EditorStat.vue";
import EditorSkill from "@/components/editors/EditorSkill.vue";

import {Character} from "@/components/model/character";


const props = defineProps<{
  char: Character,
}>()

const emit = defineEmits<{
  update: [
    char: Character,
  ]
}>()
</script>

<template>
  <v-card>
    <v-toolbar title="Character"></v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <EditorStat v-model:stat="char.stat"></EditorStat>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <EditorSkill v-model:skill="char.skill"></EditorSkill>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>