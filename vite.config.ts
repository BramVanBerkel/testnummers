import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // jelly-* are web components, not Vue components.
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('jelly-')
        }
      }
    })
  ],
  base: '/'
})
