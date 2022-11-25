import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.js';
import Dashboard from './pages/dashboard.js';
import Login from './/pages/login.js';



const App = () => {
  return (
  
        <Routes>
          
          <Route path="/" element={<Login/>} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
        
  );
};

export default App;
