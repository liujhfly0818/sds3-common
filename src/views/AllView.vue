<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/parser";
const useStore = useUserStore();
const { initObj, initCasno } = storeToRefs(useStore)
let parserObj = {};



import OneMaterial from '../components/OneMaterial.vue'

</script>

<template>
  <main>
    <OneMaterial :oneMaterial="initObj[initCasno]"/>
  </main>
</template>
