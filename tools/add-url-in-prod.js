import {
  readFileSync,
  writeFileSync,
} from 'fs';

if (process.env.LIVE_SITE !== 'true') {
  return;
}
writeFileSync(
  './dist/index.html',
  readFileSync('./dist/index.html', 'utf8',)
    .replace(
      /<meta charset=UTF-8>/ug,
      '<meta charset=UTF-8><link rel=base href=https://iab-cdn.com/>',
    ),
  'utf8',
);
