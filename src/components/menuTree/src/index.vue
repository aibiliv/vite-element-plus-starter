<template>
  <el-menu class="menu-tree" :unique-opened="true" :defaultActive="defaultActive" :router="router" v-bind="$attrs">
    <div v-for="(item, i) in menus" :key="i">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[title] }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item[index]">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[title] }}</span>
        </template>
        <el-menu-item :ref="'menuItem' + child.name" v-for="(child, index1) in item.children" :key="index1" :index="child[index]">
          <!-- @click.native="($event) => clickItem(child, $event)" -->
          <!-- <component v-if="child[icon]" :is="`el-icon-${toLine(child[icon])}`"></component> -->
          <span>{{ child[title] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuItem } from './types'
import { defineProps } from 'vue'
import { toLine } from '@/utils/index.ts'
const instance = getCurrentInstance()
const router = useRouter()
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
  title: {
    type: String,
    default: 'title'
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
// export default defineComponent({
//   name: 'MenuTree'
// })
const clickItem = (menu: MenuItem, $event: EventTarget) => {
  console.log('instance.ctx', instance.ctx)

  const currentMenu = instance.ctx.$refs['menuItem' + menu.name][0].$el
  console.log('currentMenu', currentMenu.classList)
  // currentMenu.classList.add('is-active')

  if (menu.name === '项目审批') {
    router.push({
      name: 'approvalManagement_projectApproval',
      params: {
        name: menu.name
      }
    })
  } else {
    router.push({
      name: 'approvalManagement_accountApproval',
      params: {
        name: menu.name
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.menu-tree:not(.el-menu--collapse) {
  width: 200px;
}
</style>
