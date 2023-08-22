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
const { initObjSimple, initCasno } = storeToRefs(useStore);

</script>

<template>
  <el-container class="layout-container">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <el-aside class="layout-aside">
      <h5 class="header">元素列表</h5>
      <el-scrollbar class="scrollbar">
        <div class="menu-list">
          <div
            class="menu-item"
            v-for="(ele, idx) in initObjSimple"
            :key="idx"
            :style="{backgroundColor: $route.query.key == ele.key ||  (!$route.query.key && initCasno == ele.key)? '#eee' : '#fff'}"
          >
          <RouterLink :to="{path: '/about',  query: {key: ele.key}}"> 
            <el-row>
              <el-col :span="14">
                <el-text type="info" class="order">{{ idx + 1 }}. </el-text>
                <el-text class="casno" :class="ele.checked == 1 ? 'checked-once' : (ele.checked == 2 ? 'checked-twice' : 'no-checked')" :style="{fontWeight: 'bold', fontSize: '1rem', paddingLeft: '.2rem'}">{{ ele.CASNo }}</el-text>
              </el-col>
              <el-col :span="10" class="pageno" style="text-right: right">
                <el-text type="info" size="small"
                  >PageNo:{{ ele.pageNo }}</el-text>
              </el-col>
              <el-col :span="24">              
                  <el-text class="name" type="primary" size="large" truncated
                    >{{ ele.material }}
                  </el-text>
              </el-col>
              <el-col :span="24">              
                  <el-text class="name-en" type="info" size="small" truncated
                    >{{ ele.materialEn }}
                  </el-text>
              </el-col>
            </el-row>
          </RouterLink>
          </div>
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
    <div class="footer">南京力恒科技版权所有</div>
  </el-container>
</template>

<style lang="less" scoped>
.layout-container {
  position: relative;
}

.layout-aside {
  width: 20vw;
  height: 100vh;
  overflow: hidden;

  .scrollbar {
    height: calc(100% - 50px);
    padding-bottom: 3rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #3b8eed;
  }
}

.layout-main {
  width: 80vw;
  height: 100vh;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1.2rem;
    color: #fff;
    background-color: var(--vt-c-blue);
    border-left: 1px solid #fff;
  }

  .main-wrap {
    padding: 0;
    height: calc(100% - 50px);

    .scrollbar {
      height: 100%;
      padding-bottom: 3rem;
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
    font-weight: bold;
  }

  .pageno {
    text-align: right;
  }

  .checked-once {
    color: var(--vt-c-green)
  }

  .checked-twice {
    color: var(--vt-c-purple)
  }

  .no-checked {
    color: var(--vt-c-red)
  }
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: var(--vt-c-blue);
  text-align: center;
  font-size: .6rem;
  color: #fff;
  line-height: 2;
}
</style>
