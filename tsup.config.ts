import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/(components|hooks)/**/*@(ts|tsx)'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
})
