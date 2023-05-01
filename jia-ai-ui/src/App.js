import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login'; 
import ContactForm from './components/ContactForm';
import Signup from './components/Signup';
import Results1 from './components/Results1';


function App() {
  return (
    <div className="bg-gradient-to-r from-ocean via-mint to-sun min-h-screen">
      <header className="flex items-center ml-2">
      <img className="mt-1 w-6 h-6" src="/vinylrecord.png" alt="image" />
        <h1 className="mt-1 ml-1 font-semibold">
          JIA
        </h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/Results1' element={<Results1 />} />
          <Route path='/ContactForm' element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      <footer>© 2023 McKenzie Bourn</footer>
    </div>
  );
}

export default App;