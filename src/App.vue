<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
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