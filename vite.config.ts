import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import attributes from '@babel/plugin-syntax-import-attributes';
import plugin from '@idrinth-api-bench/rollup-plugin-react-modular-css';
import {
  napiImage,
} from 'rollup-plugin-napi-image';
import istanbul from 'babel-plugin-istanbul';
import million from 'million/compiler';

const babelPlugins = [
  attributes,
  million.babel(),
];
if (process.env.LIVE_SITE !== 'true') {
  babelPlugins.push(istanbul,);
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        importAttributesKey: 'with',
      },
      plugins: [
        plugin(),
        napiImage({
          mode: 'lossy',
          quality: 90,
          toModernExt: () => 'webp',
        },),
      ],
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
},);
