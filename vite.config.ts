import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import attributes from '@babel/plugin-syntax-import-attributes';
import plugin from '@idrinth-api-bench/rollup-plugin-react-modular-css';
import istanbul from 'babel-plugin-istanbul';
import million from 'million/compiler';

const babelPlugins = [
  attributes,
  million.babel(),
];
if (process.env.LIVE_SITE !== 'true') {
  babelPlugins.push(istanbul,);
}
const config = {
  // eslint-disable-next-line no-undefined
  base: undefined,
  build: {
    rollupOptions: {
      output: {
        importAttributesKey: 'with',
      },
      plugins: [ plugin(), ],
    },
  },
  plugins: [ react({
    babel: {
      plugins: babelPlugins,
      generatorOpts: {
        importAttributesKeyword: 'with',
      },
    },
  },), ],
};
if (process.env.LIVE_SITE !== 'true') {
  config.base = 'https://iab-cdn.com/';
}
// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default defineConfig(config,);
