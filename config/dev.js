const projectName = process.argv[2]
const exec = require('child_process').execSync

exec('pnpm vite --mode dev -- --PROJECT_NAME=' + projectName, { stdio: 'inherit' })
