import React from 'react';
import Lang from './lang.tsx';
import {NavLink} from 'react-router-dom';

const Further = ({children}: {children: string,}) => <NavLink to={children}>
  <Lang lnkey={'general.more'}/>
</NavLink>;

export default Further;
