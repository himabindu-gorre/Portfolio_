import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Portfolio",
    resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components'),
    },
  },

})



