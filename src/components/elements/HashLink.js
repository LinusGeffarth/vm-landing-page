import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HashLink = ({ children, ...props }) => {
  return (
    <Link
      {...props}
    >
      {children}
    </Link>
  );
}

export default HashLink;