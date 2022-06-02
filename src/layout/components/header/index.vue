<template>
  <div class="header">
    <div>后台管理系统</div>
    <div @click="logout">登出</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const logout = async () => {
  try {
    await store.dispatch('user/resetToken')
    // 登录成功重定向
    router.push({ path: '/login' })
  } catch (error) {
    alert(error)
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: $header-height;
  padding: 0 20px;
  background-color: $header-background-color;
  // border-bottom: 1px solid $header-background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $header-text-color;
  font-size: 18px;
}
</style>
