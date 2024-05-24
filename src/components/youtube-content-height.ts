import {
  STRING_PX_OFFSET,
  STRING_START,
  YOUTUBE_DEFAULT_HEIGHT,
  YOUTUBE_DEFAULT_WIDTH,
} from '../constants.ts';

export default (id: string,) => {
  const element = document.getElementById(id,);
  if (! element) {
    return;
  }
  const computed = getComputedStyle(element,);
  const widthString = computed.getPropertyValue('width',);
  const width = Number.parseFloat(
    widthString.substring(
      STRING_START,
      widthString.length - STRING_PX_OFFSET,
    ),
  );
  const factor = YOUTUBE_DEFAULT_HEIGHT / YOUTUBE_DEFAULT_WIDTH;
  element.setAttribute(
    'height',
    `${ Math.ceil(width * factor,) }`,
  );
};
