<template>
  <ElTableColumn
    :label="item.label"
    :prop="item.prop"
    :fixed="item.fixed"
    :sortable="item.sortable"
    :show-overflow-tooltip="item.showTooltip ? item.showTooltip : item.showTooltip === false ? false : true"
    :formatter="item.formatter"
    :width="item.width"
    :min-width="item.minWidth"
    :align="item.align ? item.align : 'left'"
    :resizable="resizable"
    :render-header="item.renderHeader"
  >
    <template v-if="item.children && item.children.length > 0">
      <!-- <columnItem v-for="(subItem, index) in item.children" :key="index" :item="subItem"> -->
      <ColumnItem
        :tableHeader="subItem.children"
        v-for="(subItem, index) in tableHeaderOfPermission.filter((res) => !res.hidden)"
        :key="index"
        :item="subItem"
      >
        <template v-for="prop in getChildrenProps(subItem)" #[prop]="{ scope }">
          <slot :name="prop" :scope="scope"></slot>
        </template>
      </ColumnItem>
    </template>
    <template v-if="(!item.children || item.children.length < 1) && slots[item.prop]" #default="scope">
      <slot :name="item.prop" :scope="scope"></slot>
    </template>
  </ElTableColumn>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ElTableColumn } from 'element-plus'
export default defineComponent({
  name: 'ColumnItem',
  components: {
    ElTableColumn
  },
  props: {
    item: { type: Object, default: () => {} },
    resizable: { type: Boolean, default: false },
    tableHeader: { type: Array, default: () => [] }
  },
  setup(props, { slots }) {
    const tableHeaderOfPermission = computed(() => {
      return props.tableHeader
    })
    const getChildrenProps = (item: any) => {
      let props: any[] = []
      const func = (item: any) => {
        if (item.children && item.children.length > 0) {
          item.children.forEach((res: any) => {
            if (res.children && res.children.length > 0) {
              getChildrenProps(res.children)
            } else {
              if (res.prop && slots[res.prop]) {
                props.push(res.prop)
              }
            }
          })
        } else {
          if (item.prop && slots[item.prop]) {
            props.push(item.prop)
          }
        }
      }
      func(item)
      return props
    }
    return {
      slots,
      tableHeaderOfPermission,
      getChildrenProps
    }
  }
})
</script>
