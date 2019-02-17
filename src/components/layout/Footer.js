import React, { Component } from 'react';

class Footer extends Component {
  componentDidMount() {}
  render() {
    return (
      <footer className="footer openable">
        <p className="footer__copyright">
          Content Copyright © 2017{' '}
          Jeyser CRM
        </p>
        <p className="footer__tilleuls">
          Design (MIT) largely inspired on{' '}
          <a
            href="https://github.com/api-platform/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Platform
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
