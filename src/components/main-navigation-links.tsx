import languageKey from '../locales/language-key.ts';
import Lang from './lang.tsx';
import React from 'react';
import MainNavigationLink from './main-navigation-link.tsx';
import {
  MdArrowDropDown,
} from 'react-icons/md';
import NavigationLink from './navigation-link.tsx';

const mainNavigationLinks = ({
  lnkey,
  items,
  children,
  ariakey,
}: {
  lnkey: languageKey,
  items: string[],
  children: string,
  ariakey: string,
},) => <li key={lnkey}>
  <NavigationLink
    to={children}
    aria-expanded="false"
    id={`dropdown-${ ariakey }`}
    aria-controls={`${ ariakey }-menu`}
  >
    <Lang lnkey={lnkey}/>
    <MdArrowDropDown />
  </NavigationLink>
  <ul aria-labelledby={`dropdown-${ ariakey }`} id={`${ ariakey }-menu`}>{
    items.map((child,) => <MainNavigationLink
      key={ariakey + child}
      lnkey={`nav.${ child }` as languageKey}
    >{`${ children }/${ child }`}</MainNavigationLink>,)
  }</ul>
</li>;

export default mainNavigationLinks;
