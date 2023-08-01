<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/parser";
const useStore = useUserStore();
const { initJson } = storeToRefs(useStore)
// console.log(`AllView ---> initJson = ${JSON.stringify(initJson)}`)

import OneMaterial from '../components/OneMaterial.vue'
</script>

<template>
  <main>
    <div v-for="(item, index) in initJson" :key="index">
      <!-- <h1>{{ item.material }}</h1> -->
      <OneMaterial :oneMaterial="item"/>
    </div>
  </main>
</template>
