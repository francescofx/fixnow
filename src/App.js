import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RequestHelp from './pages/RequestHelp';
import ConfirmationPage from './pages/ConfirmationPage'; // 👈 aggiunto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/richiesta" element={<RequestHelp />} />
        <Route path="/conferma" element={<ConfirmationPage />} /> {/* 👈 aggiunto */}
      </Routes>
    </Router>
  );
}

export default App;
