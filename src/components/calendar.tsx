import React, {
  useState,
} from 'react';
import {
  get,
} from './local-consent-storage.ts';
import languageKey from '../locales/language-key.ts';
import ExternalLink from './external-link.tsx';
import calendarContentChange from './calendar-content-change.ts';
import Lang from './lang.tsx';

interface CalendarType {
  children: string;
  title: languageKey;
  link?: string;
}
const allow = [
  'clipboard-write',
  'picture-in-picture',
  'web-share',
];

const Calendar = ({
  children,
  title,
  link,
}: CalendarType,) => {
  const [
    allowed,
    setAllowed,
  ] = useState<boolean>(get('calendar',),);
  if (! allowed) {
    calendarContentChange(setAllowed,);
    return <div className={'card'}>
      <h2>
        <Lang lnkey={title}/>
      </h2>
      <ExternalLink to={`https://calendar.online/${ link ?? children }`}/>
    </div>;
  }
  return <div className={'card'}>
    <h2>
      <Lang lnkey={title}/>
    </h2>
    <div>
      <iframe
        id={'calendar_' + children}
        src={`https://calendar.online/${ children }?iframe=true`}
        title={title}
        allow={allow.join(';',)}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <ExternalLink to={`https://calendar.online/${ link ?? children }`}/>
    </div>
  </div>;
};

export default Calendar;
