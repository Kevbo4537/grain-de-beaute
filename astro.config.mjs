// @ts-nocheck
import { defineConfig } from 'astro/config';

const isProduction = process.env.DEPLOY_TARGET === 'production';

export default defineConfig({
  site: isProduction ? 'https://graindebeaute37.fr' : 'https://kevbo4537.github.io',
  base: isProduction ? '/' : '/grain-de-beaute/',
  output: 'static'
});
