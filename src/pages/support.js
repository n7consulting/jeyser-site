import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const SupportCard = ({ children, title }) => (
  <div className="support-card">
    <h3>{title}</h3>
    <div className="support-card__content">{children}</div>
  </div>
);

SupportCard.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

SupportCard.defaultProps = {
  children: null,
};

const SupportPage = (location) => (
  /* eslint-disable-next-line react/prop-types */
  <Layout location={location}>
    <div className="support">
      <Helmet title="Support" />
      <section className="container">
        <h1>
          Need some
          {' '}
          <strong>help</strong>
          {' '}
          ?
        </h1>
        <div className="support__cards">
          <SupportCard title="Community">
            <p>
              Ask questions by opening an issue on
              {' '}
              <a
                href="https://github.com/n7consulting/Incipio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              .
            </p>
          </SupportCard>
          <SupportCard title="Email">
            <p>
              Have a specific or confidential question, a security issue
              or just prefer email to chat, reach our main technical team
              directly at dsi[at]n7consulting.fr.
              <br />
              <br />
              You will not disturb us, we are always very happy to exchange about Jeyser!
            </p>
          </SupportCard>
        </div>
      </section>
    </div>
  </Layout>
);

export default SupportPage;
