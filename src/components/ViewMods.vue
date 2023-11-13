<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue"

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