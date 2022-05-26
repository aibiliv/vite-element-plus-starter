import { App } from 'vue'
import MenuTree from './menuTree'

const components = [MenuTree]

export default {
  install(app: App) {
    components.map((item) => app.use(item))
  }
}
