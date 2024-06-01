import {
  NavLink,
} from 'react-router-dom';
import Lang from './lang.tsx';
import React from 'react';
import languageKey from '../locales/language-key.ts';

const MainNavigationLink = ({
  lnkey,
  children
}: {
  lnkey: languageKey,
  children: string
},) => <li key={lnkey}>
  <NavLink to={children}>
    <Lang lnkey={lnkey}/>
  </NavLink>
</li>;

export default MainNavigationLink;
