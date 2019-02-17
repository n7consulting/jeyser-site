import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Cover from '../components/home/Cover';
import Ecosystem from '../components/home/Ecosystem';
import Giants from '../components/home/Giants';
import References from '../components/home/References';

const IndexPage = props => (
  <Layout location={props.location}>
    <div className="home">
      <Helmet title="Open source ERP/CRM for Junior-Entreprises" />
      <Cover />
      <Ecosystem />
      <References />
      <Giants />
    </div>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
