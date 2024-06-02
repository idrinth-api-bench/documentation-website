import React from 'react';

const preventOpenLink = (event: React.MouseEvent<SVGElement, MouseEvent>,) => {
  event.preventDefault();
  event.stopPropagation();
  const target = (event.target ?? event.currentTarget) as SVGElement;
  target.parentElement?.setAttribute(
    'aria-expanded',
    target.parentElement?.getAttribute('aria-expanded',) === 'true'
      ? 'false'
      : 'true',
  );
  return false;
};

export default preventOpenLink;
