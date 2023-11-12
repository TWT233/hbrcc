<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

import {Stat} from "@/model/character";

const props = defineProps<{
  stat: Record<Stat, number>,
}>()

const emit = defineEmits<{
  update: [
    stat: Record<Stat, number>,
  ]
}>()
</script>

<template>
  <v-card elevation="8" variant="outlined" title="Stat">
    <v-container>
      <v-row>
        <v-col v-for="i in Object.keys(Stat)" :key="i">
          <v-text-field v-model="stat[i]" :label="i"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>