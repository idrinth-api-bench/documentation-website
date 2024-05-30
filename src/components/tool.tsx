import React from 'react';
import Lang from './lang.tsx';
import './tool.scss';
import languageKey from '../locales/language-key.ts';

interface ToolType {
  name: string;
  link: string
}

const Tool = ({
  name,
  link,
}: ToolType,) => <div className={'tool'}>
  <a
    href={link}
    target='_blank'
    rel='noreferrer'
  >
    <h3>{name}</h3>
  </a>
  <p>
    <Lang lnkey={`tools.${ name }` as languageKey}/>
  </p>
</div>;

export default Tool;

