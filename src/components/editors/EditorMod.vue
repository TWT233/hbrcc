<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue";

import {MainTypes, Modifier} from "@/model/modifier";
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
      <v-window-item :value="MainTypes.DEF">
      </v-window-item>
      <v-window-item :value="MainTypes.FRAGILE">
      </v-window-item>
      <v-window-item :value="MainTypes.EnemyType">
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>

</style>