<script setup lang="ts">
import {defineProps, defineEmits, computed, ref} from "vue"

import {Modifier} from "@/model/modifier/modifier";
import {COLOR_MAP} from "@/model/modifier/types";
import EditorMod from "@/components/editors/EditorMod.vue";

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
  set: value => emit('update:mod', value)
})

const dialog = ref(false)
</script>

<template>
  <v-chip @click="dialog=true" @click:close="$emit('del')" :color="COLOR_MAP[mod.main]">
    <v-icon start icon="mdi-pencil"></v-icon>
    {{ mod.main }} | {{ mod.sub }} | {{ (mod.value * 100 | 0) }}%
    <v-dialog v-model="dialog" width="auto">
      <EditorMod v-model:mod="wrappedMod"></EditorMod>
    </v-dialog>
  </v-chip>
</template>

<style scoped>

</style>