<script lang="ts" setup>

import {ref} from "vue";
import EditorSkillCall from "@/components/editors/EditorSkillCall.vue";
import {SKillCall} from "@/model/skill";

let call = ref<
    SKillCall
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
  <EditorSkillCall :border="280" v-model:call="call"></EditorSkillCall>
</template>

<style scoped>

</style>