import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';

function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </App>
  );
}

export default AppRoutes;
