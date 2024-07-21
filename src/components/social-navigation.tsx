import SocialLink from './social-link.tsx';
import React from 'react';

const SocialNavigation = () => <nav aria-label='Social Links Menu'>
  <ul className={'socials'}>
    <SocialLink
      to={[
        'https://www.npmjs.com/package/@idrinth-api-bench/framework',
        'https://www.npmjs.com/package/@idrinth-api-bench/cli',
      ]}
      label={'npm'}
    />
    <SocialLink
      to={[
        'https://hub.docker.com/r/idrinth/api-bench-gitlab-runner',
        'https://hub.docker.com/r/idrinth/api-bench-gitea-action',
        'https://hub.docker.com/r/idrinth/api-bench',
        'https://hub.docker.com/r/idrinth/api-bench-history-microservice',
        'https://hub.docker.com/r/idrinth/api-bench-history-website',
      ]}
      label={'docker'}
    />
    <SocialLink
      to={
        'https://app.opensauced.pizza/workspaces' +
          '/b1f1f893-1572-4353-af0c-548ba47007e7'
      }
      label={'open-sauced'}
    />
    <SocialLink
      to={[
        'https://www.linkedin.com/groups/9588634/',
        'https://www.linkedin.com/company/iab-idrinth-api-bench/',
      ]}
      label={'linkedin'}
    />
    <SocialLink
      to={'https://www.youtube.com/@idrinth-api-bench'}
      label={'youtube'}
    />
    <SocialLink
      to={
        'https://idrinth-api-bench.slack.com/' +
            'join/shared_invite/' +
          'zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA' +
          '#/shared-invite/email'
      }
      label={'slack'}
    />
    <SocialLink
      to="https://github.com/idrinth-api-bench/"
      label={'github'}
    />
    <SocialLink
      to={'https://medium.com/idrinth-api-bench'}
      label={'medium'}
    />
    <SocialLink
      to={'https://dly.to/ra0ANxPXhwl'}
      label={'dailydev'}
    />
    <SocialLink
      to={'https://twitter.com/IdrinthApiBench'}
      label={'x'}
    />
  </ul>
</nav>;

export default SocialNavigation;
