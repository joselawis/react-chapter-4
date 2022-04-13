import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error/404';

function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </App>
  );
}

export default AppRoutes;
