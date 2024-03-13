<script lang="ts" setup>

import {useTeamStore} from "@/components/state/team";
import EditorStyle from "@/components/EditorStyle.vue";
import {toRefs} from "vue";
import {Styles} from "@/data/styles";

const team = useTeamStore()
team.team.members.fill(Styles.AliceADefault)
const refMembers = toRefs(team.team.members)

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="8" title="hbrcc"></v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
          <template v-slot:item.1>
            <v-card title="Step One" flat>
              <v-container>
                <v-row>
                  <v-col cols="2" v-for="(_,i) in refMembers">
                    <EditorStyle v-model:style="refMembers[i].value"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </template>

          <template v-slot:item.2>
            <v-card title="Step Two" flat>...</v-card>
          </template>

          <template v-slot:item.3>
            <v-card title="Step Three" flat>...</v-card>
          </template>
        </v-stepper>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
