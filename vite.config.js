import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
// import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from "unplugin-vue-components/resolvers";
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path"
import legacy from '@vitejs/plugin-legacy';

export default defineConfig ({
  plugins: [
    vue(),
    // 让打包后的index.html文件本地可以直接打开
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    /*AutoImport({
      resolvers: [VantResolver()],
    }),*/
    Components({
      resolvers: [VantResolver()],
    }),
    createHtmlPlugin({
      minify: true,   // 默认压缩
      inject: {
        data: {
          //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
          title: loadEnv('', 'VITE_APP_TITLE'),
          // 注入script脚本到index
          injectScript: ``
        },
      },
    }),
  ],
  base: './',
  server: {
    proxy: {
      "^/api": {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    modules: {
      // 配置 CSS Modules 的选项
      localsConvention: 'camelCase', // 类名转换为驼峰命名
    },
    preprocessorOptions: {
      scss: {
        // 全局引入变量样式
        additionalData: `
          @import "@/styles/common.scss";
          @import "@/styles/normalize.scss";
          `,
      }
    }
  },
  build: {
    target: ['es2015', 'chrome63'], // 默认是modules,百度说是更改这个会去输出兼容浏览器，尝试没啥作用，先配置吧
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        // TODO: 特殊调试外,请置为 true
        drop_console: false,
        drop_debugger: true,
      },
    },
    //   启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    reportCompressedSize: true,
    //   关闭生成map文件 可以达到缩小打包体积
    sourcemap: false,
  },
});
