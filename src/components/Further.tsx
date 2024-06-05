import React from 'react';
import Lang from './lang.tsx';
import NavigationLink from './navigation-link.tsx';

const Further = ({
  children,
}: {children: string,},) => <NavigationLink to={children}>
  <Lang lnkey={'general.more'}/>
</NavigationLink>;

export default Further;
