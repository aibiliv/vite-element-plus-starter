import { App } from 'vue'
import MenuTree from './menuTree'
import Table from './Table'

const components = [MenuTree, Table]

export default {
  install(app: App) {
    components.map((item) => app.use(item))
  }
}
