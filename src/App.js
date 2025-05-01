import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RequestHelp from './pages/RequestHelp';
import ConfirmationPage from './pages/ConfirmationPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DashboardUser from './pages/DashboardUser';
import ProtectedRoute from './pages/ProtectedRoute'; // Protezione tecnica

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/richiesta" element={<RequestHelp />} />
        <Route path="/conferma" element={<ConfirmationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard-utente" element={<DashboardUser />} />
      </Routes>
    </Router>
  );
}

export default App;
