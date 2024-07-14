import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'lib/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
