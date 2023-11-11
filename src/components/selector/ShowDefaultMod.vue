<script setup lang="ts">
import {Modifier} from "@/components/model/modifier/modifier";
import {defineProps, defineEmits, ref} from "vue"

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  update: [
    mod: Modifier,
  ],
  del: []
}>()

const dialog = ref(false)
</script>

<template>
  <v-chip closable elevation="8" size="large" @click:close="$emit('del')">
    <v-icon start icon="mdi-pencil"></v-icon>
    {{ mod.main }} | {{ mod.sub }} | {{ (mod.value * 100 | 0) }}%
    <v-dialog v-model="dialog" activator="parent" width="auto">
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