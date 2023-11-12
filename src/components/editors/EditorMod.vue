<script setup lang="ts">
import {computed, defineEmits, defineProps, ref} from "vue";

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

const tab = ref(null)
</script>

<template>
  <v-dialog activator="parent" width="auto">
    <v-card>
      <v-toolbar title="Buff Detail">
        <v-btn icon="mdi-delete" @click="$emit('del')"></v-btn>
      </v-toolbar>
      <v-tabs
          v-model="tab"
          bg-color="primary"
      >
        <v-tab v-for="i in Object.keys(MainTypes)" :value="i">{{ i }}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
      </v-window>


      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="mod.sub" label="sub type"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="mod.value" label="value" type="number"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>