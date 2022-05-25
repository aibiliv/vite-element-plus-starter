<template>
  <MenuTree :menus="menus" router :collapse="collapse" :defaultActive="$route.path"></MenuTree>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>()
let menus = [
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
    // children: [
    //   {
    //     title: '菜单1',
    //     name: 'tabledetail',
    //     index: '/',
    //     icon: 'document'
    //   }
    // ]
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
</script>

<style lang="scss" scoped>
::v-deep svg {
  width: 2em;
}
</style>
