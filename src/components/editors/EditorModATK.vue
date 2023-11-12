<script lang="ts" setup>
import {defineEmits, defineProps, onMounted, ref} from "vue";
import {ATK, MainTypes, Modifier} from "@/model/modifier";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  'update:mod': [mod: Modifier]
}>()

let modd = ref(new Modifier(MainTypes.ATK, ATK.NORMAL, 0.9))

onMounted(() => {
  emit('update:mod', modd.value)
})
</script>

<template>
  <v-card title="ATK Buff"></v-card>
</template>

<style scoped>

</style>