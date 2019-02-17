import React from 'react';
import { trustUs } from '../../data/logos';

const otherList = trustUs.map(({ name, logo }) => (
  <div key={name} className="references__item">
    <img src={`/references/${logo}.png`} alt={name} width="300" height="110" />
  </div>
));

const References = () => (
  <section className="home__part home__references">
    <div className="container references__container">
      <h1 className="references__title">
        They use <strong>Jeyser CRM</strong>
      </h1>
      <div className="references__list list__other">{otherList}</div>
    </div>
  </section>
);

export default References;
