<script lang="ts" setup>

import {useTeamStore} from "@/components/state/team";
import EditorStyle from "@/components/EditorStyle.vue";
import {toRefs} from "vue";
import {Styles} from "@/data/styles";
import ViewSkills from "@/components/ViewSkills.vue";

const team = useTeamStore()
const members = toRefs(team.team.members)
members[0].value = Styles.AliceADefault
members[1].value = Styles.LShanhuaDefault

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row>
          <v-col v-for="(_,i) in members" cols="2">
            <EditorStyle v-model:style="members[i].value"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ViewSkills></ViewSkills>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
