<template>
  <div class="header">
    <div>后台管理系统</div>
    <div>用户名</div>
  </div>
</template>

<script setup lang="ts"></script>

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
