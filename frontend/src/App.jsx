import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegistrationPage from './pages/Registration.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Homepage from './Homepage/Homepage.jsx';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        
      </Routes>
    </Router>
  )
}

export default App
