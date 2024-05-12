import React from 'react';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';

const Middleware = ({
  children
}: {
  children: string,
},) => {
  return <div className="middleware">
    <h3>
      <Lang lnkey={`middlewares.provided.${ children }.title` as languageKey}/>
    </h3>
    <p>
      <strong>
        <Lang lnkey={'middlewares.provided.key'}/>
      </strong>
      <pre>^{children}</pre>
    </p>
    <p>
      <Lang lnkey={`middlewares.provided.${ children }.description` as languageKey}/>
    </p>
    <h4>
      <Lang lnkey={`middlewares.provided.pre`}/>
    </h4>
    <p>
      <Lang lnkey={`middlewares.provided.${ children }.pre` as languageKey}/>
    </p>
    <h4>
      <Lang lnkey={`middlewares.provided.post`}/>
    </h4>
    <p>
      <Lang lnkey={`middlewares.provided.${ children }.post` as languageKey}/>
    </p>
  </div>;
}

export default Middleware;
