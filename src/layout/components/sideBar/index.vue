<template>
  <!-- <el-menu default-active="2" :collapse="collapse" class="el-menu-vertical-demo">
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
  </el-menu>-->
  <MenuTree :menus="menus" router :collapse="collapse" :defaultActive="$route.path"></MenuTree>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>()
let menus = [
  {
    name: '首页',
    index: '/',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '/menu',
    icon: 'AlarmClock'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'ChatLineRound',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
</style>