<script setup lang="ts">
import {defineProps, defineEmits, computed} from "vue"

import {Modifier} from "@/components/model/modifier/modifier";
import {COLOR_MAP} from "@/components/model/modifier/types";
import EditorMod from "@/components/selector/EditorMod.vue";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  update: [
    mod: Modifier,
  ],
  del: []
}>()

const wrappedMod = computed({
  get: () => props.mod,
  set: value => emit('update', value)

})

</script>

<template>
  <v-chip closable @click:close="$emit('del')" :color="COLOR_MAP[mod.main]">
    <v-icon start icon="mdi-pencil"></v-icon>
    {{ mod.main }} | {{ mod.sub }} | {{ (mod.value * 100 | 0) }}%
    <EditorMod v-model:mod="wrappedMod"></EditorMod>
  </v-chip>
</template>

<style scoped>

</style>