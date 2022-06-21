<template>
  <div class="tableColumnSetting">
    <draggable v-model="showColumn" class="body" group="table-column-setting" animation="500" :move="onMove" @end="finishMove">
      <!-- <transition-group> -->
      <template #item="{ element }">
        <div class="row">
          <!-- <SvgIcon icon-class="move"></SvgIcon> -->
          <el-icon-rank></el-icon-rank>
          <span class="chosen">
            <ElCheckbox v-model="element.isShow" @change="changeCheck" />
          </span>
          <span class="title">{{ element.label }}</span></div
        >
      </template>
      <!-- <div v-for="(element, index) in showColumn" :key="'local-key-' + index" class="row">
          <SvgIcon icon-class="move"></SvgIcon>
          <span class="chosen">
            <el-checkbox v-model="element.isShow" @change="changeCheck" />
          </span>
          <span class="title">{{ element.label }}</span>
        </div> -->
      <!-- </transition-group> -->
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import _ from 'lodash'
import { ref, watchEffect, defineComponent } from 'vue'
export default defineComponent({
  components: {
    draggable
  },
  props: {
    visible: Boolean,
    columns: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { attrs, listeners, slots, expose, emit }) {
    let showColumn = ref([])
    const initDsplColumns = (newVal) => {
      console.log('newVal', newVal)
      const newArr = _.cloneDeep(newVal)
      showColumn.value = newArr
    }
    watch(props.columns, (newvalue) => initDsplColumns(newvalue), { deep: true, immediate: true })
    const changeCheck = (e) => {
      console.log('check', e)
      const arr = showColumn.value.map((item) => {
        if (!item.isShow) {
          item.hidden = true
        } else {
          item.hidden = false
        }
        return item
      })
      console.log('arr', arr)
      emit('set', arr)
    }
    const onMove = (e) => {
      return e.draggedContext.element.foldable && e.relatedContext.element.foldable
    }
    const finishMove = () => {
      changeCheck()
    }

    return { attrs, listeners, showColumn, onMove, finishMove }
  }
})
</script>
<style lang="scss" scoped>
::v-deep.tableColumnSetting {
  max-height: 60vh;
  overflow-y: auto;
  .row {
    height: 32px;
    .title,
    .chosen,
    .drag {
      margin-left: 10px;
    }
    .title {
      cursor: move;
    }
  }
}
</style>
