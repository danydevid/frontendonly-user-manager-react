import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"

// Detect current target from environment variable
const buildTarget = process.env.BUILD_TARGET || 'web'

// GitHub Pages needs subpath, but Tauri and local web dev MUST use '/'
const BASE_URL = buildTarget === 'web' ? '/frontendonly-user-manager-react/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: BASE_URL
})
