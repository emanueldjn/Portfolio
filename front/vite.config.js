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
      scopeBehaviour: 'global',
    },
  },
  base: '/', // deixe '/' se o site estiver na raiz
});
