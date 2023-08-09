import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [
      "@/assets/swagger-ui/swagger-ui-es-bundle.js",
      "@/assets/swagger-ui/swagger-ui-standalone-preset.js"
    ]
  },
  build: {
    commonjsOptions: {
      include: [
        /assets\/swagger-ui\/swagger-ui-es-bundle.js$/,
        /assets\/swagger-ui\/swagger-ui-standalone-preset.js$/,
      ],
    },
  }
})
