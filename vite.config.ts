import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import projectConfig from './config/projectConfig'
// 当前项目名
const projectName = process.argv[5].split('=')[1]

// 当前项目的配置
const curProjectConfig = projectConfig[projectName]
console.log('curProjectConfig', curProjectConfig)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd())
  let port = env[`VITE_APP_${projectName.toLocaleUpperCase()}_PORT`] //当前项目的端口号
  if (command === 'build') {
    return {}
  } else {
    return {
      resolve: {
        alias: {
          '~/': `${path.resolve(__dirname, 'src')}/`,
          '@/': `${path.resolve(__dirname, 'src')}/`
        }
      },
      plugins: [
        vue(),
        VueJsx(),
        AutoImport({
          imports: ['vue', 'vue-router'],
          dts: 'src/auto-imports.d.ts'
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
          // allow auto load markdown components under `./src/components/`
          extensions: ['vue', 'md'],
          // allow auto import and register components used in markdown
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          dts: 'src/components.d.ts'
        })
      ],
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "~/styles/index.scss";`
          }
        }
      },
      server: {
        port,
        open: '/'
      }
    }
  }
})
