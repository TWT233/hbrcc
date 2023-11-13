<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue";
import {ATK, Modifier} from "@/model/modifier";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  'update:mod': [mod: Modifier]
}>()

const value = computed({
  get: () => props.mod.value,
  set: (value) => props.mod.value = Number(value)
})
</script>

<template>
  <v-card title="ATK Buff">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-combobox v-model="mod.sub" :items="Object.keys(ATK)" label="sub"></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="value" label="value" type="number"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>