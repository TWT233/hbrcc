<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

import {Character, Stat} from "@/components/model/character";


const props = defineProps<{
  char: Character,
}>()

const emit = defineEmits<{
  update: [
    char: Character,
  ]
}>()
</script>

<template>
  <v-card>
    <v-toolbar title="Character"></v-toolbar>
    <v-form>
      <v-container>
        <v-row>
          <v-col v-for="i in Object.keys(Stat)" :key="i">
            <v-text-field v-model="char.stat[i]" :label="i"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="char.skill.cap" label="Skill cap" type="number"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="char.skill.bar[0]" label="Min DMG" type="number"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="char.skill.bar[1]" label="Max DMG" type="number"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>