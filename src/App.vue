<script setup lang="ts">
import {defineProps, ref} from "vue";

import SelectorMod from "@/components/selector/SelectorMod.vue";
import {Modifier} from "@/components/model/modifier/modifier";

const mods = ref<Modifier[]>([])

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <SelectorMod v-model:selected-mods="mods"></SelectorMod>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
