import React from 'react';
import pkg from '../../package.json' with {
  type: 'json'
};
import IAB from '@idrinth-api-bench/assets/iab.svg';
import DarkModeButton from './dark-mode-button.tsx';
import './header.scss';
import MainNavigation from './main-navigation.tsx';
import SocialNavigation from './social-navigation.tsx';
import NavigationLink from './navigation-link.tsx';

const Header = ({
  window,
}: {window: Window},) => <header>
  <div>
    <NavigationLink id="logo" to="/">
      <img src={IAB} alt="@idrinth/api-bench"/>
    </NavigationLink>
    <strong>@idrinth/api-bench</strong>
    <em>v{pkg.version}</em>
  </div>
  <SocialNavigation/>
  <MainNavigation/>
  <DarkModeButton window={window}/>
</header>;
export default Header;
