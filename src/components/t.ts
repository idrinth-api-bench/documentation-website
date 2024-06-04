import languageKey from '../locales/language-key.ts';
import Window from './window.ts';
import {
  FIRST_ELEMENT,
  SECOND_ELEMENT,
} from '../constants.ts';
import files from '../locales/files.ts';

// eslint-disable-next-line complexity
export default async(lnkey: languageKey, global?: object,): Promise<string> => {
  if (lnkey.match(/(^|\.)(__proto__|valueOf|toString)(\.|$)/u,)) {
    return '';
  }
  const that: Window = (global ?? window) as Window;
  const language = (
    (that?.localStorage?.getItem('language',) || 'en')
    ?? that?.Navigator?.language
    ?? 'en'
  ).split('-',)[FIRST_ELEMENT];
  const main = lnkey.split('.',)[FIRST_ELEMENT];
  if (! files.includes(`en-${ main }`,)) {
    return lnkey;
  }
  if (files.includes(`${ language }-${ main }`,)) {
    return (await import(`../locales/${ language }-${ main }.ts`))?.default[
      lnkey
        .split('.',)
        .slice(SECOND_ELEMENT,)
        .join('.',)
    ] ?? lnkey;
  }
  return (await import(`../locales/en-${ main }.ts`))?.default[
    lnkey
      .split('.',)
      .slice(SECOND_ELEMENT,)
      .join('.',)
  ] ?? lnkey;
};
