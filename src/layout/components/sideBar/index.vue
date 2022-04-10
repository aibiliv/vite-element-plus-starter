<template>
  <MenuTree
    :menus="menus"
    router
    :collapse="collapse"
    :defaultActive="$route.path"
    index="path"
    name="name"
    title="title"
    icon="icon"
  ></MenuTree>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>()
const router = useRouter()
console.log('router', router.options.routes[1])
let menus = router.options.routes[1].children
// [
//   {
//     title: '首页',
//     name: 'home',
//     index: '/home',
//     icon: 'Document'
//   },
//   {
//     title: '表格',
//     name: 'table',
//     index: '/table',
//     icon: 'Document'
//   },
//   {
//     title: '菜单',
//     name: '导航3',
//     index: '3',
//     icon: 'ChatLineRound',
//     children: [
//       {
//         title: '菜单1',
//         name: 'menu',
//         index: '/menu',
//         icon: 'document'
//       }
//     ]
//   }
// ]
</script>

<style lang="scss" scoped></style>
