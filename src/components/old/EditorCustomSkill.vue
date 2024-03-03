<script setup lang="ts">
import {CustomSkill} from "@/model/skill";
import {computed, ref} from "vue";
import {fetchCustomSkillList, storeCustomSkill} from "@/data/localstorage";
import {CustomEffect} from "@/model/effect";
import {ATK, MAIN_TO_SUB, ModMain} from "@/model/types";
import NumberField from "@/components/old/utils/NumberField.vue";

const emits = defineEmits<{
  'update': [
    name: string,
  ]
  'rename': [
    oldName: string,
    newName: string,
  ]
}>()

let _name = ref("")
let skill = ref<CustomSkill>([])

const wrappedName = computed({
  get: () => _name.value,
  set: (nv) => {
    const ov = _name.value
    storeCustomSkill(ov, undefined)

    _name.value = nv
    storeCustomSkill(nv, skill.value)
    console.log('store custom skill')
    emits('rename', ov, nv)
  }
})

function addEff() {
  skill.value.push(new CustomEffect(1, [ModMain.ATK, ATK.NORMAL]))
}

function isNameAccepted(value: string): string | boolean {
  if (!value) return "a name required"
  if (fetchCustomSkillList().includes(value)) return "name already existed among custom skills"
  return true
}

function setEff(i: number, main = undefined, sub = undefined, value = undefined) {
  const e = skill.value[i]
  if (main !== undefined) {
    e.mt[0] = main
  }
  if (sub !== undefined) {
    e.mt[1] = sub
  }
  if (value !== undefined) {
    e.bar[0] = value
    e.bar[1] = value
  }
  if (fetchCustomSkillList().includes(_name.value)) {
    storeCustomSkill(_name.value, skill.value)
    console.log('update skill')
    emits('update', _name.value)
  }
}

const dialog = ref(false)
</script>

<template>
  <div>
    <v-btn icon="mdi-plus" @click="dialog=true"></v-btn>
    <v-dialog v-model="dialog">
      <v-card width="auto">
        <v-toolbar title="Custom Skill"></v-toolbar>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="wrappedName" label="Name" :rules="[isNameAccepted]"></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <div class="d-flex align-center justify-space-between">
            <v-card-title>Buffs</v-card-title>
            <v-btn icon="mdi-plus" @click="addEff"></v-btn>
          </div>
          <v-form validate-on="blur lazy">
            <v-row v-for="(e,i) in skill.values()" :key="i">
              <v-col>
                <v-select :items="Object.keys(ModMain)" :model-value="e.mt[0]"
                          @update:model-value="modelValue => setEff(i,modelValue)"></v-select>
              </v-col>
              <v-col>
                <v-select :items="MAIN_TO_SUB[e.mt[0]]" :model-value="e.mt[1]"
                          @update:model-value="modelValue => setEff(i,undefined,modelValue)"></v-select>
              </v-col>
              <v-col>
                <NumberField :model-value="e.bar[0]"
                             @update:model-value="modelValue => setEff(i,undefined,undefined,modelValue)"
                             lable="Value" percent></NumberField>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>