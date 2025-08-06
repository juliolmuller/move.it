import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

const serverFilePatterns = ['server.cjs'];
const baseFilesPatterns = ['**/*.{js,ts,tsx}'];
const compat = new FlatCompat();

export default defineConfig([
  ...anyConfig.react,
  ...[...anyConfig.node, ...anyConfig.commonjs].map((config) => ({
    ...config,
    files: serverFilePatterns,
  })),
  ...compat.config({
    ...nextPlugin.configs['core-web-vitals'],
  }),
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]);
