<template>
  <div>
    表格页
    <el-button @click="goDetail">去看详情</el-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
let goDetail = () => {
  console.log('router', router.getRoutes())

  router.push({
    name: 'tabledetail'
  })
}
</script>

<style scoped></style>
