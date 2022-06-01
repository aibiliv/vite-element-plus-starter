<template>
  <div>
    账号审批
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
