<script setup>
import { ref } from 'vue'

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
</script>

<template>
  <Table
    :table-data="tableData"
    v-model:table-header="tableHeader"
    v-model:current-page="page.current"
    v-model:page-size="page.size"
    :total="page.total"
  >
    <template #operation="{ scope }"> {{ scope.row.name }} </template>
  </Table>
</template>
