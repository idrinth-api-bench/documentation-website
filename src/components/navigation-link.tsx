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
  to={window.location.protocol + '//' + window.location.host + to}
>{children}</NavLink>;

export default NavigationLink;
