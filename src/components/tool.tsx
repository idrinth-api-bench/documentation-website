import React from 'react';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';

interface ToolType {
  name: string;
  link: string
}

const Tool = ({
  name,
  link,
}: ToolType,) => <div>
  <a
    href={link}
    target='_blank'
    rel='noreferrer'
  >
    <h3><Lang lnkey={`tools.${ name }.title` as languageKey}/></h3>
    <picture>
      <source srcSet={`/assets/tools/${ name }.avif`} type="image/avif"/>
      <source srcSet={`/assets/tools/${ name }.webp`} type="image/webp"/>
      <img src={`/assets/tools/${ name }.png`} alt={name}/>
    </picture>
  </a>
  <p>
    <Lang lnkey={`tools.${ name }.description` as languageKey}/>
  </p>
</div>;

export default Tool;

