const config = {
  projectName: 'fkh',

  system: {
    id: 1,
    accessUserType: 2,
    name: '系统管理',
    entry: './src/subProjects/system/main.js',
    localPath: 'src/subProjects/system',
    publicPath: '/system-web/',
    apiContext: '/envAdmin'
  },
  yexin: {
    id: 2,
    name: '电子商务部管理系统',
    entry: './src/subProjects/yexin/main.js',
    localPath: 'src/subProjects/yexin',
    publicPath: '/yexin-web/',
    apiContext: '/envAdmin'
  }
}

module.exports = config
