import react from '@vitejs/plugin-react';
import path from 'path'; // Adicione esta linha
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define '@' como o diretório 'src'
    },
  },
});
