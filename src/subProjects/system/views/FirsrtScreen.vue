<template>
  <div class="app-list">
    <div class="app-item" v-for="(item, index) in systemList" :key="index" @click="jumpUrl(item)">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
let systemList = [
  {
    systemId: 1,
    title: '综合管理部系统',
    pathUrl: `http://${window.location.hostname}:${
      import.meta.env.VITE_APP_SYSTEM_PORT
    }/system-web/`
  },
  {
    systemId: 2,
    title: '电子商务开发部系统',
    pathUrl: `http://${window.location.hostname}:${import.meta.env.VITE_APP_YEXIN_PORT}/yexin-web/`
  }
]
const jumpUrl = (item) => {
  if (item.pathUrl.indexOf('http:') === -1) {
    this.$router.push(item.pathUrl)
  } else {
    window.location.href = item.pathUrl
  }
}
</script>

<style lang="scss" scoped>
.app-list {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .app-item {
    width: 200px;
    height: 200px;
    background-color: #78abff;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-size: 26px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
