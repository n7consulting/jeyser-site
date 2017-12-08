import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import easyImage from 'images/easy_component.svg';
import apiImage from 'images/api_component.svg';
import solidImage from 'images/solid_component.svg';
import openSourceImage from 'images/opensource_component.svg';
import Button from 'components/common/Button';

const EcosystemCard = ({ big, image, link, text, title }) => (
  <div className={classnames('grid__item', { full: big })}>
    <div className={classnames('card ecosystem__card', { big })}>
      <div className="card__circle">
        <img src={image} alt={title} width="646" height="646" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <article className="card__autosize">
          <p>{text}</p>
        </article>
        <Button
          text="Read more"
          className="btn ecosystem__button small"
          link={link}
        />
      </div>
    </div>
  </div>
);

EcosystemCard.propTypes = {
  big: PropTypes.bool,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

EcosystemCard.defaultProps = {
  big: false,
};

const Ecosystem = () => (
  <section className="home__part home__ecosystem">
    <div className="container">
      <h1 className="ecosystem__title">
        <strong>Jeyser</strong> CRM
      </h1>
      <h5>
        Jeyser CRM is a free management software for Junior-Entreprises.
      </h5>
      <div className="ecosystem__content grid__container">
        <EcosystemCard
          big
          image={apiImage}
          link="/docs/features-fr"
          text="Jeyser covers every process of your Junior-Entreprise. Manage everything with one tool: member & skills management, customers, business pipeline and many more. You can even publish your documents from the web."
          title="Fully featured"
        />
        <EcosystemCard
          image={openSourceImage}
          link="/docs/dev/about"
          text="We believe that we are stronger together and that only collaboration will bring a great tool for everyone. Use Jeyser for free, share your feedback & ideas, and together we will make Jeyser a better software."
          title="Open source"
        />
        <EcosystemCard
          image={easyImage}
          link="/docs/dev/install"
          text="Get a secured installation of Jeyser on your server in a matter of minutes. Even without computer skills! We are eager to share our work with you and have worked a lot to make the installation as easy as possible."
          title="Easy"
        />
        <EcosystemCard
          image={solidImage}
          link="/docs/"
          text="Jeyser is a five year old project, used daily by an ever growing community of Junior-Entreprise. It is developed by skilled engineers, doing robust software is our job. Thus you can expect a high quality solution and support."
          title="Solid"
        />
      </div>
    </div>
  </section>
);

export default Ecosystem;
