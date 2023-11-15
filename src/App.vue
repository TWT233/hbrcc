<script lang="ts" setup>
import {ref} from "vue";

import ViewMods from "@/components/ViewMods.vue";
import ViewAndEditEnemy from "@/components/ViewAndEditEnemy.vue";
import ViewChar from "@/components/ViewChar.vue";
import ViewResult from "@/components/ViewResult.vue";

import {Hit} from "@/model/hit";
import ViewNS from "@/components/ViewNS.vue";

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
            <v-row>
              <v-col>
                <ViewMods v-model:mods="hit.mods" title="Buffs & DeBuffs"></ViewMods>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <ViewAndEditEnemy v-model:enemy="hit.enemy"></ViewAndEditEnemy>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4">
            <v-row>
              <v-col>
                <ViewResult v-model:hit="hit"></ViewResult>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <ViewNS></ViewNS>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
