<template>
  <div>
    <OneMaterial :oneMaterial="initObj[$route.query.key]"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/parser";
const useStore = useUserStore();
const { initObj } = storeToRefs(useStore)

import OneMaterial from '../components/OneMaterial.vue'


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
