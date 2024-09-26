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
          {/* Routes that include the RootLayout with MenuAppBar */}
          <Route path="/" element={<NoNavbarLayout />}> {/* No navbar for login/signup */}
            <Route index element={<LoginPage />} /> {/* LoginPage without navbar */}
            <Route path="signup" element={<SignupPage />} /> {/* SignupPage without navbar */}
          </Route>

          <Route path="/" element={<RootLayout />}> {/* Layout with navbar */}
            <Route 
              path="/dashboard" 
            
              element={
                <ProtectedRoute>
                  <Dashboard /> {/* Render dashboard inside ProtectedRoute */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/skopa-hittad" 
            
              element={
                <ProtectedRoute>
                  <HittadSkopa /> {/* Render hittadSkopa inside ProtectedRoute */}
                </ProtectedRoute>
              } 
            />
          </Route> 

          

        </Routes> 
      </Router> 
    </div> 
  ); 
} 

export default App;
