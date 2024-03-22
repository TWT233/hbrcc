<script lang="ts" setup>

import {useTeamStore} from "@/components/state/team";
import EditorStyle from "@/components/EditorStyle.vue";
import {Styles} from "@/data/styles";
import ViewSkills from "@/components/ViewSkills.vue";
import {storeToRefs} from "pinia";

const team = useTeamStore()
const members = storeToRefs(team).team.value.members

members[0] = Styles.LShanhuaDefault
members[1] = Styles.AliceAOnePiece
members[2] = Styles.MKiryuuGothic

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row>
          <v-col v-for="(_,i) in members" cols="2">
            <EditorStyle v-model:style="members[i]"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ViewSkills :members="members"></ViewSkills>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
