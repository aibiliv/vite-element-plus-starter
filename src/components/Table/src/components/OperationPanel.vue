<template>
  <div :class="['OperationPanel', tabs.length > 0 ? '' : 'no-tabs']">
    <div class="filter-col-popover clearfix">
      <!-- tab选项卡 -->
      <!-- <div class="tabs" :style="tabs.length === 0 ? { display: 'none' } : {}">
        <slot name="tabs">
          <div class="multi-tabs">
            <div v-for="tab in tabs" :key="tab.id" :class="['one-tab', tab.chosen && 'chosen']" @click="tabClick(tab)">
              {{ tab.label }}
            </div>
          </div>
        </slot>
      </div> -->
      <div :class="tabs.length > 0 ? 'btns-right' : 'btns-flex'">
        <!-- 功能性按钮 -->
        <span class="funcBtns">
          <!-- 放在左侧的按钮 -->
          <slot name="leftBtns" />
        </span>
        <span class="table-settings">
          <!-- 其他放在右侧的按钮 -->
          <slot name="rightBtns" />
          <span v-if="showSet" style="margin-left: 15px">
            <!-- 全屏 -->
            <!-- <FullScreen style="margin-right: 10px"></FullScreen> -->
            <!-- <el-icon-fullscreen></el-icon-fullscreen> -->
            <!-- 表格size -->
            <el-dropdown trigger="click" style="margin-right: 10px">
              <el-icon-zoomout></el-icon-zoomout>
              <!-- <SvgIcon icon-class="size"></SvgIcon> -->
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-on:click="changeSize('default')">默认</el-dropdown-item>
                  <el-dropdown-item v-on:click="changeSize('large ')">宽松</el-dropdown-item>
                  <el-dropdown-item v-on:click="changeSize('small')">紧凑</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <!-- 设置表格列 -->
            <ElPopover style="margin-right: 10px" v-model="visible" placement="bottom" title="列展示 ( 可拖动 )" trigger="click">
              <TableColumnSetting :columns="computedSectors" :visible="showTableColumnSetting" @set="handleSelectionChange" />
              <template #reference>
                <span v-show="isCanSetTableColumn != false" @click="showTableColumnSetting = true">
                  <el-icon-setting></el-icon-setting>
                  <!-- <SvgIcon slot="reference" icon-class="nested"></SvgIcon> -->
                </span>
              </template>
            </ElPopover>
          </span>
          <!-- 导入和导出 -->
          <!-- v-if="attrs?.import" -->
          <el-upload
            style="display: inline-block; margin-right: 5px; line-height: 16px"
            accept=".xls,.xlsx"
            :show-file-list="false"
            action=""
            :http-request="importHandle"
          >
            <el-icon-upload></el-icon-upload>
            <!-- <SvgIcon icon-class="import" /> -->
          </el-upload>
          <el-icon-download @click="exportHandle"></el-icon-download>
          <!-- <SvgIcon icon-class="export" @click="exportHandle" /> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

onMounted(() => {
  console.log('attrs', attrs)
})

const changeSize = (size: String) => emit('update:size', size)
//列设置勾选
const handleSelectionChange = (evt: Event) => emit('changeColumn', evt)
// 导入
const importHandle = (params: any) => emit('import', params)
// 导出
const exportHandle = () => emit('export')
</script>

<style scoped lang="scss">
::v-deep.OperationPanel {
  background: transparent;
  padding-top: 10px;
  border-bottom: 1px solid $border-color;
  margin-bottom: 20px;
  &.no-tabs {
    border: none;
    margin-bottom: 0;
  }
  .tabs {
    display: inline-block;
    .el-tabs__header {
      margin-bottom: 0;
    }
  }
  .multi-tabs {
    display: flex;
    margin-bottom: -1px;
    .one-tab {
      width: auto;
      height: 40px;
      padding: 0 24px;
      text-align: center;
      background: $main-background-color;
      line-height: 40px;
      font-size: 14px;
      color: #303133;
      box-sizing: border-box;
      border: 1px solid $border-color;
      border-left: none;
      cursor: pointer;
      &:first-child {
        border-left: 1px solid $border-color;
      }
    }
    .one-tab.chosen {
      border-top: 2px solid $theme-color;
      background: #ffffff;
      color: $theme-color;
      border-bottom: none;
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
    .el-button--small {
      font-size: 14px;
      &.el-button--primary {
        background-color: unset;
        color: $theme-color;
        padding: 8px 12px;
      }
    }
    .el-tag {
      line-height: 32px;
    }
    .table-settings {
      line-height: 32px;
      .el-button {
        margin-left: 15px;
      }
      .svg-icon + .svg-icon {
        margin-left: 10px;
      }
    }
  }
  .btns-right {
    float: right;
    margin-top: -10px;
  }
  .filter-col-popover {
    height: 32px;
    .filter-col {
      margin-left: 4px;
      // float: right;
      // border: 1px solid gray;
      // margin-bottom: 15px;
      width: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  .svg-icon {
    cursor: pointer;
    &:hover {
      color: $theme-color;
    }
  }
}
</style>
