import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CAMBIA esto por el nombre exacto de tu repositorio de GitHub
export default defineConfig({
  base: '/Practica-GITHUB-ACTIONS/', 
  plugins: [react()],
})