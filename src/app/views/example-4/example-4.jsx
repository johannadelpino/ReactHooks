import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../store/actions/ui-state';
import LoadingMask from 'app-common/components/loading-mask/loading-mask';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';

const Example4 = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.uiState.loading);

  //loading mask on initial load
  useEffect(() => {
    dispatch(setLoading(true));
    const id = setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [dispatch]);

  // loading mask with a trigger
  const handleProcessMore = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  };

  return (
    <SimpleLayout>
      <Heading1>Example 4: Connecting to Redux</Heading1>
      <p>
        Loading mask is control across the application with a centralized
        action/state in redux store.
      </p>
      <p>
        Loading mask displays on first render and by the click of the button.
      </p>
      <button onClick={handleProcessMore}>Process some more</button>
      {loading && <LoadingMask />}
    </SimpleLayout>
  );
};

Example4.propTypes = {};

export default Example4;
