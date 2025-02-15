<script lang="ts" setup>
import {computed} from "vue";
import {Member} from "@/model/member";
import {StatType} from "@/model/types";
import {Pencil} from '@vicons/ionicons5'

const member = defineModel<Member>('member')

const title = computed(() => member.value.style?.toString() || 'None')
</script>

<template>
  <n-card :title="title" class="member-card">
    <template #header-extra>
      <n-button :bordered="false" circle>
        <n-icon :component="Pencil"/>
      </n-button>
    </template>
    <n-form label-placement="left" label-width="auto">
      <n-grid cols="1 l:2" responsive="screen" x-gap="12">
        <n-gi v-for="t in Object.values(StatType)" :key="t" :label="t">
          <n-form-item :label="t">
            <n-input-number v-model:value="member.stat[t]" :show-button="false"/>
          </n-form-item>
        </n-gi>
      </n-grid>
    </n-form>
  </n-card>
</template>


<style scoped>
.member-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>