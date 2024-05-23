import React from 'react';
import Layout from '../../../components/layout.tsx';
import Tool from '../../../components/tool.tsx';
import ContentUnit from '../../../components/content-unit.tsx';

const Index = () => <Layout
  page='tools'
  path='/contributing/tools'
>
  <ContentUnit text={'tools.title'} level={'h1'}>
    tools.description
  </ContentUnit>
  <Tool link={'https://www.typescriptlang.org/'} name={'typescript'}/>
  <Tool link={'https://react.dev/'} name={'react'}/>
  <Tool link={'https://svelte.dev/'} name={'svelte'}/>
  <Tool link={'https://fastify.dev/'} name={'fastify'}/>
  <Tool link={'https://www.docker.com/'} name={'docker'}/>
  <Tool link={'https://eslint.org/'} name={'eslint'}/>
  <Tool link={'https://www.chaijs.com/'} name={'chai'}/>
  <Tool link={'https://mochajs.org/'} name={'mocha'}/>
  <Tool link={'https://www.cypress.io/'} name={'cypress'}/>
  <Tool link={'https://stylelint.io/'} name={'stylelint'}/>
  <Tool link={'https://markmap.js.org/'} name={'markmap-render'}/>
  <Tool link={'https://vuejs.org/'} name={'vue'}/>
  <Tool link={'https://www.electronjs.org/'} name={'electron'}/>
  <Tool link={'https://expressjs.com/'} name={'express'}/>
</Layout>;
export default Index;
