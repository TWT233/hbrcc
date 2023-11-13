<script lang="ts" setup>
import {computed, defineEmits, defineProps} from "vue";
import {Modifier} from "@/model/modifier";
import {ATK} from "@/model/types";

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
          <v-text-field :model-value="mod.value" @change="updateValueFromEvent"
                        label="value" type="number" clearable></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>