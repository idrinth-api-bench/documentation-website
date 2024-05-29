import React from 'react';
import Footer from './footer.tsx';
import ScrollToHashElement from './hash-scroll.tsx';
import Header from './header.tsx';
import Airtime from './airtime.tsx';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Layout = ({
  children,
}: LayoutProps,) => {
  return (
    <>
      <Header window={window || {}} />
      {children}
      <Footer window={window || {}} />
      <Airtime/>
      <ScrollToHashElement />
    </>
  );
};

export default Layout;
