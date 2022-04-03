import { App } from 'vue'
import menuTree from "./menuTree";

const components = [
    menuTree
]

export default {
    install(app: App) {
        components.map((item) => app.use(item))
    }
}