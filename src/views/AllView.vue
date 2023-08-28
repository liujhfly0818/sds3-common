<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/parser";
const useStore = useUserStore();
const { initObj, initCasno } = storeToRefs(useStore);

import OneMaterial from "../components/OneMaterial.vue";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
onBeforeMount(() => {
  // console.log("AllView ---> 触发BeforeMount钩子");
});
onMounted(() => {
  // console.log("AllView ---> 触发Mounted钩子");
});
onBeforeUpdate(() => {
  // console.log("AllView ---> 触发BeforeUpdate钩子");
});
onUpdated(() => {
  // console.log("AllView ---> 触发Updated钩子");
});
onBeforeUnmount(() => {
  // console.log("AllView ---> 触发BeforeMount钩子");
});
onUnmounted(() => {
  // console.log("AllView ---> 触发Unmounted钩子");
});
</script>

<template>
  <main>
    <OneMaterial :oneMaterial="initObj[initCasno]" />
  </main>
</template>
