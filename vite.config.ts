import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 增加对vue文件检测
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/**/*.vue',
        'src/**/*.ts',
        'src/*.js',
        'src/*.vue',
        'src/*.ts'
      ]
    })
  ]
})
