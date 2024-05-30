import React, {
  lazy,
  Suspense,
  useState,
} from 'react';
import YoutubeLink from './youtube-link.tsx';
import t from './t.ts';
import {
  get,
} from './local-consent-storage.ts';
import youtubeContentChange from './youtube-content-change.ts';
import youtubeContentHeight from './youtube-content-height.ts';

interface YoutubeContentType {
  children: string;
}
const allow = [
  'accelerometer',
  'clipboard-write',
  'encrypted-media',
  'gyroscope',
  'picture-in-picture',
  'web-share',
];

const YoutubeContent = ({
  children,
}: YoutubeContentType,) => {
  const [
    allowed,
    setAllowed,
  ] = useState<boolean>(get('youtube',),);
  if (! allowed) {
    youtubeContentChange(setAllowed,);
    return <YoutubeLink>{children}</YoutubeLink>;
  }
  const EL = lazy(async() => {
    const title = await t('youtube.player',);
    const id = 'youtube_' + children;
    const setHeightOnLoad = () => youtubeContentHeight(id,);
    return {
      default: () => <>
        <iframe
          id={id}
          src={`https://www.youtube-nocookie.com/embed/${ children }`}
          title={title}
          allow={allow.join(';',)}
          onLoad={setHeightOnLoad}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <YoutubeLink>{children}</YoutubeLink>
      </>,
    };
  },);
  return <Suspense fallback={<YoutubeLink>{children}</YoutubeLink>}>
    <EL />
  </Suspense>;
};

export default YoutubeContent;
