<template>
  <div ref="tableBox" class="tool-table-box">
    <div class="table-container">
      <!-- 表格主体 -->
      <ElTable
        ref="table"
        :key="key"
        v-loading.lock="loading"
        v-bind="attrs"
        :data="tableData"
        :row-key="rowKey"
        :default-expand-all="defaultExpandAll"
        :summary-method="summaryMethod"
        :span-method="spanMethod"
        :show-summary="summaryMethod ? true : false"
        :tree-props="treeProps"
        :height="height"
        :max-height="maxHeight"
        :lazy="lazy"
        :load="load"
        :size="computedSize"
        :fit="true"
        :stripe="true"
        element-loading-text="拼命加载中"
        :border="resizable ? true : border"
        :expand-row-keys="expandRow.length > 0 ? expandRow : null"
        v-on="listeners"
        @selection-change="handleSelectionChange"
        @expand-change="handleExpendChange"
        @filter-change="handleFilterChange"
      >
        <ElTableColumn
          :reserve-selection="reserveSelection"
          type="selection"
          :selectable="selectable"
          :resizable="false"
          width="50"
          fixed="left"
          align="center"
        />
        <ElTableColumn width="55" fixed="left" type="index" label="序号" align="left" :resizable="false" />
        <slot>
          <ColumnItem
            :tableHeader="item.children"
            v-for="(item, index) in props.tableHeader.filter((res) => !res.hidden)"
            :key="index"
            :item="item"
            :resizable="resizable"
          >
            <template v-for="prop in getChildrenProps(item)" #[prop]="{ scope }">
              <slot :name="prop" :scope="scope"></slot>
            </template>
          </ColumnItem>
        </slot>
        <ElTableColumn :fixed="'right'" type="text" :label="'操作'" align="left">
          <!-- 操作列header插槽 -->
          <template #header>
            <slot name="operationHeader"></slot>
          </template>
          <!-- 操作列作用域插槽 -->
          <template #default="scope">
            <slot name="operation" :scope="scope"></slot>
          </template>
        </ElTableColumn>
        <template #append>
          <slot name="append"></slot>
        </template>
      </ElTable>
      <div v-if="showPage" class="page-box">
        <span>
          <slot name="bottomBtns" />
        </span>
        <ElPagination
          v-model:currentPage="props.currentPage"
          v-model:page-size="props.pageSize"
          :page-sizes="[5, 10, 15, 20, 50, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="props.total"
          @size-change="sizeChange"
          @current-change="currentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, defineComponent } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import ColumnItem from './components/ColumnItem.vue'
