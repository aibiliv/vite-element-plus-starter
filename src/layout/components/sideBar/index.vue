<template>
  <el-menu default-active="2" :collapse="collapse" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon-menu />
      <span>Navigator One</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <el-icon-document />

      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <el-icon-document />
      <span>Navigator Three</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>