<script lang="ts" setup>
import {useTeamStore} from "@/components/state/team";
import {Styles} from "@/data/styles";
import {storeToRefs} from "pinia";
import EditorMember from "@/components/EditorMember.vue";
import {reactive} from "vue";

const team = useTeamStore()
const teamRefs = storeToRefs(team)
const members = reactive(teamRefs.team.value.members)

members[0].style = Styles.LShanhuaDefault
members[1].style = Styles.AliceAOnePiece
members[2].style = Styles.MKiryuuGothic
</script>

<template>

  <n-layout>
    <n-layout-header bordered>
      <n-menu
          :options="[{label:'main'}]"
          mode="horizontal"
      />
    </n-layout-header>

    <!-- 页面内容 -->
    <n-layout-content content-style="padding: 24px; margin-top: 64px;">
      <n-grid cols="6" responsive="screen" x-gap="12" y-gap="12">
        <n-gi v-for="(member, index) in members" :key="index">
          <EditorMember :member="member"/>
        </n-gi>
      </n-grid>
    </n-layout-content>
  </n-layout>
</template>

