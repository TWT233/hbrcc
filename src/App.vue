<script lang="ts" setup>
import {provide, ref} from "vue";

import EditorEnemy from "@/components/editors/EditorEnemy.vue";
import ViewResult from "@/components/ViewResult.vue";

import {Hit} from "@/model/hit";
import ViewSkillCall from "@/components/ViewSkillCalls.vue";

const hit = ref(new Hit())

const border = () => hit.value.border()
provide('border', border)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4">
            <ViewSkillCall v-model:calls="hit.buffs"></ViewSkillCall>
          </v-col>
          <v-col class="" cols="12" lg="4">
            <EditorEnemy v-model:enemy="hit.enemy"></EditorEnemy>
          </v-col>
          <v-col cols="12" lg="4">
            <ViewResult v-model:hit="hit"></ViewResult>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
