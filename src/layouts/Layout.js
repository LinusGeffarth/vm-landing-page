import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => (
  <>
    <Header navPosition="right" />
    <main className="site-content">
      {children}
    </main>
    <Footer className="illustration-section-04" />
  </>
);

export default Layout;