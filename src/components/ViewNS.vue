<script lang="ts" setup>

import {ref} from "vue";
import {NSCall} from "@/model/effect";
import EditorNS from "@/components/editors/EditorNS.vue";

let call = ref<
    NSCall
>({
  callee: [],
  param: {
    lv: 1,
    hoju: 0,
    stat: {CON: 0, DEX: 320, LUK: 0, SPR: 0, STR: 320, WIS: 0},
  },
})

</script>

<template>
  <EditorNS :border="280" v-model:call="call"></EditorNS>
</template>

<style scoped>

</style>