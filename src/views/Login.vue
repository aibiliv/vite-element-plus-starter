<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const username = 'admin'
const token = ''
const router = useRouter()
const store = useStore()
const login = async () => {
  console.log('login')
  try {
    await store.dispatch('user/login', { username })
    ElMessage.success('登录成功')
    // 登录成功重定向
    router.push({ path: '/' })
  } catch (error) {
    alert(error)
  }
}
</script>
