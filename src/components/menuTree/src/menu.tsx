import { defineComponent, PropType, useAttrs } from 'vue'
import { MenuItem } from './types'
import { toLine } from '~/utils'
import * as Icons from '@element-plus/icons-vue'
import router from '@/router/index'
import './styles/index.scss'
export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<any[]>,
      require: true
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    },
    //键名
    title: {
      type: String,
      default: 'title'
    },
    name: {
      type: String,
      default: 'name'
    },
    index: {
      type: String,
      default: 'index'
    },
    icon: {
      type: String,
      default: 'icon'
    },
    children: {
      type: String,
      default: 'children'
    }
  },
  setup(props, ctx) {
    let attrs = useAttrs()
    let handleClick = (item: MenuItem) => {
      if (!props.router) {
        router.push({
          name: item.name
        })
      }
    }
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        item.i = (Icons as any)[item[props.icon!]]
        // 处理插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.title]}</span>
              </>
            )
          }
        }
        // 递归渲染子菜单
        if (
          item[props.children] &&
          item[props.children].length &&
          item[props.children].filter((child: any) => {
            return !child.hidden
          }).length === item[props.children].length
        ) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children].filter((child: any) => !child.hidden))}
            </el-sub-menu>
          )
        }
        // 正常渲染普通菜单
        return (
          <el-menu-item
            index={item[props.index]}
            onClick={() => {
              handleClick(item)
            }}
          >
            <item.i />
            <span>{item[props.title]}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu
          class="el-menu-vertical-demo"
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.menus)}
        </el-menu>
      )
    }
  }
})
