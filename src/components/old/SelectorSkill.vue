<script lang="ts" setup>

import {querySkillName, SkillName, SKILLS_CATE} from "@/data/skills";
import {Skill} from "@/model/skill";
import {computed, onMounted, ref} from "vue";
import EditorCustomSkill from "@/components/old/EditorCustomSkill.vue";
import {fetchCustomSkillList} from "@/data/localstorage";

const props = defineProps<{
  callee: SkillName | Skill
  type: "MOD" | "DMG"
}>()

const emit = defineEmits<{
  'update:callee': [
    callee: SkillName | Skill
  ]
}>()

let category = ref('CUSTOM')

const wrappedCallee = computed({
  get: () => props.callee,
  set: (value) => emit('update:callee', value),
})

onMounted(() => {
  const name = querySkillName(props.callee)
  for (const cate in SKILLS_CATE[props.type]) {
    if (SKILLS_CATE[props.type][cate].includes(name)) {
      category.value = cate
      return
    }
  }
})

const selectedCustom = ref('')
</script>

<template>
  <v-card elevation="8" title="Skill">
    <v-container>
      <v-row>
        <v-col cols="auto">
          <v-tabs v-model="category" direction="vertical">
            <v-tab value="CUSTOM">CUSTOM</v-tab>
            <v-tab v-for="i in Object.keys(SKILLS_CATE[type])" :value="i">{{ i }}</v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-window :model-value="category">
            <v-window-item v-for="i in Object.keys(SKILLS_CATE[type])" :value="i">
              <v-radio-group v-model="wrappedCallee">
                <v-radio v-for="j in SKILLS_CATE[type][i]" :label="j" :value="j"></v-radio>
              </v-radio-group>
            </v-window-item>
            <v-window-item value="CUSTOM">
              <EditorCustomSkill @update="name => selectedCustom=name"></EditorCustomSkill>
              <v-divider></v-divider>
              <v-radio-group v-model="selectedCustom">
                <v-radio v-for="i in fetchCustomSkillList()" :label="i" :value="i"></v-radio>
              </v-radio-group>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>