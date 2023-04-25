import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login'; 
import ContactForm from './components/ContactForm';
import Signup from './components/Signup';
import Results1 from './components/Results1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          JIA AI
        </h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
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