import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignUpPage'; 
import Dashboard from "./components/Dashboard"; 
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import NoNavbarLayout from './components/NoNavbarLayout';
import ProtectedRoute from './components/ProtectedRoute';
import HittadSkopa from './components/HittadSkopa';

function App() { 
  return ( 
    <div className="App"> 
      <Router> 
      <Routes> 
  {/* Routes utan navbar */}
  <Route path="/" element={<NoNavbarLayout />}>
    <Route index element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
  </Route>

  {/* Routes med navbar (RootLayout) */}
  <Route path="/" element={<RootLayout />}>
    <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } 
    />
    <Route path="/skopa-hittad" element={<HittadSkopa />} /> {/* Flyttad hit */}
  </Route> 
</Routes>

      </Router> 
    </div> 
  ); 
} 

export default App;
