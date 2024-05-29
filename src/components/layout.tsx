import React from 'react';
import Breadcrumbs from './breadcrumbs.tsx';
import DefaultMeta from './default-meta.tsx';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
  page?: string;
  path?: string;
  canonical?: string;
}

const Layout = ({
  page = '',
  path = '',
  canonical = '',
  children,
}: LayoutProps,) => {
  const meta = page ?
    <DefaultMeta
      page={page}
      path={canonical || path}
    />
    :
    '';
  return (
    <>
      {meta}
      <Breadcrumbs path={path} />
      <article>{children}</article>
    </>
  );
};

export default Layout;
