import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './lib'),
    }
  },
  build: {
    copyPublicDir: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "elevz-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [
    react(),
    dts({ tsconfigPath: './tsconfig.build.json' }),
  ]
});