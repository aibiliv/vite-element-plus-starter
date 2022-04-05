<template>
  <div>
    表格页
    <el-button @click="goDetail">去看详情</el-button>
  </div>
</template>

<script setup lang="ts">
console.log('ssss', import.meta.env)

const router = useRouter()
let goDetail = () => {
  console.log('router', router.getRoutes())

  router.push({
    path: '/yexin-web/table/tableDetail'
  })
}
</script>

<style scoped></style>
