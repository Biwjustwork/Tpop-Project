import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function fixUrlConstructorPlugin() {
  return {
    name: 'fix-url-constructor',
    renderChunk(code) {
      return code.replace(/\bnew URL\(/g, 'new (window.URL || URL)(');
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: '../',
    emptyOutDir: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    fixUrlConstructorPlugin(),
  ],
  define: {
    // boardgame.io uses process.env
    'process.env': {},
  },
});





