<template>
  <div class="header">
    <div
      >{{ APP_MAP[appStr] }}
      <el-button @click="goFirstScreen">返回首屏</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const APP_MAP = {
  'system-web': '综合管理部系统',
  'yexin-web': '电子商务开发部系统'
}
let appStr = location.pathname.replace('/', '').replace('/', '')

const router = useRouter()
const goFirstScreen = () => {
  window.location.href = `http://${window.location.hostname}:${
    import.meta.env.VITE_APP_SYSTEM_PORT
  }`
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
</style>
