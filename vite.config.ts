import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      // Deps that shouldn't be bundled into the component library can be externalized (i.e. peer dependencies)
      // external: /^lit/
    },
  },
});
