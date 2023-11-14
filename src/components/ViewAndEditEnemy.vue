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
          <NumberField v-model="enemy.border" label="Border"></NumberField>
        </v-col>
        <v-col>
          <NumberField percent v-model="enemy.des" label="Destruction"></NumberField>
        </v-col>
        <v-col>
          <NumberField percent v-model="enemy.phyWeak" label="Physical Weak"></NumberField>
        </v-col>
        <v-col>
          <NumberField percent v-model="enemy.eleWeak" label="Element Weak"></NumberField>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>