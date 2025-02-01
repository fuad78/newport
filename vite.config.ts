import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss'; // Import the plugin
import autoprefixer from 'autoprefixer'; // You'll likely need this too

export default defineConfig({
  plugins: [react(), tailwindcss(), autoprefixer()], // Add the plugin here!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    hmr: true,
  },
  esbuild: {
    keepNames: true,
  },
});