<template>
  <el-container>
    <el-header>
      <!-- <Header v-model:collapse="isCollapse"></Header> -->
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <div class="collapse-div"></div>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse"></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
        <SideBar :collapse="isCollapse"></SideBar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import SideBar from './components/sideBar/index.vue'
let isCollapse = ref(false)

let toggle = () => {
  isCollapse = !isCollapse
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.el-aside {
  border-top: 1px solid $header-background-color;
}
</style>