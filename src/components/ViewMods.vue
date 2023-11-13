<script lang="ts" setup>
import {defineEmits, defineProps} from "vue"

import ShowSingleMod from "@/components/ShowSingleMod.vue";

import {Modifier} from "@/model/modifier";
import {ATK, ModMain} from "@/model/types";

const props = defineProps<{
  mods: Modifier[]
  title: string
}>()

const emit = defineEmits<{
  update: [
    mods: Modifier[],
  ]
}>()

function addMod() {
  props.mods.push(new Modifier(ModMain.ATK, ATK.NORMAL, 0.5))
}

function deleteMod(index) {
  props.mods.splice(index, 1)
}
</script>

<template>
  <v-card>
    <v-toolbar :title="title">
      <v-btn icon="mdi-plus" @click="addMod"></v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col v-for="(mod, i) in mods" :key="mod" cols="auto">
          <ShowSingleMod v-model:mod="mods[i]" @del="deleteMod(i)"></ShowSingleMod>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>