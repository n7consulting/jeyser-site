import React from 'react';
import { Link } from 'gatsby';
import links from '../../data/menu';
import Logo from './Logo';
import Search from './Search';
import MenuItem from './MenuItem';

// eslint-disable-next-line react/jsx-props-no-spreading
const nav = links.map((link) => <MenuItem key={link.text} {...link} />);

const Header = () => (
  <header className="header openable">
    <Link to="/" className="header__logo">
      <Logo className="logo__text" />
    </Link>
    <Search className="header__search" />
    <nav className="header__nav">{nav}</nav>
    <nav className="header__social">
      <a href="https://github.com/n7consulting/Incipio" target="blank">
        <i className="icon-github" />
      </a>
    </nav>
  </header>
);

export default Header;
