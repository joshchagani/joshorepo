import { mergeConfig } from 'vite';
import baseConfig from '../../vitest.config';

export default mergeConfig(baseConfig, {
  plugins: [],
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    globals: true,
  },
});
