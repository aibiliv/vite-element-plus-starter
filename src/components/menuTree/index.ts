import { App } from 'vue'
import menuTree from "./src/index.vue";
import infinityMenuTree from './src/menu'
export default {
    install(app: App) {
        app.component('MenuTree', menuTree)
        app.component('InfinityMenuTree', infinityMenuTree)
    }
}