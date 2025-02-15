<script lang="ts" setup>
import {Stat} from "@/model/stat";
import {StatType} from "@/model/types";

const stat = defineModel<Stat>('stat')
</script>

<template>
  <n-card style="max-width: 300px;">
    <n-form label-placement="left" label-width="auto">
      <n-grid cols="1 l:2" responsive="screen" x-gap="12">
        <n-gi v-for="t in Object.values(StatType)" :key="t" :label="t">
          <n-form-item :label="t">
            <n-input-number v-model:value="stat[t]" :show-button="false"/>
          </n-form-item>
        </n-gi>
      </n-grid>
    </n-form>
  </n-card>

</template>

<style scoped>

</style>