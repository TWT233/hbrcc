<script lang="ts" setup>
import {computed} from "vue";

import {Modifier} from "@/model/modifier";
import EditorModATK from "@/components/editors/EditorModATK.vue";
import {ModMain} from "@/model/types";

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
    emit('update:mod', value)
  }
})

const wrappedMain = computed({
  get: () => props.mod.main,
  set: (value: ModMain) => {
    props.mod.main = value
    emit('update:mod', props.mod)
  }
})

</script>

<template>
  <v-card>
    <v-toolbar title="Buff Editor">
      <v-btn icon="mdi-delete" @click="$emit('del')"></v-btn>
    </v-toolbar>
    <v-tabs v-model="wrappedMain">
      <v-tab v-for="i in Object.keys(ModMain)" :value="i">{{ i }}</v-tab>
    </v-tabs>
    <v-window :model-value="wrappedMain">
      <v-window-item :value="ModMain.ATK">
        <EditorModATK v-model:mod="wrappedMod"></EditorModATK>
      </v-window-item>
      <v-window-item :value="ModMain.DEF">
      </v-window-item>
      <v-window-item :value="ModMain.FRAGILE">
      </v-window-item>
      <v-window-item :value="ModMain.EnemyType">
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>

</style>