import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    rollupOptions: {
      // A home e as páginas de estudo de caso
      input: {
        main: 'index.html',
        assistenteCasa: 'assistente-de-casa.html',
        pdvCasaO: 'pdv-casa-o.html',
      },
    },
  },
})
