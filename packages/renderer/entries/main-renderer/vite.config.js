/* eslint-env node */

import {chrome} from '../../../../.electron-vendors.cache.json';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {renderer} from 'unplugin-auto-expose';
import {join} from 'node:path';

const PACKAGE_ROOT = __dirname;
const PROJECT_ROOT = join(PACKAGE_ROOT, '../../../../');

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: PROJECT_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, '../../') + '/',
    },
  },
  assetsDir: join(PACKAGE_ROOT, '../../assets'),
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
  test: {
    environment: 'happy-dom',
  },
  plugins: [
    vue(),
    vueJsx(),
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, '../../../preload/src/index.ts'),
    }),
  ],
};

export default config;
