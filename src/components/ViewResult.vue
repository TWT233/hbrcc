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
      <v-list>
        <v-list-item>

          <v-row>
            <v-col>
              <v-card-title>Damage</v-card-title>
              <v-card-text>{{ hit.calculate() }}</v-card-text>
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
          <v-card-title>Current Mods</v-card-title>
          <v-card-text>{{ hit.mergeMods() }}</v-card-text>
        </v-list-item>

      </v-list>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>