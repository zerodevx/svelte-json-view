import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    lib: {
      entry: './src/lib/bundled.svelte.js',
      formats: ['es'],
      name: 'SvelteJsonView',
      fileName: 'bundled'
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        runes: true,
        css: 'injected'
      }
    })
  ]
})
