import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  FaHome,
  FaBuilding,
  FaBullhorn,
  FaCog,
  FaRegNewspaper,
  FaChartArea,
} from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav className="nav">
      <Link exact to="/" className="nav__link">
        <span className="nav__link__icon">
          <FaHome />
        </span>
        <span className="nav__link__text">home</span>
      </Link>
      <Link to="/user" className="nav__link">
        <span className="nav__link__icon">
          <FaBullhorn />
        </span>
        <span className="nav__link__text">my account</span>
      </Link>
      <Link to="/company" className="nav__link">
        <span className="nav__link__icon">
          <FaBuilding />
        </span>
        <span className="nav__link__text">my company</span>
      </Link>
      <Link to="/config" className="nav__link">
        <span className="nav__link__icon">
          <FaCog />
        </span>
        <span className="nav__link__text">my settings </span>
      </Link>
      <Link to="/news" className="nav__link">
        <span className="nav__link__icon">
          <FaRegNewspaper />
        </span>
        <span className="nav__link__text">news</span>
      </Link>
      <Link to="/analytics" className="nav__link">
        <span className="nav__link__icon">
          <FaChartArea />
        </span>
        <span className="nav__link__text">analytics</span>
      </Link>
    </nav>
  );
}
