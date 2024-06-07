import React, {
  ReactNode,
  SyntheticEvent,
} from 'react';
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom';

const onLoad = (event: SyntheticEvent,) => {
  event.currentTarget.setAttribute(
    'href',
    document.location.protocol
    + '//'
    + document.location.host
    + event.currentTarget.getAttribute('href',),
  );
};

const NavigationLink = ({
  to,
  children,
  ...props
}: {
  to: string,
  children: string|ReactNode,
}&NavLinkProps,) => <>
  <NavLink
    {...props}
    to={to}
    onLoad={onLoad}
  >{children}</NavLink>
</>;

export default NavigationLink;
