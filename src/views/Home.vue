<script setup>
const table = ref()
let page = ref({
  size: 10,
  current: 1,
  total: 100
})
let tableData = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu1',
    address: 'dsadfasdfafg'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu2',
    address: 'dsadfasdfafg'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu3',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu31',
        address: 'dsadfasdfafg'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu32',
        address: 'dsadfasdfafg'
      }
    ]
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4',
    address: 'dsadfasdfafg'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu4'
  }
])
let tableHeader = ref([
  { prop: 'date', label: '日期', width: '600px' },
  {
    prop: 'name',
    label: '名字',
    width: '600px',
    align: 'center',
    children: [
      { prop: 'date', label: '名字1', width: '300px', formatter: () => '66666' },
      { prop: 'address', label: '名字2', width: '300px' }
    ]
  },
  { prop: 'address', label: '地址', width: '600px' }
])
const getList = (val) => {
  console.log('val', val)
}
const clear = () => {
  table.value.clearSelection()
}
</script>

<template>
  <div style="height: 70vh">
    <Table
      ref="table"
      :table-data="tableData"
      v-model:table-header="tableHeader"
      v-model:current-page="page.current"
      v-model:page-size="page.size"
      :total="page.total"
      @change-page="getList"
    >
      <template #operation="{ scope }">
        <ElButton size="small" type="primary">{{ scope.row.name }}</ElButton>
      </template>
      <template #bottomBtns>
        <ElButton @click="clear">清空</ElButton>
      </template>
    </Table>
  </div>
</template>
