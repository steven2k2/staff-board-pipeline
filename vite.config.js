import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
      ? '/staff-board-pipeline/'
      : '/staff-board-pipeline/staging/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});