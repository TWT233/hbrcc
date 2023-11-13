<script setup lang="ts">
import {Stat} from "@/model/types";
import NumberField from "@/components/utils/NumberField.vue";

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
          <NumberField v-model="stat[i]" :label="i"></NumberField>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>