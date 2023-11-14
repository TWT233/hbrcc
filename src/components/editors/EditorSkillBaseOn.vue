<script setup lang="ts">

import {Stat, StatMap} from "@/model/types";
import NumberField from "@/components/utils/NumberField.vue";

const props = defineProps<{
  baseOn: Partial<StatMap>
}>()

const emit = defineEmits<{
  'update:baseOn': [
    baseOn: Partial<StatMap>,
  ]
}>()

function updateBaseOn(stat, value) {
  props.baseOn[stat] = value
}
</script>

<template>
  <v-card>
    <v-toolbar title="Skill Base On"></v-toolbar>
    <v-container>
      <v-row>
        <v-col v-for="i in Object.keys(Stat)" :key="i">
          <NumberField :model-value="baseOn[i]||0"
                       @update:model-value="value=>updateBaseOn(i,value)"
                       :label="i"></NumberField>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>