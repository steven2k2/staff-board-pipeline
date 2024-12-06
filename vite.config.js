import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/staff-board-pipeline/',
  build: {
    outDir: 'dist',
  },
});
