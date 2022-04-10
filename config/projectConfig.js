const config = {
  projectName: 'fkh',
  system: {
    id: 1,
    accessUserType: 2,
    name: '微应用系统',
    entry: '/src/subProjects/system/main.ts',
    localPath: 'src/subProjects/system',
    publicPath: '/system-web/',
    apiContext: '/envAdmin'
  },
  yexin: {
    id: 2,
    name: '电子商务部管理系统',
    entry: '/src/subProjects/yexin/main.ts',
    localPath: 'src/subProjects/yexin',
    publicPath: '/yexin-web/',
    apiContext: '/envAdmin'
  },
  reactApp: {
    id: 3,
    name: '电子商务总部',
    entry: '/src/subProjects/reactApp/main.jsx',
    localPath: 'src/subProjects/reactApp',
    publicPath: '/reactApp-web/',
    apiContext: '/envAdmin'
  },
  secondVue: {
    id: 3,
    name: '网络货运开发部',
    entry: '/src/subProjects/secondVue/main.ts',
    localPath: 'src/subProjects/secondVue',
    publicPath: '/secondVue-web/',
    apiContext: '/envAdmin'
  }
}

module.exports = config
