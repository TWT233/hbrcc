<script setup lang="ts">
import {computed, defineEmits, defineProps} from "vue";
import {Enemy, EnemyType} from "@/components/model/enemy";

const props = defineProps<{
  enemy: Enemy
}>()

const emit = defineEmits<{
  update: [
    enemy: Enemy
  ]
}>()

const destructionPercent = computed({
  get: () => props.enemy.des * 100,
  set: value => props.enemy.des = value / 100
})
const phyWeakPercent = computed({
  get: () => props.enemy.phyWeak * 100,
  set: value => props.enemy.phyWeak = value / 100
})
const eleWeakPercent = computed({
  get: () => props.enemy.eleWeak * 100,
  set: value => props.enemy.eleWeak = value / 100
})
</script>

<template>
  <v-card>
    <v-toolbar title="Enemy Detail"></v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-select v-model="enemy.type" :items="Object.keys(EnemyType)" label="Type"></v-select>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="enemy.border" label="Border" type="number"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="destructionPercent" label="Destruction" type="number" suffix="%"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="phyWeakPercent" label="Physical Weak" type="number" suffix="%"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="eleWeakPercent" label="Element Weak" type="number" suffix="%"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>