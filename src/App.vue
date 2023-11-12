<script lang="ts" setup>
import {ref} from "vue";

import ViewMods from "@/components/ViewMods.vue";
import ViewEnemy from "@/components/ViewEnemy.vue";
import ViewChar from "@/components/ViewChar.vue";

import {Hit} from "@/model/hit";

const hit = ref(new Hit())

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4">
            <ViewChar v-model:char="hit.char"></ViewChar>
          </v-col>
          <v-col cols="12" lg="4">
            <ViewMods v-model:modMap="hit.modMap" title="Buffs & DeBuffs"></ViewMods>
          </v-col>
          <v-col cols="12" lg="4">
            <ViewEnemy v-model:enemy="hit.enemy"></ViewEnemy>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
