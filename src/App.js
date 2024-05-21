import React, {useState} from 'react';
import './App.css';
//import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import PrivateRoute from './utils/PrivateRoute';
import {Route, Routes} from 'react-router-dom';
import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
    </div>
  );
}

export default App;