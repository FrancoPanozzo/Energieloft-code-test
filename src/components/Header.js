import React from 'react';
import { FaGlobeAmericas, FaEnvelope, FaBell } from 'react-icons/fa';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />

      <div className="header__notifications">
        <div className="header__notifications__item">
          <FaGlobeAmericas />
          <span>EN</span>
        </div>
        <div className="header__notifications__item">
          <FaEnvelope />
          <span className="alert-badge"></span>
        </div>
        <div className="header__notifications__item">
          <FaBell />
          <span className="alert-badge"></span>
        </div>
      </div>
    </header>
  );
}
