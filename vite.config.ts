import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error - tailwind config is a js file
import tailwindConfig from './tailwind.config.js'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(tailwindConfig),
        autoprefixer,
      ],
    },
  },
})

