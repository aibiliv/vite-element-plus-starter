<template>
  <div class="breadcrumb">
    <el-icon-location />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">表格</el-breadcrumb-item>
      <el-breadcrumb-item>列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  height: $breadcrumb-height;
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1px solid $border-color;
  border-top: 0;
}
</style>
