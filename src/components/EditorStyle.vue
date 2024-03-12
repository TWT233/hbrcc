<script setup lang="ts">
import {Styles} from "@/data/styles";
import NumberField from "@/components/utils/NumberField.vue";
import {newStatMap} from "@/model/types";
import {Style} from "@/data/localstorage";
import {computed, ref, watchEffect} from "vue";

const style = defineModel<Styles>('style')

let stat = ref(newStatMap())

if (style) {
  const remote = Style(style.value).fetch()
  if (remote) {
    stat.value = remote
  }
}

watchEffect(() => {
  Style(style.value).store(stat.value)
  console.log('Style updated', style.value, stat.value)
})

const title = computed(() => style.value?.toString() || 'None')

let dialog = ref(false)

function onEditStyle() {
  dialog.value = true
}

function onStyleSelected(n: Styles) {
  style.value = n
  console.log('Style selected', n)
  dialog.value = false
}

</script>

<template>
  <v-card variant="outlined">
    <v-img src="https://hbr.quest/hbr/AliceAOnePiece_R3.webp" height="50" cover>
      <v-toolbar color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h6">
          {{ title }}
        </v-toolbar-title>
        <template v-slot:append>
          <v-btn icon="mdi-home" @click="onEditStyle"></v-btn>
        </template>
      </v-toolbar>
    </v-img>

    <v-container>
      <v-row>
        <v-col cols="6" v-for="k in ['STR','DEX','CON','SPR','WIS','LUK']">
          <NumberField v-model="stat[k]" :label="k"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-dialog max-width="600" v-model="dialog">
    <v-card>
      <v-toolbar title="Choose style"></v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" v-for="style in Styles" :key="style">
            <v-btn @click="onStyleSelected(style)">{{ style }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>