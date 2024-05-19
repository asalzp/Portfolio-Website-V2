import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';
import Entertainment from './pages/Entertainment';

function App() {
  return (
    <>
       <Routes>
          <Route path="/*" element={<Home />} />
          
          
       </Routes>
    </>

  );
}

export default App;
