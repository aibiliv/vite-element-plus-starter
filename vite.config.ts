import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import projectConfig from './config/projectConfig'
function resolve(dir: any) {
  return path.join(__dirname, dir)
}
// 当前项目名
const projectName = process.argv[5].split('=')[1]

// 当前项目的配置
const curProjectConfig = projectConfig[projectName]
console.log('curProjectConfig', curProjectConfig)

const transformIndexHtml = (code: string) => {
  return code.replace(/__INDEX__/, `${curProjectConfig.entry}`)
}

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
          '@/': `${path.resolve(__dirname, 'src')}/`,
          '*': resolve(curProjectConfig.localPath),
          assets: resolve(curProjectConfig.localPath + '/assets')
        }
      },
      plugins: [
        {
          name: 'demo-transform',
          enforce: 'pre',
          transform(code, id) {
            if (id.endsWith('.html')) {
              return { code: transformIndexHtml(code), map: null }
            }
          },
          transformIndexHtml
        },
        vue(),
        VueJsx(),
        react(),
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
      optimizeDeps: {
        exclude: ['__INDEX__'] // 排除 __INDEX__
      },
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
