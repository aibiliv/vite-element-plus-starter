<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
const token = ''
const router = useRouter()
const login = () => {
  console.log('login')
  router.push({
    name: 'approvalManagement_accountApproval'
  })
}
</script>
