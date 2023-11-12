<script lang="ts" setup>
import {defineEmits, defineProps} from "vue";

import {Modifier} from "@/components/model/modifier/modifier";
import {MainTypes} from "@/components/model/modifier/types";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  update: [
    mod: Modifier,
  ],
  del: []
}>()
</script>

<template>
  <v-card>
    <v-toolbar title="Buff Detail">
      <v-btn icon="mdi-delete" @click="$emit('del')"></v-btn>
    </v-toolbar>
    <v-tabs v-model="mod.main">
      <v-tab v-for="i in Object.keys(MainTypes)" :value="i">{{ i }}</v-tab>
    </v-tabs>
  </v-card>
</template>

<style scoped>

</style>