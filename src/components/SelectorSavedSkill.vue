<script setup lang="ts">


import {computed} from "vue";

const items = computed()
</script>

<template>
  <v-virtual-scroll :items="items" height="200">
    <template v-slot:default="{ item }">
      Virtual Item {{ item }}
    </template>
  </v-virtual-scroll>
</template>

<style scoped>

</style>