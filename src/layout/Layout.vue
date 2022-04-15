<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <div class="collapse-div">
          <span :class="isCollapse ? 'hide-user' : 'user-name'"
            >你好，aibiliv</span
          >
          <span @click="toggle">
            <el-icon-expand v-if="isCollapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
          </span>
        </div>
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
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: $header-height;
}
.el-aside {
  border-top: 1px solid $header-background-color;
  .el-menu {
    height: calc(100% - 32px);
  }
}
.el-main {
  border-top: 1px solid $header-background-color;
}
.collapse-div {
  display: flex;
  justify-content: space-around;
  line-height: 32px;
  height: 32px;
  border-right: 1px solid #dcdfe6;
  background-color: $sideBarItem-hover-color;
  .user-name {
    font-size: 14px;
  }
  .hide-user {
    display: none;
  }
}
</style>
