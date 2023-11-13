<script setup lang="ts">
import {computed} from "vue";

import NumberField from "@/components/utils/NumberField.vue";

import {Enemy} from "@/model/enemy";
import {EnemyType} from "@/model/types";

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
const wrappedEnemyType = computed({
  get: () => props.enemy.type === EnemyType.HP,
  set: value => props.enemy.type = value ? EnemyType.HP : EnemyType.DP
})

</script>

<template>
  <v-card>
    <v-toolbar title="Enemy Detail"></v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="auto">
          <v-switch v-model="wrappedEnemyType" :label="props.enemy.type" color="primary"></v-switch>
        </v-col>
        <v-col>
          <v-text-field v-model="enemy.border" label="Border" type="number"></v-text-field>
          <v-text-field v-model="destructionPercent" label="Destruction" type="number" suffix="%"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="phyWeakPercent" label="Physical Weak" type="number" suffix="%"></v-text-field>
          <!--          <v-text-field v-model="eleWeakPercent" label="Element Weak" type="number" suffix="%"></v-text-field>-->
          <NumberField percent v-model="enemy.eleWeak" label="Element Weak"></NumberField>
          <div>{{ enemy.eleWeak }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>