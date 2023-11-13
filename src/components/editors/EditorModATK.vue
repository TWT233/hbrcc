<script lang="ts" setup>
import {Modifier} from "@/model/modifier";
import {ATK} from "@/model/types";
import NumberField from "@/components/utils/NumberField.vue";

const props = defineProps<{
  mod: Modifier,
}>()

const emit = defineEmits<{
  'update:mod': [mod: Modifier]
}>()

function updateValueFromEvent(e) {
  props.mod.value = Number(e.target.value)
}
</script>

<template>
  <v-card title="ATK Buff">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-combobox v-model="mod.sub" :items="Object.keys(ATK)" label="sub"></v-combobox>
        </v-col>
        <v-col cols="6">
          <NumberField v-model="mod.value" label="value" percent></NumberField>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>