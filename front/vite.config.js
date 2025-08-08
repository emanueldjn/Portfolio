import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    modules: {
      // Desativa CSS Modules para arquivos .css
      scopeBehaviour: 'global',
    },
  },
});