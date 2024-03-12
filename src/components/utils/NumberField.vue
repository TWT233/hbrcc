<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  modelValue: number,
  percent?: boolean,
  label?: string,
}>(), {
  percent: false
})

const emit = defineEmits<{
  'update:modelValue': [modelValue: number],
}>()

const value = computed(
    () => props.percent ? (props.modelValue * 100).toFixed(0) : props.modelValue.toFixed(0)
)

function set(e) {
  const v = Number(e.target.value)
  emit('update:modelValue', props.percent ? v / 100 : v)
}
</script>

<template>
  <v-text-field :value="value"
                :label="label?label:''"
                @update:model-value=""
                @change="set"
                :suffix="percent?'%':''"
                type="number"
                variant="underlined"
                v-bind="$props"
  ></v-text-field>
</template>

<style scoped>

</style>