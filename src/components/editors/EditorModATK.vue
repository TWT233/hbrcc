<script lang="ts" setup>
import {defineEmits, defineProps, onMounted, ref} from "vue";
import {ATKBuff, Modifier} from "@/components/model/modifier/modifier";
import {ATK} from "@/components/model/modifier/types";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  'update:mod': [mod: Modifier]
}>()

let modd = ref(new ATKBuff(ATK.NORMAL, 0.9))

onMounted(() => {
  console.log(11)
  emit('update:mod', modd.value)
})
</script>

<template>
  <v-card title="ATK Buff"></v-card>
</template>

<style scoped>

</style>