import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 👈 this line ensures proper routing and asset loading
  plugins: [react()],
})
