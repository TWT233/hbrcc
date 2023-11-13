<script lang="ts" setup>
import {defineEmits, defineProps} from "vue"

import ShowSingleMod from "@/components/ShowSingleMod.vue";

import {ATK, MainTypes, Modifier} from "@/model/modifier";

const props = defineProps<{
  modMap: Record<MainTypes, Modifier[]>
  title: string
}>()

const emit = defineEmits<{
  update: [
    mods: Record<MainTypes, Modifier[]>,
  ]
}>()

function addMod() {
  props.modMap[MainTypes.ATK].push(new Modifier(MainTypes.ATK, ATK.NORMAL, 0.5))
}

function deleteMod(ii, index) {
  ii.splice(index, 1)
}
</script>

<template>
  <v-card>
    <v-toolbar :title="title">
      <v-btn icon="mdi-plus" @click="addMod()"></v-btn>
    </v-toolbar>
    <v-container>
      <v-row v-for="mods in modMap" :key="mods">
        <v-col v-for="i in mods.length" :key="i" cols="auto">
          <ShowSingleMod v-model:mod="mods[i-1]" @del="deleteMod(mods,i-1)"></ShowSingleMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>