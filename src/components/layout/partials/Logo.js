import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  size = 90,
  appearance = 'dark',
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo-' + appearance + '.svg')}
            alt="OG|OT Logo"
            width={size}
            height={size * 0.66}
          />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;