<script setup>
import { ref } from 'vue'
const table = ref()
let page = ref({
  size: 10,
  current: 1,
  total: 100
})
const tableData = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu1'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu2'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu3',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu31'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu32'
      }
    ]
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  }
]
const tableHeader = [
  { prop: 'date', label: '日期' },
  { prop: 'name', label: '名字' },
  { prop: 'address', label: '地址' }
]
const getList = (val) => {
  console.log('val', val)
}
const clear = () => {
  table.value.clearSelection()
}
</script>

<template>
  <Table
    ref="table"
    :table-data="tableData"
    v-model:table-header="tableHeader"
    v-model:current-page="page.current"
    v-model:page-size="page.size"
    :total="page.total"
    @change-page="getList"
  >
    <template #operation="{ scope }"> {{ scope.row.name }} </template>
  </Table>
  <ElButton @click="clear">清空</ElButton>
</template>
