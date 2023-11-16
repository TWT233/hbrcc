<script lang="ts" setup>
import {SKillCall} from "@/model/skill";
import {querySkill, querySkillName} from "@/data/skills";
import {computed, inject, ref} from "vue";
import EditorSkillCall from "@/components/EditorSkillCall.vue";

const props = defineProps<{
  call: SKillCall
}>()

const emit = defineEmits<{
  'update:call': [
    calls: SKillCall
  ]
}>()

const wrappedCall = computed({
  get: () => props.call,
  set: (value) => emit('update:call', value),
})

const border = inject<() => number>('border')

const dialog = ref(false)
</script>

<template>
  <v-card>
    <div class="d-flex flex-nowrap justify-space-between align-center">
      <div>
        <v-card-title>{{ querySkillName(call.callee) }}</v-card-title>
        <v-card-subtitle v-for="effect in querySkill(call.callee)">
          {{ effect.desc(call.param, border()) }}
        </v-card-subtitle>
      </div>
      <v-btn icon="mdi-pencil" @click="dialog=true"></v-btn>

      <v-dialog v-model="dialog" width="auto">
        <EditorSkillCall v-model:call="wrappedCall" type="MOD"></EditorSkillCall>
      </v-dialog>
    </div>
  </v-card>
</template>

<style scoped>

</style>