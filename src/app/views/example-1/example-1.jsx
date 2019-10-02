import React, { useState } from 'react';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';

const Example1 = () => {
  const [myClickState, setMyClickState] = useState();

  const handleClick = () => {
    setMyClickState('Click detected at ' + new Date().toISOString());
  };

  const handleReset = () => {
    setMyClickState('');
  };

  return (
    <SimpleLayout>
      <Heading1>Example 1: Use of State and Event Handlers</Heading1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleReset}>Reset</button>
      {myClickState && <div>{myClickState}</div>}
    </SimpleLayout>
  );
};

Example1.propTypes = {};

export default Example1;
