import { App } from 'vue'
// import menuTree from "./src/index.vue";
import menuTree from './src/menu'
export default {
  install(app: App) {
    app.component('MenuTree', menuTree)
  }
}
