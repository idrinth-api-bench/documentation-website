import React from 'react';
import NavigationLink from './navigation-link.tsx';
import CookieConsent from './cookie-consent.tsx';
import Lang from './lang.tsx';
import LanguageSwitch from './language-switch.tsx';
import './footer.scss';

const Footer = ({
  window,
}: { window: Window },) => <footer>
  <span>©2020-2024 Björn Büttner and contributors.</span>
  <ul>
    <li>
      <LanguageSwitch window={window || {}} />
    </li>
    <li>
      <CookieConsent />
    </li>
    <li>
      <NavigationLink to='/license/'>
        <Lang lnkey='nav.license' />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink to='/imprint/'>
        <Lang lnkey='nav.imprint' />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink to='/support/'>
        <Lang lnkey='nav.support' />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink to='/code-of-conduct/'>
        <Lang lnkey='nav.code-of-conduct' />
      </NavigationLink>
    </li>
  </ul>
</footer>;
export default Footer;
