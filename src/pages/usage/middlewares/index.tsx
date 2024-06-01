import React from 'react';
import Layout from '../../../components/layout.tsx';
import Lang from '../../../components/lang.tsx';
import CodeUnit from '../../../components/code-unit.tsx';
import Middleware from '../../../components/middleware.tsx';

const Middlewares = () => <Layout
  page='middlewares'
  path='/usage/middlewares'
>
  <div className='title-card'>
    <h1><Lang lnkey={'middlewares.title'}/></h1>
    <p>
      <Lang lnkey={'middlewares.description'}/>
    </p>
    <ul>
      <li>{'^abc -> /path/to/this/library/src/middlewares/abc.js'}</li>
      <li>{'$@some/lib/abc -> @some/lib/src/middlewares/abc.js'}</li>
      <li>{'#abc -> /path/to/root/src/middlewares/abc.js'}</li>
    </ul>
  </div>
  <div className={'card'}>
    <h3><Lang lnkey={'middlewares.provided.title'}/></h3>
    <div>
      <Middleware>encoding</Middleware>
      <Middleware>access</Middleware>
      <Middleware>csrf</Middleware>
      <Middleware>2xx</Middleware>
      <Middleware>403</Middleware>
      <Middleware>404</Middleware>
      <Middleware>user-agent</Middleware>
      <Middleware>cookies</Middleware>
      <Middleware>json</Middleware>
      <Middleware>xml</Middleware>
      <Middleware>silent-server-validator</Middleware>
      <Middleware>success-check</Middleware>
      <Middleware>failure-check</Middleware>
    </div>
  </div>
  <CodeUnit
    text={'middlewares.custom.title'}
    language={'typescript'}
    prefix={'middlewares.custom.description'}
    level={'h2'}>{`interface Middleware {
    process(response: Result): void;
    prepare(request: Request): Request;
  }`}</CodeUnit>
</Layout>;
export default Middlewares;
