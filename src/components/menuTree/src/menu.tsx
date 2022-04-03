import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import { toLine } from "~/utils";
import * as Icons from "@element-plus/icons-vue";
import './styles/index.scss'
export default defineComponent({
    props: {
        menus: {
            type: Array as PropType<MenuItem[]>,
            require: true
        },
        defaultActive: {
            type: String,
            default: ''
        },
        router: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        let attrs = useAttrs()
        let renderMenu = (data: MenuItem[]) => {
            return data.map((item: MenuItem) => {
                item.i = (Icons as any)[item.icon!]
                // 处理插槽
                let slots = {
                    title: () => {
                        return <>
                            <item.i />
                            <span>{item.name}</span>
                        </>
                    }
                }
                // 递归渲染子菜单
                if (item.children && item.children.length) {
                    return (
                        <el-sub-menu index={item.index} v-slots={slots}>
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    )
                }
                // 正常渲染普通菜单
                return (
                    <el-menu-item index={item.index}>
                        <item.i />
                        <span>{item.name}</span>
                    </el-menu-item>
                )
            })

        }
        return () => {
            return (
                <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
                    {renderMenu(props.menus)}
                </el-menu>
            )
        }
    }
})