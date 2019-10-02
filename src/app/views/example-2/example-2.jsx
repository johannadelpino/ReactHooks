import React from 'react';
import { appConfig } from 'app-config/env';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';
import { useGetRequest } from 'app-common/api/http';

const Example2 = () => {
  const articles = useGetRequest(appConfig.apiUrl.api1, null); //gets trigger by re render

  const renderArticles = () => {
    if (articles.data || articles.error) {
      if (articles.data.results) {
        return articles.data.results.map((result, index) => (
          <div key={index}>{JSON.stringify(result)}</div>
        ));
      } else {
        return <p>We were unable to load the articles</p>;
      }
    } else {
      return null;
    }
  };

  return (
    <SimpleLayout>
      <Heading1>
        Example 2: Request on load (Same logic applies for POST)
      </Heading1>
      {renderArticles()}
    </SimpleLayout>
  );
};

Example2.propTypes = {};

export default Example2;
