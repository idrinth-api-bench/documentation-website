import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import {
  Transformer,
} from '@napi-rs/image';
import {
  WEBP_QUALITY,
} from './constants.js';

if (! existsSync('./public/assets/tools',)) {
  mkdirSync('./public/assets/tools', {
    recursive: true,
  },);
}
for (const file of readdirSync('./public/assets/tools', 'utf8',)) {
  if (file.endsWith('.png',)) {
    const transformer = new Transformer(
      readFileSync('./public/assets/tools/' + file,),
    );
    writeFileSync(
      './public/assets/tools/' + file.replace(/png$/u, 'webp',),
      transformer.webpSync(WEBP_QUALITY,),
    );
    writeFileSync(
      './public/assets/tools/' + file.replace(/png$/u, 'avif',),
      transformer.avifSync({
        quality: WEBP_QUALITY,
      },),
    );
  }
}
