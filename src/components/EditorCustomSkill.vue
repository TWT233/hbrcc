<script setup lang="ts">
import {CustomSkill} from "@/model/skill";
import {ref} from "vue";

const emits = defineEmits<{
  'update:skill': [
    name: string,
  ]
}>()

let name = ref<string>("")
let skill = ref<CustomSkill>([])
</script>

<template>
  <v-card>

  </v-card>
</template>

<style scoped>

</style>