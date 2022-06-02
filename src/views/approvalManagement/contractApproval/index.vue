<template>
  <div> 合同审批 </div>
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
