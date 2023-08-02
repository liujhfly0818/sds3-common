<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
// import data from "./assets/commonAll.json";
// console.log(`${data[0].material}`)

import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/parser";
const useStore = useUserStore();
// console.log(`App ---> ${JSON.stringify(useStore)}`)
const { loginName, loginTime, age, initObjSimple } = storeToRefs(useStore);

const name = ref("");

const changeStoreValue = () => {
  console.log("passing");
  useStore.loginName = "Jim";
  useStore.age = 10;
};

const patchStoreValue = () => {
  useStore.$patch({
    loginName: "mary",
    age: 20,
  });
};

const resetSToreValue = () => {
  useStore.$reset();
};

const setNameValue = () => {
  useStore.setName(name.value);
};

</script>

<template>
  <el-container class="layout-container">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <el-aside class="layout-aside">
      <h5 class="header">元素列表</h5>
      <el-scrollbar height="100vh" class="scrollbar">
        <div class="menu-list">
          <div
            class="menu-item"
            v-for="(ele, idx) in initObjSimple"
            :key="idx"
            :style="{backgroundColor: $route.query.casno == ele.CASNo ? '#eee' : '#fff'}"
          >
            <el-row>
              <el-col :span="14">
                <el-text class="order">{{ idx + 1 }}. </el-text>
                <el-text class="casno" type="danger">{{ ele.CASNo }}</el-text>
              </el-col>
              <el-col :span="10" class="pageno" style="text-right: right">
                <el-text type="info" size="small"
                  >PageNo:{{ ele.pageNo }}</el-text
                >
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <RouterLink :to="{path: '/about',  query: {casno: ele.CASNo}}">
                  <el-text class="name" type="primary" truncated
                    >{{ ele.material }}
                  </el-text>
                </RouterLink>
              </el-col>
            </el-row>
            <div></div>
            <div></div>
          </div>
        </div>

        <RouterLink to="/">All</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
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
          <el-input type="text" v-model="name" id="" />
          <el-button @click="setNameValue">设置名字</el-button>
        </div>
      </el-scrollbar>
    </el-aside>

    <el-container class="layout-main">
      <el-header class="header">
        <div class="toolbar">
          <span>元素详细信息</span>
        </div>
      </el-header>

      <el-main class="main-wrap">
        <el-scrollbar class="scrollbar">
          <RouterView />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.layout-container {
  position: relative;
}

.layout-aside {
  width: 25vw;
  height: 100vh;
  overflow: hidden;

  .scrollbar {
    height: calc(100% - 50px);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1.6rem;
    color: #fff;
    background-color: #3b8eed;
  }
}

.layout-main {
  width: 75vw;
  height: 100vh;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1.6rem;
    color: #fff;
    background-color: var(--vt-c-blue);
    border-left: 1px solid #fff;
  }

  .main-wrap {
    padding: 0;
    height: calc(100% - 50px);

    .scrollbar {
      height: 100%;
    }
  }
}

.menu-list {
  padding-right: 0.4rem;
  border-right: 1px solid var(--vt-c-blue);
}

.menu-item {
  padding: 0.4rem 0.5rem;
  border-bottom: 1px dashed #eee;

  .name {
    width: 100%;
  }

  .pageno {
    text-align: right;
  }
}
</style>
