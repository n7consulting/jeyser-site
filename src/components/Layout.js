import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './layout/Header';
import BurgerButton from './layout/BurgerButton';
import Footer from './layout/Footer';
import SideMenu from './layout/SideMenu';
import '../styles/main.scss';
import helmetConfig from '../helmetConfig';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResponsiveMenu: false,
    };
  }

  showMenu = (open) => {
    this.setState((prevState) => ({ ...prevState, showResponsiveMenu: open }));
  };

  render() {
    const { children, location } = this.props;
    const { showResponsiveMenu: open } = this.state;
    const withFooter = ((-1 === location.pathname && location.pathname.search('/docs')) || !location.key);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <div className={classNames('main full', { open })}>
        <div className="full">
          <Helmet {...helmetConfig.head} />
          <Header />
          <div className={classNames('page openable', { 'with-footer': withFooter })}>{children}</div>
          {withFooter && <Footer />}
        </div>
        <BurgerButton
          onClick={this.showMenu.bind(null, !open)}
          status={open ? 'close' : 'burger'}
        />
        <div
          role="presentation"
          className="overlay"
          onClick={this.showMenu.bind(null, false)}
        />
        <SideMenu open={open} />
      </div>
    );
    /* eslint-enable react/jsx-props-no-spreading */
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
