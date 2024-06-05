import Lang from './lang.tsx';
import React from 'react';
import languageKey from '../locales/language-key.ts';
import NavigationLink from './navigation-link.tsx';

const MainNavigationLink = ({
  lnkey,
  children,
}: {
  lnkey: languageKey,
  children: string
},) => <li key={lnkey}>
  <NavigationLink to={children}>
    <Lang lnkey={lnkey}/>
  </NavigationLink>
</li>;

export default MainNavigationLink;
