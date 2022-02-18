import React from 'react';
import Button from '../common/Button';
import Logo from '../layout/Logo';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">
      <div className="cover__circle" />
      <Logo className="cover__logo" />
      <h2>Open source ERP/CRM for Junior-Entreprises</h2>
      <div className="cover__buttons">
        <Button
          empty
          text="Install"
          icon=""
          link="/docs/install"
        />
        <Button
          text="Demo"
          icon=""
          link="http://jeyser-demo.herokuapp.com"
        />
      </div>
    </div>
  </section>
);

export default Cover;
