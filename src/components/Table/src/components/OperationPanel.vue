<template>
  <div :class="['operation-panel']">
    <div class="filter-col-popover clearfix">
      <div class="btns-flex">
        <!-- 功能性按钮 -->
        <span class="funcBtns">
          <!-- 放在左侧的按钮 -->
          <slot name="leftBtns" />
        </span>
        <span class="table-settings">
          <!-- 其他放在右侧的按钮 -->
          <slot name="rightBtns" />
          <span v-if="showSet" style="margin-left: 15px">
            <!-- 表格size -->
            <el-dropdown trigger="click">
              <el-icon-histogram></el-icon-histogram>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-on:click="changeSize('default')">默认</el-dropdown-item>
                  <el-dropdown-item v-on:click="changeSize('large')">宽松</el-dropdown-item>
                  <el-dropdown-item v-on:click="changeSize('small')">紧凑</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <!-- 设置表格列 -->
            <ElPopover v-model="visible" placement="bottom" title="列展示 ( 可拖动 )" trigger="click">
              <TableColumnSetting :columns="computedSectors" :visible="showTableColumnSetting" @set="handleSelectionChange" />
              <template #reference>
                <span v-show="isCanSetTableColumn != false" @click="showTableColumnSetting = true">
                  <el-icon-setting slot="reference"></el-icon-setting>
                </span>
              </template>
            </ElPopover>
          </span>
          <!-- 导入和导出 -->
          <el-upload
            style="display: inline-block; line-height: 16px"
            accept=".xls,.xlsx"
            :show-file-list="false"
            action=""
            :http-request="importHandle"
          >
            <el-icon-upload></el-icon-upload>
          </el-upload>
          <el-icon-download @click="exportHandle"></el-icon-download>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="OperationPanel">
import { ref, computed, defineComponent, defineProps, useAttrs, defineEmits, nextTick } from 'vue'
import TableColumnSetting from './TableColumnSetting.vue'
const props = defineProps({
  isCanSetTableColumn: { type: Boolean, default: true },
  sectors: { type: Array, default: () => [] },
  tabs: { type: Array, default: () => [] },
  //是否显示设置面板
  showSet: { type: Boolean, default: true }
})
const attrs = useAttrs()
const emit = defineEmits(['update:size', 'changeSize', 'changeColumn', 'import', 'export'])
const visible = ref(false)

const showTableColumnSetting = ref(false)

const computedSectors = computed(() => {
  return props.sectors.map((item: any) => {
    item.isShow = true
    if (item.hidden) item.isShow = false
    return item
  })
})

const changeSize = (size: string) => emit('update:size', size)
//列设置勾选
const handleSelectionChange = (evt: Event) => emit('changeColumn', evt)
// 导入
const importHandle = (params: any) => emit('import', params)
// 导出
const exportHandle = () => emit('export')
</script>

<style scoped lang="scss">
.operation-panel {
  background: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #eaeef6;
  // margin-bottom: 0px;
  border: none;
  .tabs {
    display: inline-block;
    :deep(.el-tabs__header) {
      margin-bottom: 0;
    }
  }
  .btns-flex {
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
    .funcBtns {
      flex: auto;
      & > span {
        width: 100%;
        & > span {
          width: 100%;
          & > span {
            width: 100%;
          }
        }
      }
    }
    :deep(.el-button--small) {
      font-size: 14px;
      &.el-button--primary {
        background-color: unset;
        color: var(--el-color-primary);
        padding: 8px 12px;
      }
    }
    :deep(.el-tag) {
      line-height: 32px;
    }
    .table-settings {
      line-height: 32px;
      :deep(.el-button) {
        margin-left: 15px;
      }
      .svg-icon + .svg-icon {
        margin-left: 10px;
      }
    }
  }

  .filter-col-popover {
    height: 32px;
    .filter-col {
      margin-left: 4px;
      width: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  :deep(.el-dropdown) {
    vertical-align: baseline;
  }
  :deep(.el-tooltip__trigger) {
    color: #000;
  }
  svg {
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
