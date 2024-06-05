import React from 'react';
import Lang from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import MailLink from '../../components/mail-link.tsx';
import './support.scss';

const Index = () => <Layout
  page='support'
  path='/support'
>
  <div className='title-card'>
    <h1>
      <Lang lnkey='support.title'/>
    </h1>
    <p>
      <Lang lnkey='support.description'/>
    </p>
  </div>
  <div className='card'>
    <h2>
      <Lang lnkey='support.commercial.title'/>
    </h2>
    <p>
      <Lang lnkey='support.commercial.description'/>{' '}
      <MailLink to='service@bjoern-buettner.me'/>
    </p>
  </div>
  <div className='card'>
    <h3>Monthly Packages</h3>
    <div className={'products'}>
      <div className={'product'}>
        <h4>Free</h4>
        <p>Free for everyone and always. Basic support via official channels,
          especially the GitHub repository.</p>
        <ul>
          <li>Complete Functionality</li>
          <li>Basic Support via GitHub</li>
        </ul>
      </div>
      <div className={'price'}>
        <span>0$</span>
      </div>
      <div className={'product'}>
        <h4>Priority</h4>
        <p>This package is optional and will lead to your bug reports via
          official channels being prioritized.</p>
        <ul>
          <li>Complete Functionality</li>
          <li>Basic Support via GitHub</li>
          <li>Prioritized Bug Reports</li>
        </ul>
      </div>
      <div className={'price'}>
        <span>150$</span>
      </div>
      <div className={'product'}>
        <h4>Custom Support</h4>
        <p>Joining a company based chat to answer questions and assistance.
          Reaction may not be instant, but within the usual 48h.</p>
        <ul>
          <li>Complete Functionality</li>
          <li>Basic Support via GitHub</li>
          <li>Prioritized Bug Reports</li>
          <li>Personalized Support via chat app</li>
        </ul>
      </div>
      <div className={'price'}>
        <span>500$</span>
      </div>
    </div>
  </div>
  <div className={'card'}>
    <h3>Monthly Add-Ons</h3>
    <div className={'products'}>
      <div className={'product'}>
        <h4>Sponsor</h4>
        <p>This Add-on to any payed package will add you to the sponsor list on
          the website while allowing us more time on development.</p>
        <ul>
          <li>Listing as a Sponsor on the website(logo, description, link)</li>
        </ul>
      </div>
      <div className={'price'}>
        <span>50$</span>
      </div>
      <div className={'product'}>
        <h4>Fast Support</h4>
        <p>This package adds guaranteed support response within 18 hours to any
          query you have and is an add-on to any other package, excluding the
          free one.</p>
        <ul>
          <li>Support Response within 18h</li>
          <li>Support on 365 days a year</li>
        </ul>
      </div>
      <div className={'price'}>
        <span>250$</span>
      </div>
    </div>
  </div>
  <div className='card'>
    <h2>
      <Lang lnkey='support.training.title'/>
    </h2>
    <p>
      <Lang lnkey='support.training.description'/>{' '}
      <MailLink to='service@bjoern-buettner.me'/>
    </p>
  </div>
</Layout>;
export default Index;
