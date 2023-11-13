<script setup lang="ts">
import {defineProps} from "vue"
import {Hit} from "@/model/hit";

const props = defineProps<{
  hit: Hit,
}>()

const emit = defineEmits<{
  'update:hit': [
    hit: Hit
  ]
}>()
</script>

<template>
  <v-card>
    <v-toolbar title="Result"></v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <v-card-title>Damage</v-card-title>
          <v-card-text>{{ hit.calculate() }}</v-card-text>
        </v-col>
        <v-col>
          <v-switch v-model="hit.isCrit" label="Critical" color="primary"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text>current mods:{{ hit.modMap }}</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>