<script setup lang="ts">
import {defineProps, defineEmits} from "vue"

import {Modifier} from "@/components/model/modifier/modifier";

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
  <v-chip closable @click:close="$emit('del')">
    <v-icon start icon="mdi-pencil"></v-icon>
    {{ mod.main }} | {{ mod.sub }} | {{ (mod.value * 100 | 0) }}%
    <v-dialog activator="parent" width="auto">
      <v-card>
        <v-toolbar title="Buff Detail">
          <v-btn icon="mdi-delete" @click="$emit('del')"></v-btn>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="mod.sub" label="sub type" type="number"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="mod.value" label="value" type="number"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-chip>
</template>

<style scoped>

</style>