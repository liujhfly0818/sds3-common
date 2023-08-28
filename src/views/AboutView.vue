<template>
  <div>
    <OneMaterial :oneMaterial="initObj[initCasno]"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/parser";
const useStore = useUserStore();
const { initObj, initCasno } = storeToRefs(useStore)

import OneMaterial from '../components/OneMaterial.vue'

import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
const router = useRouter()

onBeforeMount(() => {
  console.log("AboutView ---> 触发BeforeMount钩子");
});
onMounted(() => {
  console.log("AboutView ---> 触发Mounted钩子");
  console.log(`AboutView ---> ${JSON.stringify(router.currentRoute.value.query)}`)
  if (router.currentRoute.value.query.key) {
    useStore.initCasno = router.currentRoute.value.query.key;
    useStore.updateCurKey(router.currentRoute.value.query.key);
  }
});
onBeforeUpdate(() => {
  // console.log("AboutView ---> 触发BeforeUpdate钩子");
});
onUpdated(() => {
  // console.log("AboutView ---> 触发Updated钩子");
});
onBeforeUnmount(() => {
  // console.log("AboutView ---> 触发BeforeMount钩子");
});
onUnmounted(() => {
  // console.log("AboutView ---> 触发Unmounted钩子");
});



</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
