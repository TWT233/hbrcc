<script lang="ts" setup>
import {ref} from "vue";

import SelectorMod from "@/components/selector/SelectorMod.vue";
import SelectorEnemy from "@/components/selector/SelectorEnemy.vue";
import SelectorChar from "@/components/selector/SelectorChar.vue";

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
                <SelectorChar v-model:char="hit.char"></SelectorChar>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <SelectorEnemy v-model:enemy="hit.enemy"></SelectorEnemy>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4" md="6">
            <SelectorMod v-model:mods="hit.mods"></SelectorMod>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
