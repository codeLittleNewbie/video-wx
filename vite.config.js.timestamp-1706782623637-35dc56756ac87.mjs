// vite.config.js
import vue from "file:///D:/code/others/video-wx/node_modules/.store/@vitejs+plugin-vue@4.6.2/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/code/others/video-wx/node_modules/.store/unplugin-vue-components@0.24.1/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VantResolver } from "file:///D:/code/others/video-wx/node_modules/.store/unplugin-vue-components@0.24.1/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { defineConfig, loadEnv } from "file:///D:/code/others/video-wx/node_modules/.store/vite@4.5.2/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///D:/code/others/video-wx/node_modules/.store/vite-plugin-html@3.2.2/node_modules/vite-plugin-html/dist/index.mjs";
import { resolve } from "path";
import legacy from "file:///D:/code/others/video-wx/node_modules/.store/@vitejs+plugin-legacy@4.1.1/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\code\\others\\video-wx";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    // 让打包后的index.html文件本地可以直接打开
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    /*AutoImport({
      resolvers: [VantResolver()],
    }),*/
    Components({
      resolvers: [VantResolver()]
    }),
    createHtmlPlugin({
      minify: true,
      // 默认压缩
      inject: {
        data: {
          //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
          title: loadEnv("", "VITE_APP_TITLE"),
          // 注入script脚本到index
          injectScript: ``
        }
      }
    })
  ],
  base: "./",
  server: {
    proxy: {
      "^/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    modules: {
      // 配置 CSS Modules 的选项
      localsConvention: "camelCase"
      // 类名转换为驼峰命名
    },
    preprocessorOptions: {
      scss: {
        // 全局引入变量样式
        additionalData: `
          @import "@/styles/common.scss";
          `
      }
    }
  },
  build: {
    target: ["es2015", "chrome63"],
    // 默认是modules,百度说是更改这个会去输出兼容浏览器，尝试没啥作用，先配置吧
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境时移除console
        // TODO: 特殊调试外,请置为 true
        drop_console: false,
        drop_debugger: true
      }
    },
    //   启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    reportCompressedSize: true,
    //   关闭生成map文件 可以达到缩小打包体积
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG90aGVyc1xcXFx2aWRlby13eFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxvdGhlcnNcXFxcdmlkZW8td3hcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvb3RoZXJzL3ZpZGVvLXd4L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuLy8gaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyAoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgLy8gXHU4QkE5XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0aW5kZXguaHRtbFx1NjU4N1x1NEVGNlx1NjcyQ1x1NTczMFx1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NjI1M1x1NUYwMFxuICAgIGxlZ2FjeSh7XG4gICAgICB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddXG4gICAgfSksXG4gICAgLypBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSwqL1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgbWluaWZ5OiB0cnVlLCAgIC8vIFx1OUVEOFx1OEJBNFx1NTM4Qlx1N0YyOVxuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAvL1x1NUMwNlx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRiBWSVRFX0FQUF9USVRMRSBcdThENEJcdTUwM0NcdTdFRDkgdGl0bGUgXHU2NUI5XHU0RkJGIGh0bWxcdTk4NzVcdTk3NjJcdTRGN0ZcdTc1MjggdGl0bGUgXHU4M0I3XHU1M0Q2XHU3Q0ZCXHU3RURGXHU2ODA3XHU5ODk4XG4gICAgICAgICAgdGl0bGU6IGxvYWRFbnYoJycsICdWSVRFX0FQUF9USVRMRScpLFxuICAgICAgICAgIC8vIFx1NkNFOFx1NTE2NXNjcmlwdFx1ODExQVx1NjcyQ1x1NTIzMGluZGV4XG4gICAgICAgICAgaW5qZWN0U2NyaXB0OiBgYFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgYmFzZTogJy4vJyxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgIFwiXi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIilcbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIC8vIFx1OTE0RFx1N0Y2RSBDU1MgTW9kdWxlcyBcdTc2ODRcdTkwMDlcdTk4NzlcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnLCAvLyBcdTdDN0JcdTU0MERcdThGNkNcdTYzNjJcdTRFM0FcdTlBN0NcdTVDRjBcdTU0N0RcdTU0MERcbiAgICB9LFxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgLy8gXHU1MTY4XHU1QzQwXHU1RjE1XHU1MTY1XHU1M0Q4XHU5MUNGXHU2ODM3XHU1RjBGXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgQGltcG9ydCBcIkAvc3R5bGVzL2NvbW1vbi5zY3NzXCI7XG4gICAgICAgICAgYCxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBbJ2VzMjAxNScsICdjaHJvbWU2MyddLCAvLyBcdTlFRDhcdThCQTRcdTY2MkZtb2R1bGVzLFx1NzY3RVx1NUVBNlx1OEJGNFx1NjYyRlx1NjZGNFx1NjUzOVx1OEZEOVx1NEUyQVx1NEYxQVx1NTNCQlx1OEY5M1x1NTFGQVx1NTE3Q1x1NUJCOVx1NkQ0Rlx1ODlDOFx1NTY2OFx1RkYwQ1x1NUMxRFx1OEJENVx1NkNBMVx1NTU2NVx1NEY1Q1x1NzUyOFx1RkYwQ1x1NTE0OFx1OTE0RFx1N0Y2RVx1NTQyN1xuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgLy9cdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTY1RjZcdTc5RkJcdTk2NjRjb25zb2xlXG4gICAgICAgIC8vIFRPRE86IFx1NzI3OVx1NkI4QVx1OEMwM1x1OEJENVx1NTkxNixcdThCRjdcdTdGNkVcdTRFM0EgdHJ1ZVxuICAgICAgICBkcm9wX2NvbnNvbGU6IGZhbHNlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vICAgXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOCBnemlwIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVx1MzAwMlx1NTM4Qlx1N0YyOVx1NTkyN1x1NTc4Qlx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NUY4OFx1NjE2Mlx1RkYwQ1x1NTZFMFx1NkI2NFx1Nzk4MVx1NzUyOFx1OEJFNVx1NTI5Rlx1ODBGRFx1NTNFRlx1ODBGRFx1NEYxQVx1NjNEMFx1OUFEOFx1NTkyN1x1NTc4Qlx1OTg3OVx1NzZFRVx1NzY4NFx1Njc4NFx1NUVGQVx1NjAyN1x1ODBGRFx1MzAwMlxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIC8vICAgXHU1MTczXHU5NUVEXHU3NTFGXHU2MjEwbWFwXHU2NTg3XHU0RUY2IFx1NTNFRlx1NEVFNVx1OEZCRVx1NTIzMFx1N0YyOVx1NUMwRlx1NjI1M1x1NTMwNVx1NEY1M1x1NzlFRlxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1AsT0FBTyxTQUFTO0FBQy9RLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFQbkIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFjO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBO0FBQUEsSUFFSixPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsWUFBWSxXQUFXO0FBQUEsSUFDbkMsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSUQsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzVCLENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUE7QUFBQSxVQUVKLE9BQU8sUUFBUSxJQUFJLGdCQUFnQjtBQUFBO0FBQUEsVUFFbkMsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBO0FBQUEsTUFFUCxrQkFBa0I7QUFBQTtBQUFBLElBQ3BCO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRLENBQUMsVUFBVSxVQUFVO0FBQUE7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBLFFBR1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxzQkFBc0I7QUFBQTtBQUFBLElBRXRCLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
