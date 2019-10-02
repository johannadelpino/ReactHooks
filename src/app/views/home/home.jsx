import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesConfig } from 'app-config/routes';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';

const Home = () => {
  const renderSummary = () => {
    return AppRoutesConfig.map((routes, index) => (
      <li key={index}>
        <Link to={routes.path}>{routes.linkName}</Link>
      </li>
    ));
  };

  return (
    <SimpleLayout>
      <Heading1>React SPA with Hooks</Heading1>
      <p>
        Common scenarios that need to be implemented in a SPA. My way of
        learning hooks for real implementations!
      </p>
      <ul>{renderSummary()}</ul>
    </SimpleLayout>
  );
};

Home.propTypes = {};

export default Home;
