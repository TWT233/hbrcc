<script lang="ts" setup>
import {ref} from "vue";

import ViewMods from "@/components/ViewMods.vue";
import ViewEnemy from "@/components/ViewEnemy.vue";
import ViewChar from "@/components/ViewChar.vue";

import {Hit} from "@/components/model/hit";

const hit = ref(new Hit())

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4">
            <v-row>
              <v-col>
                <ViewChar v-model:char="hit.char"></ViewChar>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <ViewEnemy v-model:enemy="hit.enemy"></ViewEnemy>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4">
            <ViewMods v-model:mods="hit.mods" title="Buffs & DeBuffs"></ViewMods>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
