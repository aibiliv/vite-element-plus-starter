<template>
  <MenuTree :menus="menus" router :collapse="collapse" title="name" index="url" :defaultActive="$route.path"></MenuTree>
</template>

<script setup lang="ts">
import menu from '@/utils/menu.js'
let props = defineProps<{ collapse: boolean }>()
let menus = ref([])
const $api = inject('$api')
const getMenu = async () => {
  // const res = await $api.menu.findMenuTreeSideBar()
  const res = { data: menu }
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
