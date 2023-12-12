import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:authors" element={<DetailPage />} />
        <Route path="/successpage/:bookIds" element={<SuccessPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;

