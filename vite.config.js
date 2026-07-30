import adapter from '@sveltejs/adapter-auto'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    sveltekit({
      compilerOptions: {
        runes: true
      },
      adapter: adapter()
    })
  ]
})
