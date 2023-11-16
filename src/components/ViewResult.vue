<script setup lang="ts">
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
      <v-list>
        <v-list-item>
          <v-row>
            <v-col cols="auto">
              <v-card-title>Damage</v-card-title>
              <v-card-text>{{ hit.calculate().toFixed(1) }}</v-card-text>
            </v-col>
            <v-col>
              <v-switch v-model="hit.isCrit" label="Critical" color="primary"></v-switch>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-divider/>
        </v-list-item>

        <v-list-item>
          <v-card-title>Base Damage</v-card-title>
          <v-card-text>{{ hit.getBaseDMG() }}</v-card-text>
          <v-card-title>Current Mods</v-card-title>
          <p v-for="m in hit.getMods()"> {{ m.value.toFixed(2) }} | {{ m.main }} | {{ m.sub }}</p>
        </v-list-item>

      </v-list>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>