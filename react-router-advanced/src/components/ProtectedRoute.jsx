import {BrowserRouter as Router , Route , Routes , Navigate} from 'react-router-dom';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm'
import Dashboard from './Dashboard';


// FUNCTION TO CHECK AUTHENTICATION 
const isAuthenticated = () =>  localStorage.getItem('authToken') != null;

    //customize privage route 
    const PrivateRoute =({element}) => {
        return isAuthenticated() ? element : <Navigate to="/registeration" />
    }

    //login componant
 const login =() => {
            const handleLogin = () => {
                localStorage.setItem('autoToken' , 'your-token');
                window.location.href = '/dashboard';
            };

    
        return <button onClick={handleLogin}>login</button>

    }


//Main Component
const ProtectedRoutes =() => (
  <Router>
  <Routes>
    <Route path="/" element= {<h2>Home</h2>} />
    <Route path="/registeration" element={<RegistrationForm />} />
    <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>  
  </Router>
)
export default ProtectedRoutes;
