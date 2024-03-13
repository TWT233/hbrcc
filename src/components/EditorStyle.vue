<script lang="ts" setup>
import {Styles} from "@/data/styles";
import NumberField from "@/components/utils/NumberField.vue";
import {newStatMap} from "@/model/types";
import {Style} from "@/data/localstorage";
import {computed, ref, watch} from "vue";

const style = defineModel<Styles>('style')
let stat = ref(fetchStat(style.value))

watch(style, (n, _) => {
  stat.value = fetchStat(n)
  console.log("watched style change: ", n)
})

watch(stat, (n, _) => {
  Style(style.value).store(n)
}, {deep: true})

function fetchStat(s: Styles) {
  const remote = Style(s).fetch()
  if (remote) {
    return remote
  }
  return newStatMap()
}

const title = computed(() => style.value?.toString() || 'None')

let dialog = ref(false)

function onStyleSelected(n: Styles) {
  style.value = n
  dialog.value = false
}

</script>

<template>
  <v-card variant="outlined">
    <v-toolbar color="rgba(0, 0, 0, 0)">
      <v-toolbar-title class="text-h6">
        {{ title }}
      </v-toolbar-title>
      <template v-slot:append>
        <v-btn icon="mdi-pencil" @click="dialog=true"></v-btn>
      </template>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col v-for="k in ['STR','DEX','CON','SPR','WIS','LUK']" cols="6">
          <NumberField v-model="stat[k]" :label="k"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-toolbar title="Choose style"></v-toolbar>
      <v-container>
        <v-row>
          <v-col v-for="style in Styles" :key="style" cols="12">
            <v-btn @click="onStyleSelected(style)">{{ style }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>