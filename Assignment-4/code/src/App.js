import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './component/LandingPage/LandingPage';
import Postview from './component/PostView/Postview';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Postview' element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
