<template>
  <el-menu
    class="el-menu-vertical-demo"
    :defaultActive="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <div v-for="(item, i) in menus" :key="i">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item[index]">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(child, index1) in item.children" :key="index1" :index="child.index1">
          <!-- <component v-if="child[icon]" :is="`el-icon-${toLine(child[icon])}`"></component> -->
          <span>{{ child[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuItem } from './types'
import { defineProps } from 'vue'
import { toLine } from '@/utils'
let props = defineProps({
  menus: {
    type: Array as PropType<any[]>,
    require: true
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false
  },
  //键名
  name: {
    type: String,
    default: 'name'
  },
  index: {
    type: String,
    default: 'index'
  },
  icon: {
    type: String,
    default: 'icon'
  },
  children: {
    type: String,
    default: 'children'
  }
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 6px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
