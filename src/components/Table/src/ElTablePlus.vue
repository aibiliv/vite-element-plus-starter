<script>
import { ElTable } from 'element-plus'
// import { parseHeight } from 'element-plus/lib/components/table/src/util.js'
// console.log('ElTable', ElTable)
import { computed } from 'vue'
export default {
  extends: ElTable
  // setup(props) {
  //   const parseHeight = (height) => {
  //     if (typeof height === 'number') {
  //       return height
  //     }
  //     if (typeof height === 'string') {
  //       if (/^\d+(?:px)?$/.test(height)) {
  //         return Number.parseInt(height, 10)
  //       } else {
  //         return height
  //       }
  //     }
  //     return null
  //   }
  //   const fixedBodyHeight = computed(() => {
  //     if (props.height) {
  //       return {
  //         height: layout.fixedBodyHeight.value ? layout.fixedBodyHeight.value + 'px' : ''
  //       }
  //     } else if (props.maxHeight) {
  //       let maxHeight = parseHeight(props.maxHeight)
  //       if (typeof maxHeight === 'number') {
  //         maxHeight = layout.scrollX.value ? maxHeight - layout.gutterWidth : maxHeight
  //         if (props.showHeader) {
  //           maxHeight -= layout.headerHeight.value
  //         }
  //         maxHeight -= layout.footerHeight.value
  //         return {
  //           'max-height': maxHeight + 'px'
  //         }
  //       } else if (maxHeight.match(/\d+(vh|%)/g)) {
  //         let resHeight = layout.scrollX.value ? `100% - ${layout.gutterWidth}px` : '100%'
  //         if (props.showHeader) {
  //           resHeight = `${resHeight} - ${layout.headerHeight.value}px`
  //         }
  //         resHeight = `${resHeight} - ${layout.footerHeight.value}px`
  //         return {
  //           'max-height': `calc(${resHeight})`
  //         }
  //       }
  //     }
  //   })
  //   return {
  //     fixedBodyHeight
  //   }
  // }
}
</script>
<style lang="scss" scoped>
::v-deep.el-table {
  display: flex;
  flex-direction: column;
  .el-table__header-wrapper {
    flex-shrink: 0;
  }
  .el-table__body-wrapper {
    flex-grow: 1;
  }
  &::before,
  ::v-deep .el-table__fixed::before,
  ::v-deep .el-table__fixed-right::before {
    height: 0;
  }
  .fkhIconfont {
    font-size: 13px;
    padding-right: 4px;
  }
  th {
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    color: #212a3e;
  }
  td {
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    font-weight: 500;
    // &.el-table__cell {
    // padding: 3px 0;
    // }
  }
  //斑马纹
  .el-table__body tr.el-table__row--striped td.el-table__cell {
    background-color: #f4f5f7;
  }
  //hover行
  .el-table__body tr.hover-row td.el-table__cell {
    background-color: #ddeaff;
  }
  .el-table__body tr:hover > td.el-table__cell {
    background-color: #ddeaff;
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
      // font-size: 14px;
      padding: 0;
      // color: $main-color;
      border: unset;
    }
    .el-button--text:not(:nth-child(1)):before {
      content: '';
      width: 0px;
      // border-right: 1px solid blue;
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
</style>
