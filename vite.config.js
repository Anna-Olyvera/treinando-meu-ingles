import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://anna-olyvera.github.io/treinando-meu-ingles/',
  plugins: [react()],
})