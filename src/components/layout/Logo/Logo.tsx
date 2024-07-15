import logo from '@assets/images/logo.svg';
import classNames from 'classnames';
import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <Link to='/' className={classNames(styles.logo, className)}>
      <img className={styles.logo__image} src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;
