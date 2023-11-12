<script lang="ts" setup>
import {defineEmits, defineProps} from "vue"

import ShowMod from "@/components/selector/EditorDefaultMod.vue";

import {DefaultATKBuff, Modifier} from "@/components/model/modifier/modifier";
import {ATK, MainTypes} from "@/components/model/modifier/types";

const props = defineProps<{
  mods: Record<MainTypes, Modifier[]>
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
    <v-toolbar>
      <v-toolbar-title>Buffs & DeBuffs</v-toolbar-title>
      <v-btn icon="mdi-plus" @click="addMod()"></v-btn>
    </v-toolbar>
    <v-container>
      <v-row v-for="(mt,index) in mods" :key="mt">
        <v-divider v-if="index>0&&mt.length>0"></v-divider>
        <v-col v-for="i in mt.length" :key="i" cols="auto">
          <ShowMod v-model:mod="mt[i-1]" @del="deleteMod(mt,i-1)"></ShowMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>