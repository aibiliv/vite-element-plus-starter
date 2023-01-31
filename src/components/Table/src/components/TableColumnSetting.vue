<template>
  <div class="table-column-setting">
    <draggable v-model="showColumn" class="body" group="table-column-setting" animation="500" :move="onMove" @end="finishMove">
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
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
//@ts-ignore
import _ from 'lodash'

const props = defineProps({
  visible: Boolean,
  columns: { type: Array, default: () => [] }
})
const emit = defineEmits(['set', 'changeSize', 'changeColumn', 'import', 'export'])
const showColumn = ref([])

watch(props.columns, (newvalue) => initDsplColumns(newvalue), { deep: true })

onMounted(() => {
  initDsplColumns(props.columns)
})

const initDsplColumns = (newVal: any[]) => {
  const newArr = _.cloneDeep(newVal)
  showColumn.value = newArr
}

const changeCheck = (e?: any) => {
  const arr = showColumn.value.map((item) => {
    //@ts-ignore
    if (!item.isShow) item.hidden = true
    //@ts-ignore
    else item.hidden = false
    return item
  })
  emit('set', arr)
}

const onMove = (e: any) => {
  return e.draggedContext.element.foldable && e.relatedContext.element.foldable
}

const finishMove = () => changeCheck()
</script>
<style lang="scss" scoped>
::v-deep.table-column-setting {
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
