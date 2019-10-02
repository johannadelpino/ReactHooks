import React, { useState } from 'react';
import { appConfig } from 'app-config/env';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';
import { get } from 'app-common/api/http';

const Example3 = () => {
  const [articles, setArticles] = useState({});

  const handleGetArticles = () => {
    get(appConfig.apiUrl.api1, null)
      .then(response => setArticles(response))
      .catch(error => setArticles(error));
  };

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
        Example 3: Request on click (Same logic applies for POST)
      </Heading1>
      <p>
        This example will not use a hook to fetch the information. Custom hooks
        are triggered by renders, we do not want to force a rerender (E.g.: by
        modifiying a local state flag) just to trigger the fetchng hook when we
        can easily just call the fetching api directly and do the rerender after
        we have got the info, when it is actually necessary.
      </p>
      <button onClick={handleGetArticles}>Get</button>
      {renderArticles()}
    </SimpleLayout>
  );
};

Example3.propTypes = {};

export default Example3;
