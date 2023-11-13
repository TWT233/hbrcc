<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue"

import ShowSingleMod from "@/components/ShowSingleMod.vue";

import {Modifier} from "@/model/modifier";
import {ATK, ModMain} from "@/model/types";

const props = defineProps<{
  modMap: Record<ModMain, Modifier[]>
  title: string
}>()

const emit = defineEmits<{
  update: [
    mods: Record<ModMain, Modifier[]>,
  ]
}>()

function addMod() {
  props.modMap[ModMain.ATK].push(new Modifier(ModMain.ATK, ATK.NORMAL, 0.5))
}

function deleteMod(ii, index) {
  ii.splice(index, 1)
}


function getMod(main, index) {
  return computed({
    get: () => props.modMap[main][index],
    set: (value: Modifier) => {
      let ori: Modifier = props.modMap[main][index]
      if (ori.main != value.main) {
        props.modMap[main].splice(index, 1)
        props.modMap[value.main].push(value)
      }
    }
  })
}

function wrappedSetMod(main, index, value) {
  let ori: Modifier = props.modMap[main][index]
  if (ori.main != value.main) {
    props.modMap[main].splice(index, 1)
    props.modMap[value.main].push(value)
  }
}
</script>

<template>
  <v-card>
    <v-toolbar :title="title">
      <v-btn icon="mdi-plus" @click="addMod()"></v-btn>
    </v-toolbar>
    <v-container>
      <v-row v-for="(mods,main) in modMap" :key="mods">
        <v-col v-for="i in mods.length" :key="i" cols="auto">
          <ShowSingleMod :mod="mods[i-1]" @update:mod="value=>wrappedSetMod(main,i-1,value)"
                         @del="deleteMod(mods,i-1)"></ShowSingleMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>