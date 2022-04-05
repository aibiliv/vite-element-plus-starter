<template>
  <div id="app" v-loading="globalLoading">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      globalLoading: false
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
svg {
  width: 1em;
  height: 1em;
}
html,
body,
#app,
.el-container,
.el-aside {
  height: 100%;
}
</style>
