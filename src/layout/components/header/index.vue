<template>
  <div class="header">
    <div>后台管理系统</div>
    <!-- <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>-->
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  background-color: $header-background-color;
  border-bottom: 1px solid $header-background-color;
  display: flex;
  align-items: center;
  color: $header-text-color;
  font-size: 18px;
}
</style>