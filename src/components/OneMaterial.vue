<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
  oneMaterial: object;
}>();

onMounted(() => {

})
</script>

<template>
  <el-container class="material-wrap">
    <el-header class="header">
      <el-row>
        <el-col :span="18">
          <!-- <el-text class="casno-index" size="large" :style="{paddingRight: '.5rem'}">{{ oneMaterial.CASNoKey }}. </el-text> -->
          <el-text class="casno" size="large">{{oneMaterial.CASNo }}</el-text>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-text type="primary" class="name" size="large">{{ oneMaterial.material }}</el-text>
        </el-col>
        <el-col :span="6" :style="{ textAlign: 'right' }">
          <el-text type="info" class="pageno">Page: {{ oneMaterial.pageNoKey }}</el-text>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="section-body">
      <div v-for="(item, index) in oneMaterial.body" :key="index">
        <div v-if="[0, 2, 7, 8, 10].includes(index)">
          <!-- <div v-if="true"> -->
          <div class="section-title">{{ item.title }}</div>
          <div v-if="(typeof item.content == 'string')">
            <div >{{ item.content }}</div>
          </div>
          <div v-if="(typeof item.content == 'object')">
            <div v-for="(section, idx) in item.content" :key="idx">
              <p class="paragraph">
                <span class="section-label">{{ section.title }} : </span>
                <span v-if="(typeof section.value == 'string')">
                  <span>{{ section.value }}</span>
                </span>
              </p>

              <div v-if="(typeof section.value == 'object')">
                <div v-for="(subSection, subIdx) in section.value" :key="subIdx">
                  <p class="paragraph-2">
                    <span class="sub-label">{{ subSection.title }} : </span>
                    <span v-if="(typeof subSection.value == 'string')">
                      <span>{{ subSection.value }}</span>
                    </span>
                  </p>
                  <p v-if="(typeof subSection.value == 'object')">
                  <p v-for="(subsubSection, subsubIdx) in subSection.value" :key="subsubIdx" class="paragraph">
                    <span class="sub-sub-label">{{ subsubSection.title }} : </span>
                    <span v-if="(typeof subsubSection.value == 'string')">
                      <span>{{ subsubSection.value }}</span>
                    </span>
                  </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.material-wrap {

  .header {
    background-color: #f9f9f9;
    // border-top: 3px double var(--vt-c-blue);
    border-bottom: 1px solid #eee;
  }

  .casno,
  .name,
  .pageno {
    line-height: var(--el-header-height);
    font-size: 1rem;
    font-weight: bold;
  }
}

.section-title {
  font-size: 1.2rem;
  color: var(--vt-c-gray-dark-3);
  text-align: center;
  padding: 1rem .5rem;
  font-weight: bold;
}

.section-label {
  font-size: .9rem;
  font-weight: bold;
  color: var(--vt-c-blue);
}

.sub-label {
  font-weight: bold;
  color: #333;
  padding-left: 2rem;
}

.sub-sub-label {
  font-weight: bold;
  color: #333;
  padding-left: 3rem;
}

.paragraph {
  text-indent: -2em;
  padding-left: 2em;
}

.paragraph-2 {
  text-indent: -4em;
  padding-left: 4em;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
