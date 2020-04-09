import React from 'react';
import Header from '../components/layout/Header';

const LayoutNoFooter = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" />
    <main className="site-content">
      {children}
    </main>
  </React.Fragment>
);

export default LayoutNoFooter;