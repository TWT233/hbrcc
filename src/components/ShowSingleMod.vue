<script setup lang="ts">
import {computed, ref} from "vue"

import EditorMod from "@/components/editors/EditorMod.vue";

import {Modifier} from "@/model/modifier";
import {COLOR_MAP} from "@/model/types";
import DialogChip from "@/components/utils/DialogChip.vue";

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
  <DialogChip :text="`${ mod.main } | ${ mod.sub } | ${ (mod.value * 100 | 0) }%`"
              closable :color="COLOR_MAP[mod.main]" @del="$emit('del')">
    <EditorMod v-model:mod="wrappedMod" @del="$emit('del')"></EditorMod>
  </DialogChip>
</template>

<style scoped>

</style>