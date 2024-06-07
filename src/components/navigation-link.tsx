import React, {
  ReactNode,
} from 'react';
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom';

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
>{children}</NavLink>;

export default NavigationLink;
