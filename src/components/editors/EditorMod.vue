<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue";

import {Modifier} from "@/model/modifier/modifier";
import {MainTypes} from "@/model/modifier/types";
import EditorModATK from "@/components/editors/EditorModATK.vue";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  'update:mod': [
    mod: Modifier,
  ],
  del: []
}>()

const wrappedMod = computed({
  get: () => props.mod,
  set: value => {
    console.log(22)
    emit('update:mod', value)
  }
})
</script>

<template>
  <v-card>
    <v-toolbar title="Buff Editor">
      <v-btn icon="mdi-delete" @click="$emit('del')"></v-btn>
    </v-toolbar>
    <v-tabs v-model="mod.main">
      <v-tab v-for="i in Object.keys(MainTypes)" :value="i">{{ i }}</v-tab>
    </v-tabs>
    <v-window :model-value="mod.main">
      <v-window-item :value="MainTypes.ATK">
        <EditorModATK v-model:mod="wrappedMod"></EditorModATK>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>

</style>