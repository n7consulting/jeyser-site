import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import links from '../../data/menu';
import Logo from './Logo';
import Search from './Search';
import MenuItem from './MenuItem';

// eslint-disable-next-line react/jsx-props-no-spreading
const nav = links.map((link) => <MenuItem key={link.text} {...link} />);

const SideMenu = ({ open }) => (
  <div className={classNames('side-menu', { open })}>
    <div className="side-menu__top">
      <div className="side-menu__logo">
        <div className="logo__circle" />
        <Logo className="logo__text" />
      </div>
      <Search className="side-menu__search" />
    </div>
    <nav className="side-menu__nav">
      <MenuItem key="home" path="/" text="Home" />
      {nav}
    </nav>
  </div>
);

SideMenu.defaultProps = {
  open: false,
};

SideMenu.propTypes = {
  open: PropTypes.bool,
};

export default SideMenu;
