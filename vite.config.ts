import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        kimpeanutVault: resolve(__dirname, 'projects/kimpeanut-vault/index.html'),
        kimpeanutEngine: resolve(__dirname, 'projects/kimpeanut-engine/index.html'),
      },
    },
  },
});
