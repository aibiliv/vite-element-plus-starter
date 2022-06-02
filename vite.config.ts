import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    VueJsx(),
    ElementPlus(),
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
    port: 5000,
    open: '/',
    proxy: {
      '/api/admin': {
        target: 'http://192.168.2.3/ims-api/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(new RegExp('/api/admin', 'g'), '')
      }
    }
  }
})
