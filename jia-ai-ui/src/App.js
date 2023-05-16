import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from "./contexts/user.context";
import Homepage from './components/Homepage';
import Login from './components/Login'; 
import ContactForm from './components/ContactForm';
import Signup from './components/Signup';
import Results1 from './components/Results1';
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="bg-gradient-to-r from-ocean via-mint to-sun min-h-screen">
      <header className="flex justify-end items-start mr-5">
      <img className="mt-1 w-6 h-6" src="/jiaailogo.png" alt="image" />
        <h1 className="mt-1 ml-1 font-semibold self-end">
          JIA.ai
        </h1>
      </header>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element= {<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Results1' element={<Results1 />} />
            <Route path='/ContactForm' element={<ContactForm />} />
            <Route element={<PrivateRoute />}>
            <Route exact path="/Homepage" element={<Homepage />} />
            </Route>
            <Route element={<PrivateRoute />}>
            <Route exact path="/Results1" element={<Results1 />} />
            </Route>
            <Route element={<PrivateRoute />}>
            <Route exact path="/ContactForm" element={<ContactForm />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
      <footer>© 2023 McKenzie Bourn</footer>
    </div>
  );
}

export default App;