import ExternalLink from './external-link.tsx';
import React from 'react';
import MainNavigationLink from './main-navigation-link.tsx';
import MainNavigationLinks from './main-navigation-links.tsx';

const MainNavigation = () => <nav aria-label='Main Menu'>
  <ul>
    <li>
      <ExternalLink to="https://tally.so/r/3NA48l" label='Feedback'/>
    </li>
    <MainNavigationLink
      lnkey={'nav.quick-start'}
    >/quick-start</MainNavigationLink>
    <MainNavigationLinks
      ariakey={'contributing'}
      lnkey={'nav.contributing'}
      items={[
        'contributors',
        'sponsors',
        'tools',
      ]}
    >/contributing</MainNavigationLinks>
    <MainNavigationLinks ariakey={'usage'} lnkey={'nav.usage'} items={[
      'autowiring',
      'results',
      'logging',
      'middlewares',
      'storage',
      'routes',
    ]}>/usage</MainNavigationLinks>
    <MainNavigationLink lnkey={'nav.faq'}>/faq</MainNavigationLink>
  </ul>
</nav>;

export default MainNavigation;
