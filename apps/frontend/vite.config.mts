/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const rootDir = import.meta.dirname;
  const env = loadEnv(mode, rootDir, 'VITE_');

  return {
    root: rootDir,
    cacheDir: '../../node_modules/.vite/apps/full-stack-test-task',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react()],
    define: {
      // Compile-time replacement for frontend code that reads process.env.BACKEND_URL.
      'process.env.BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL ?? 'http://localhost:3000'),
    },
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [],
    // },
    build: {
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
