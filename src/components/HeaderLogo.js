import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
  return (
    <Link to="/" className="header__logo">
      ener<span className="header__logo__G">g</span>ie{' '}
      <span className="header__logo__loft">loft</span>
    </Link>
  );
}
