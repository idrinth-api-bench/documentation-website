import {
  readFileSync,
  writeFileSync,
} from 'fs';

if (process.env.LIVE_SITE === 'true') {
  writeFileSync(
    './dist/index.html',
    readFileSync('./dist/index.html', 'utf8',)
      .replace(
        /<meta charset="UTF-8" \/>/ug,
        '<meta charset=UTF-8>' +
        '<base href=https://iab-cdn.com/ data-base=https://idrinth-api-ben.ch/>',
      )
      .replace(/ crossorigin/ug, ' ',),
    'utf8',
  );
}