export default defineComponent({
  components: {
    ColumnItem,
    ElTable,
    ElTableColumn,
    ElPagination
  },
  props: {
    loading: { type: Boolean, default: false },
    showPage: { type: Boolean, default: true }, //是否显示分页
    showPanel: { type: Boolean, default: true }, //是否显示操作面板
    isShowIndex: { type: Boolean, default: false }, //是否显示序号
    isShowSelection: { type: Boolean, default: false }, //是否显示勾选框
    reserveSelection: { type: Boolean, default: false }, //是否缓存已勾选行，通常用于分页勾选，默认关闭，开启时必须指定rowKey
    showOperation: { type: Boolean, default: true }, //是否显示操作列
    defaultExpandAll: { type: Boolean, default: false }, //是否默认展开所有
    rowKey: { type: String, default: 'id' }, //每行数据的唯一标识，
    tableData: { type: Array, default: () => [] },
    expandRow: { type: Array, default: () => [] }, //展开行
    tableHeader: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 15 },
    operationColumnWidth: { type: Number, default: 220 }, // 操作列宽度
    operationColumnName: { type: String, default: '操作' }, //操作列名称
    spanMethod: { type: Function, default: null }, //合并行列的计算方法
    summaryMethod: { type: Function, default: null }, //合计计算方法
    operationFixed: { type: String, default: 'right' }, //操作列固定
    treeProps: {
      type: Object,
      default: () => {
        return { hasChildren: 'hasChildren', children: 'children' }
      }
    },
    height: { type: [String, Number], default: null },
    // maxHeight: { type: [String, Number], default: 550 },
    maxHeight: { type: [String, Number], default: '100%' },
    border: { type: Boolean, default: false },
    size: { type: String, default: 'small' },
    resizable: { type: Boolean, default: true },
    lazy: { type: Boolean, default: false },
    load: { type: Function, default: null }
  },
  setup(props, { attrs, listeners, slots, expose, emit }) {
    let selectedCount = ref(0)
    let key = ref(1)
    console.log('key', key)
    console.log('expose', expose)
    const table = ref()
    const tableHeaderOfPermission = computed(() => {
      return props.tableHeader
    })

    const getChildrenProps = (item) => {
      const props = []
      const func = (item) => {
        if (item.children && item.children.length > 0) {
          item.children.forEach((res) => {
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

    const selectable = (row) => {
      // 默认不禁用  如果想要禁用的话  请把想要禁用的那一条数据里手动添加 isSelection = 1 这个字段
      let type = 0
      if (row.isSelection) {
        type = row.isSelection
      }
      return type === 0
    }
    const sizeChange = (val) => {
      emit('update:current-page', 1)
      emit('update:page-size', val)
      emit('change-page', { page: 1, limit: val, pageNo: 1, maxRow: val })
    }
    const currentChange = (val) => {
      emit('update:current-page', val)
      emit('change-page', {
        page: val,
        limit: props.pageSize,
        pageNo: val,
        maxRow: props.pageSize
      })
    }
    const handleSelectionChange = ($event) => {
      selectedCount.value = $event.length
      emit('selection-change', $event)
    }
    const handleExpendChange = (row, expend) => {
      emit('expand-change', { row, expend })
    }
    const handleFilterChange = (filters) => {
      console.log(filters)
    }
    const toggleRowSelection = (item, status) => {
      table.value?.toggleRowSelection(item, status)
    }
    //清除选中
    const clearSelection = () => {
      console.log('table.value', table.value)
      table.value?.clearSelection()
    }
    return {
      props,
      attrs,
      listeners,
      tableHeaderOfPermission,
      getChildrenProps,
      selectable,
      sizeChange,
      currentChange,
      handleSelectionChange,
      handleExpendChange,
      handleFilterChange,
      toggleRowSelection,
      clearSelection
    }
  }
})
</script>
<style lang="scss" scoped>
// .tool-table-box {
//   height: 100%;
//   background: #fff;
//   overflow: hidden;
//   .table-container {
//     height: calc(100% - 90px);
//   }
// }
::v-deep.el-table {
  // &::before,
  // .el-table__fixed::before,
  // .el-table__fixed-right::before {
  //   height: 0;
  // }
  th {
    box-sizing: border-box;
    font-weight: bold;
    color: #000;
    background-color: var(--el-fill-color-light);
    &.el-table-fixed-column--left,
    &.el-table-fixed-column--right {
      background-color: var(--el-fill-color-light);
    }
  }
  td {
    background-color: #fff;
  }
  &.el-table--mini {
    th {
      height: 31px;
      line-height: 31px;
    }
    td {
      height: 32px;
      line-height: 32px;
    }
    .cell {
      font-size: 12px;
      .el-button--text {
        font-size: 12px;
      }
    }
  }
  &.el-table--small {
    th {
      height: 35px;
      line-height: 35px;
    }
    td {
      height: 36px;
      line-height: 36px;
    }
    .cell {
      font-size: 14px;
      .el-button--text {
        font-size: 14px;
      }
    }
  }
  &.el-table--medium {
    th {
      height: 41px;
      line-height: 41px;
    }
    td {
      height: 42px;
      line-height: 42px;
    }
    .cell {
      font-size: 14px;
      .el-button--text {
        font-size: 14px;
      }
    }
  }
  .cell {
    .el-button--text {
      padding: 0;
      color: var(--el-color-primary);
      border: unset;
    }
    .el-button--text:not(:nth-child(1)):before {
      content: '';
      width: 0px;
      // border-right: 1px solid var(--el-color-primary);
      opacity: 0.5;
      height: 100%;
    }
    .not-has-permission {
      cursor: not-allowed;
      pointer-events: none;
    }
    .el-button {
      padding: 0 5px;
    }
    .el-button + .el-button {
      margin-left: 0 !important;
    }
  }
}
::v-deep.page-box {
  padding-top: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .selected-count {
    padding-top: 10px;
    font-size: 14px;
  }
  .el-button + span {
    margin-left: 10px;
  }
  .el-pagination {
    overflow: hidden;
    // text-align: right;
    padding: 0;
    &.is-background .el-pager li:not(.disabled).is-active {
      background-color: var(--el-color-primary);
      border: 1px solid var(--el-color-primary);
      color: #fff;
    }
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    border: 1px solid var(--el-border-color);
    color: #515a6e;
    background-color: #fff;
  }
  .el-pagination.is-background .btn-next.disabled,
  .el-pagination.is-background .btn-next:disabled,
  .el-pagination.is-background .btn-prev.disabled,
  .el-pagination.is-background .btn-prev:disabled,
  .el-pagination.is-background .el-pager li.disabled {
    color: #ccc;
    border: 1px solid var(--el-border-color);
    background-color: #f8f9fa;
  }
}
</style>
