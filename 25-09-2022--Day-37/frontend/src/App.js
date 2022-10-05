import React,{useState,createContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassWord from './components/ForgotPassWord/ForgotPassWord';
import ResetPassword from './components/ResetPassword/ResetPassword';

export const store = createContext();

const  App = ()=> {
const [token,setToken] = useState(localStorage.getItem('jwttoken'));
  return (
   <>
   <div>
   <store.Provider value={[token,setToken]}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassWord />} />
            <Route path='/resetpassword/:id/:token' exact  element={<ResetPassword />} />
          </Routes>
        </Router>
      </store.Provider>
      </div>
    





   </>
  );
}

export default App;



