import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Jelly UI ships web components, so the compiler must emit `jelly-*` tags
      // as plain elements instead of trying to resolve them as Vue components.
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('jelly-')
        }
      }
    })
  ],
  base: '/'
})
