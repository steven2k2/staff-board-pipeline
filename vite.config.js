import { defineConfig } from 'vite';

export default defineConfig({
  base: '/staff-board-pipeline/staging/', // Ensure this matches the staging URL
  build: {
    outDir: 'dist',
  },
});
