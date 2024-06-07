import React, {
  ReactNode,
} from 'react';
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom';

const onLoad = () => {
  const links = document.getElementsByTagName('a',);
  for (let i = 0; i < links.length; i ++) {
    const link = links[i];
    if (link && link.host !== location.hostname) {
      link.host = location.hostname;
    }
  }
};

const NavigationLink = ({
  to,
  children,
  ...props
}: {
  to: string,
  children: string|ReactNode,
}&NavLinkProps,) => <NavLink
  {...props}
  to={to}
  onLoad={onLoad}
>{children}</NavLink>;

export default NavigationLink;
