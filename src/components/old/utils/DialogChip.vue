<script setup lang="ts">
import {ref} from "vue"

const props = withDefaults(
    defineProps<{
      text: string
      closable?: boolean
      color?: string
    }>(),
    {
      closable: false,
      color: "",
    })
const emit = defineEmits<{
  del: []
}>()

const dialog = ref(false)
</script>

<template>
  <v-chip @click="dialog=true" :closable="closable" @click:close="$emit('del')" :color="color">
    <v-icon start icon="mdi-pencil"></v-icon>
    {{ text }}
    <v-dialog v-model="dialog" width="auto">
      <slot></slot>
    </v-dialog>
  </v-chip>
</template>

<style scoped>

</style>