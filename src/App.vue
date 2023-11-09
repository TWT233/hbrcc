<script setup>
import Selector from "@/components/Selector.vue";
</script>

<template>
  <header>
    placeholder1
  </header>

  <main>
    <a>placeholder</a>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
