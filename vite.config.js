import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/staff-board-pipeline/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});