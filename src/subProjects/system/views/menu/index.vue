<template>
  <div>
    <!-- <MenuTree :menus="menus2" defaultActive="3-1-1-1"></MenuTree> -->
    菜单页
  </div>
</template>

<script setup lang="ts">
let menus = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document'
      }
    ]
  }
]
let menus2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document'
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style scoped></style>
