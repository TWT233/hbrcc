<script setup lang="ts">
import {Stat, StatMap} from "@/model/types";
import NumberField from "@/components/utils/NumberField.vue";

const props = defineProps<{
  stat: StatMap,
}>()

const emit = defineEmits<{
  update: [
    stat: StatMap,
  ]
}>()
</script>

<template>
  <v-card elevation="8" variant="outlined" title="Stat">
    <v-container>
      <v-row>
        <v-col v-for="i in Object.keys(Stat)" :key="i">
          <NumberField v-model="stat[i]" :label="i"></NumberField>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>