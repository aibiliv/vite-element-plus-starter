const projectName = process.argv[2]
const projectConfig = require('./projectConfig')
if (projectName) {
  const exec = require('child_process').execSync
  exec('npm run build:prod -- --PROJECT_NAME=' + projectName, { stdio: 'inherit' })
} else {
  Object.keys(projectConfig).forEach(res => {
    const exec = require('child_process').execSync
    exec('npm run build:prod -- --PROJECT_NAME=' + res, { stdio: 'inherit' })
  })
}
