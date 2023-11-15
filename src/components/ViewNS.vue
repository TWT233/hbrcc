<script lang="ts" setup>

import {ref} from "vue";
import {SkillName} from "@/data/skills";
import {NS} from "@/model/effect";
import {SkillData} from "@/data/localstorage";
import EditorNS from "@/components/editors/EditorNS.vue";

let val = ref<{
  selected: SkillName | NS,
  data: SkillData,
}>({
  selected: [],
  data: {
    lv: 1,
    hoju: 0,
    stat: {CON: 0, DEX: 320, LUK: 0, SPR: 0, STR: 320, WIS: 0},
  },
})

</script>

<template>
  <EditorNS :border="280" v-model:selected="val.selected" v-model:data="val.data"></EditorNS>
</template>

<style scoped>

</style>