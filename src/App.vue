<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
// import data from "./assets/commonAll.json";
// console.log(`${data[0].material}`)

import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/parser";
const useStore = useUserStore();
// console.log(`App ---> ${JSON.stringify(useStore)}`)
const { initObjSimple, initCasno, currentMaterial } = storeToRefs(useStore);

const updateCurKey = (key: string) => {
  useStore.initCasno = key;
  useStore.updateCurKey(key);
};

const onTop = () => {
  
  let menuListScroll = document.querySelector('#menuList')
  menuListScroll.scrollIntoView();
};

const onCurrent = (id: any) => {
  if (id) {
    let key = id.replace('&', '-')
    let menuListScrollItem = document.querySelector(`#MenuItem${key}`)
    // console.log("App ---> onCurrent ---> ", menuListScrollItem);
    menuListScrollItem.scrollIntoView();
  }
  
};

import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
const router = useRouter();
onBeforeMount(() => {
  // console.log("App ---> 触发BeforeMount钩子");
});
onMounted(() => {
  // console.log("App ---> 触发Mounted钩子");
  // console.log(`App ---> ${JSON.stringify(router.currentRoute.value.query)}`)
});
onBeforeUpdate(() => {
  // console.log("App ---> 触发BeforeUpdate钩子");
});
onUpdated(() => {
  // console.log("App ---> 触发Updated钩子");
});
onBeforeUnmount(() => {
  // console.log("App ---> 触发BeforeMount钩子");
});
onUnmounted(() => {
  // console.log("App ---> 触发Unmounted钩子");
  // window.removeEventListener("scroll", handleScroll);
});

</script>

<template>
  <el-container class="layout-container">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <el-aside class="layout-aside">
      <div class="header">
        <div class="title">元素索引</div>
        <div class="tips">校对情况: 红0, 绿1</div>
      </div>

      <el-scrollbar class="scrollbar" id="menuListScrollar">
        <div class="menu-list" id="menuList">
          <div
            class="menu-item"
            v-for="(ele, idx) in initObjSimple"
            :key="idx"
            :style="{
              backgroundColor:
                $route.query.key == ele.key ||
                (!$route.query.key && initCasno == ele.key)
                  ? '#eee'
                  : '#fff',
              borderColor:
                $route.query.key == ele.key ||
                (!$route.query.key && initCasno == ele.key)
                  ? '#3b8eed'
                  : '',
            }"
            :id="'MenuItem' + ele.CASNoKey + '-' + ele.pageNoKey"
          >
            <RouterLink
              :to="{ path: '/about', query: { key: ele.key } }"
              @click="updateCurKey(ele.key)"
            >
              <el-row>
                <el-col :span="14">
                  <el-text type="info" class="order">{{ idx + 1 }}. </el-text>
                  <el-text
                    class="casno"
                    :class="
                      ele.checked == 1
                        ? 'checked-once'
                        : ele.checked == 2
                        ? 'checked-twice'
                        : 'no-checked'
                    "
                    :style="{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      paddingLeft: '.2rem',
                    }"
                    >{{ ele.CASNo }}</el-text
                  >
                </el-col>
                <el-col :span="10" class="pageno" style="text-right: right">
                  <el-text type="info" size="small"
                    >Page:{{ ele.pageNoKey }}</el-text
                  >
                  <el-text type="info" size="small"
                    >&nbsp;&nbsp;PDF:{{ ele.pageNoKey + 16 }}</el-text
                  >
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
        <div class="menu-control">
          <el-button @click="onTop">顶部</el-button>
          <el-button @click="onCurrent($route.query.key)">当前</el-button>
        </div>
      </el-scrollbar>
    </el-aside>

    <el-container class="layout-main">
      <el-header class="header">
        <div class="toolbar">
          <span v-if="!currentMaterial">元素详细信息</span>
          <span v-else>
            {{ currentMaterial.CASNo }}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ currentMaterial.material }}
          </span>
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
    height: 50px;
    text-align: center;
    color: #fff;
    background-color: #3b8eed;

    .title {
      font-size: 1rem;
    }

    .tips {
      font-size: 0.3rem;
    }
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
  border-left: 6px solid #fff;

  .name {
    width: 100%;
    font-weight: bold;
  }

  .pageno {
    text-align: right;
  }

  .checked-once {
    color: var(--vt-c-green);
  }

  .checked-twice {
    color: var(--vt-c-purple);
  }

  .no-checked {
    color: var(--vt-c-red);
  }
}

.menu-control {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  z-index: 10;
  text-align: center;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: var(--vt-c-blue);
  text-align: center;
  font-size: 0.6rem;
  color: #fff;
  line-height: 2;
}
</style>
