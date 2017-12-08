import React from 'react';
import Helmet from 'react-helmet';
import Cover from 'components/home/Cover';
import Ecosystem from 'components/home/Ecosystem';
import Giants from 'components/home/Giants';
import References from 'components/home/References';

const IndexPage = () => (
  <div className="home">
    <Helmet title="Open source ERP/CRM for Junior-Entreprises" />
    <Cover />
    <Ecosystem />
    <References />
    <Giants />
  </div>
);

export default IndexPage;
