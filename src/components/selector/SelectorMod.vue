<script setup lang="ts">
import {defineProps, defineEmits} from "vue"

import ShowMod from "@/components/selector/ShowDefaultMod.vue";

import {Modifier, DefaultATKBuff} from "@/components/model/modifier/modifier";
import {ATK} from "@/components/model/modifier/types";

const props = defineProps<{
  selectedMods: Modifier[]
}>()

const emit = defineEmits<{
  update: [
    selectedMods: Modifier[],
  ]
}>()

function addMod() {
  props.selectedMods.push(new DefaultATKBuff(ATK.NORMAL, 0.5))
}

function deleteMod(index) {
  props.selectedMods.splice(index, 1)
}
</script>

<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Buffs & DeBuffs</v-toolbar-title>
      <v-btn icon="mdi-plus" @click="addMod()"></v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col v-for="i in selectedMods.length" :key="i" cols="auto">
          <ShowMod v-model:mod="selectedMods[i-1]" @del="deleteMod(i-1)"></ShowMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>