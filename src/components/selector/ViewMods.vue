<script lang="ts" setup>
import {defineEmits, defineProps} from "vue"

import ViewSingleMod from "@/components/selector/ViewSingleMod.vue";

import {DefaultATKBuff, Modifier} from "@/components/model/modifier/modifier";
import {ATK, MainTypes} from "@/components/model/modifier/types";

const props = defineProps<{
  mods: Record<MainTypes, Modifier[]>
  title: string
}>()

const emit = defineEmits<{
  update: [
    mods: Record<MainTypes, Modifier[]>,
  ]
}>()

function addMod() {
  props.mods[MainTypes.ATK].push(new DefaultATKBuff(ATK.NORMAL, 0.5))
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
      <v-row v-for="mod in mods" :key="mod">
        <v-col v-for="i in mod.length" :key="i" cols="auto">
          <ViewSingleMod v-model:mod="mod[i-1]" @del="deleteMod(mod,i-1)"></ViewSingleMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>