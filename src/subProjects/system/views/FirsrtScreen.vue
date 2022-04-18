<template>
  <div class="header">
    <div>{{ '微应用系统' }}</div>
  </div>
  <div class="app-list">
    <div class="app-item" v-for="(item, index) in systemList" :key="index" @click="jumpUrl(item)">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type ProjectConfig = {
  systemId: number
  title: string
  pathUrl: string
}
let systemList: ProjectConfig[] = [
  {
    systemId: 1,
    title: '电子商务开发部系统',
    pathUrl: `http://${window.location.hostname}:${import.meta.env.VITE_APP_YEXIN_PORT}/yexin-web/`
  },
  {
    systemId: 2,
    title: '电子商务总部',
    pathUrl: `http://${window.location.hostname}:${import.meta.env.VITE_APP_REACTAPP_PORT}/reactApp-web/`
  },
  {
    systemId: 3,
    title: '网络货运开发部',
    pathUrl: `http://${window.location.hostname}:${import.meta.env.VITE_APP_SECONDVUE_PORT}/secondVue-web/`
  }
]
const jumpUrl = (item: ProjectConfig) => {
  window.location.href = item.pathUrl
}
</script>

<style lang="scss" scoped>
.header {
  height: $header-height;
  padding: 0 20px;
  background-color: $header-background-color;
  border-bottom: 1px solid $header-background-color;
  display: flex;
  align-items: center;
  color: $header-text-color;
  font-size: 18px;
}
.app-list {
  height: calc(100% - $header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  .app-item {
    width: 200px;
    height: 200px;
    background-color: #99998f;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-size: 26px;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
      background-color: #11abff;
    }
  }
}
</style>
