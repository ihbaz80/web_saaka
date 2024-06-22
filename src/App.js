import React, {useState} from 'react';
import './App.css';
//import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import LoginForm from './pages/Login/Login';
import {Routes,Route} from 'react-router-dom';
import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
    </div>
  );
}

export default App;