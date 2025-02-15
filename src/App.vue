<script lang="ts" setup>
import {reactive} from "vue";
import {storeToRefs} from "pinia";

import {useTeamStore} from "@/components/state/team";
import {useEnemyStore} from "@/components/state/enemy";
import {Styles} from "@/data/styles";

import EditorMember from "@/components/EditorMember.vue";
import EditorEnemy from "@/components/EditorEnemy.vue";

const team = useTeamStore()

const members = reactive(storeToRefs(team).team.value.members)
members[0].style = Styles.LShanhuaDefault
members[1].style = Styles.AliceAOnePiece
members[2].style = Styles.MKiryuuGothic

const enemy = useEnemyStore()
</script>

<template>
  <n-layout>

    <!-- title navigator -->
    <n-layout-header bordered>
      <n-menu
          :options="[{label:'main'}]"
          mode="horizontal"
      />
    </n-layout-header>

    <!-- content -->
    <n-layout-content content-style="padding: 24px;">
      <n-grid cols="6" responsive="screen" x-gap="12" y-gap="12">

        <!-- members -->
        <n-gi v-for="(member, index) in members" :key="index">
          <EditorMember :member="member"/>
        </n-gi>

        <!-- enemy -->
        <n-gi span="3">
          <EditorEnemy :enemy="enemy.enemy"/>
        </n-gi>

        <!-- result -->
        <n-gi span="3">
          <n-card title="result"></n-card>
        </n-gi>

      </n-grid>
    </n-layout-content>

  </n-layout>
</template>
