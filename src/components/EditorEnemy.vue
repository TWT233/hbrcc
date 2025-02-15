<script lang="ts" setup>
import {Enemy} from "@/model/enemy";
import {EnemyType} from "@/model/types";

const enemy = defineModel<Enemy>('enemy', {required: true})

const enemyTypeOptions = [
  {label: 'HP类型', value: EnemyType.HP},
  {label: 'DP类型', value: EnemyType.DP}
]
</script>

<template>
  <n-card title="enemy">
    <n-form label-placement="left" label-width="120">
      <n-form-item label="属性值">
        <n-input-number v-model:value="enemy.border" :show-button="false"/>
      </n-form-item>

      <n-form-item label="属性弱点">
        <n-input-number
            v-model:value="enemy.eleWeak"
            :format="(v: number) => `${Math.round(v * 100)}%`"
            :parse="(s: string) => Number(s.replace('%', '')) / 100"
            :show-button="false"
        />
      </n-form-item>

      <n-form-item label="物理弱点">
        <n-input-number
            v-model:value="enemy.phyWeak"
            :format="(v: number) => `${Math.round(v * 100)}%`"
            :parse="(s: string) => Number(s.replace('%', '')) / 100"
            :show-button="false"
        />
      </n-form-item>

      <n-form-item label="破坏率">
        <n-input-number
            v-model:value="enemy.des"
            :format="(v: number) => `${Math.round(v * 100)}%`"
            :parse="(s: string) => Number(s.replace('%', '')) / 100"
            :show-button="false"
        />
      </n-form-item>

      <n-form-item label="敌人类型">
        <n-select v-model:value="enemy.type" :options="enemyTypeOptions"/>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<style scoped>

</style>