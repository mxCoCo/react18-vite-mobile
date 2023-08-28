import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig((mode) => {
  console.log('运行环境:', mode.mode)
  const env = mode.mode
  let baseUrl = 'https://fgj-bid.ceczy.com:9102'
  if (env == 'dev') {
    baseUrl = 'https://fgj-bid-test.ceczy.com:7075'
  } else if (env == 'test') {
    baseUrl = 'https://fgj-bid.ceczy.com:9102'
  }
  return {
    base: '/mobile', // 项目访问前缀
    plugins: [
      react(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd-mobile',
            libDirectory: 'es/components',
            style(name) {
              return `antd-mobile/es/components/${name}/${name}.css`
            },
          },
        ],
      }),
    ],
    server: {
      host: '0.0.0.0', //自定义主机名
      port: 7000, //自定义端口
      // 是否开启 https
      https: false,
      proxy: {
        '/fgj-promanage': {
          target: baseUrl,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/fgj-promanage/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/style/global.less";',
        },
      },
    },
  }
})
