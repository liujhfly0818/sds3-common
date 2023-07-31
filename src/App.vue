<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
// import data from "./assets/commonAll.json";
// console.log(`${data[0].material}`)

import { ref } from 'vue'
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/parser";
const useStore = useUserStore();
// console.log(`App ---> ${JSON.stringify(useStore)}`)
const { loginName, loginTime, age, initJson } = storeToRefs(useStore)
console.log(`App ---> initJson = ${JSON.stringify(initJson)}`)

const name = ref('')

const changeStoreValue = () => {
  console.log("passing");
  useStore.loginName = 'Jim'
  useStore.age = 10
}

const patchStoreValue = () => {
  useStore.$patch({
    loginName: 'mary', 
    age: 20,
  })
}

const resetSToreValue = () => {
  useStore.$reset()
}

const setNameValue = () => {
  useStore.setName(name.value)
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>

        <h4>{{ loginName }}</h4>
        <h4>{{ loginTime }}</h4>
        <h4>{{ age }}</h4>
        <el-button @click="changeStoreValue">更新store的value</el-button>
        <el-button @click="patchStoreValue">批量更改store的value</el-button>
        <el-button @click="resetSToreValue">重置store的value</el-button>
        <div>
          <el-text>{{ useStore.completeName }}</el-text>
          <div>{{ useStore.otherGetter }}</div>
        </div>
        <div>
          <el-input type="text" v-model="name" id=""/>
          <el-button @click="setNameValue">设置名字</el-button>
        </div>

        <div v-for="(ele, idx) in useStore.initJson" class="material-list">
          <el-text class="order">{{ idx + 1 }}. </el-text>
          <el-text class="casno" type="danger">{{ ele.CASNo }}</el-text>
          <RouterLink to="/about">
            <el-text class="pageno" type="info" size="small"
              >（Page:{{ ele.pageNo }}）</el-text
            >
            <el-text class="name" type="primary">{{ ele.material }} </el-text>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped="less">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.3rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


.material-list {
  display: block;

  .order {
    padding-right: 0.3rem;
  }

  .casno {
    padding-right: 0.3rem;
    font-weight: bold;
  }
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: flex; */
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
