<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <div class="collapse-div">
          <span :class="isCollapse ? 'hide-user' : 'user-name'">你好，aibiliv</span>
          <span @click="toggle">
            <el-icon-expand v-if="isCollapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
          </span>
        </div>
        <SideBar :collapse="isCollapse"></SideBar>
      </el-aside>
      <el-main>
        <NavMenu></NavMenu>
        <Breadcrumb></Breadcrumb>
        <div class="main-container">
          <div class="app-main">
            <transition name="fade-transform" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import SideBar from './components/sideBar/index.vue'
import Breadcrumb from './components/breadcrumb/index.vue'
import NavMenu from './components/navMenu/index.vue'

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
  border-right: 1px solid $border-color;

  .el-menu {
    max-height: calc(100vh - $header-height - $navMenu-height - 1px);
    border: none;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.el-main {
  border-top: 1px solid $header-background-color;
  padding: 0;
  height: $main-height;
  .main-container {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: $main-background-color;
    height: calc(100vh - $navMenu-height - $header-height - $breadcrumb-height - 3px);
    .app-main {
      overflow: auto;
      height: 100%;
      border: 1px solid $border-color;
      background-color: #fff;
    }
  }
}
.collapse-div {
  display: flex;
  justify-content: space-around;
  line-height: calc($navMenu-height);
  height: calc($navMenu-height);
  border-right: 1px solid $border-color;
  background-color: $sideBarItem-hover-color;
  .user-name {
    font-size: 14px;
  }
  .hide-user {
    display: none;
  }
}
</style>
