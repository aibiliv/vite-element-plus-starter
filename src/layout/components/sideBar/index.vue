<template>
  <MenuTree :menus="menus" router :collapse="collapse" title="name" index="url" :defaultActive="$route.path"></MenuTree>
</template>

<script setup lang="ts">
import menu from '@/utils/menu.js'
let props = defineProps<{ collapse: boolean }>()
const arr = [
  {
    title: '首页',
    name: 'home',
    index: '/',
    icon: 'Document'
  },
  {
    title: '表格',
    name: 'table',
    index: '/table',
    icon: 'Document'
  },
  {
    title: '菜单',
    name: '导航3',
    index: '3',
    icon: 'ChatLineRound',
    children: [
      {
        title: '菜单1',
        name: 'menu',
        index: '/menu',
        icon: 'document'
      }
    ]
  },
  {
    title: '系统',
    name: '系统',
    index: '3',
    icon: 'ChatLineRound',
    children: [
      {
        title: '角色',
        name: 'menu',
        index: '/systemConfig/role',
        icon: 'document'
      }
    ]
  }
]
let menus = ref(arr)
const $api = inject('$api')
const getMenu = async () => {
  const res = await $api.menu.findMenuTreeSideBar()
  sessionStorage.setItem('menuTree', JSON.stringify(res.data))
  menus.value = res.data
}
getMenu()
</script>

<style lang="scss" scoped>
:deep(svg) {
  width: 2em;
}
</style>
