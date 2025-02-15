<script lang="ts" setup>
import {computed, ref} from "vue";

import {Member} from "@/model/member";
import {StatType} from "@/model/types";
import EditorStat from "@/components/EditorStat.vue";

const member = defineModel<Member>('member')

const title = computed(() => member.value.style?.toString() || 'None')

const statBrief = computed(() => Object.values(StatType).map(t => member.value.stat[t]).join(' | '))

const showEditorStat = ref(false);
</script>

<template>
  <n-card :title="title" class="member-card">
    {{ statBrief }}
    <template #footer>
      <n-button-group>
        <n-button>选择战型</n-button>
        <n-button @click="showEditorStat = true">
          <n-modal v-model:show="showEditorStat">
            <EditorStat v-model:stat="member.stat"></EditorStat>
          </n-modal>
          编辑属性
        </n-button>
        <n-button>选择技能</n-button>
      </n-button-group>
    </template>
  </n-card>
</template>


<style scoped>
.member-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>