import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalNav from 'app-common/components/global-nav/global-nav';
import AppRoutes from 'app-config/routes';
import { AppWrapper } from './app-style';

const App = () => (
  <AppWrapper>
    <GlobalNav></GlobalNav>
    <HashRouter>{AppRoutes}</HashRouter>
  </AppWrapper>
);

App.propTypes = {};

export default App;
