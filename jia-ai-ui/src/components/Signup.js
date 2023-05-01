import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

//This is the Signup page which is also the landing page//
function Signup() {
  const navigate = useNavigate();
  // Function used to handle form submission //
  // Puts user at homepage upon signing up // 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Homepage');
  }

  return(
    <div className="signup-wrapper">
      <BsPersonCircle size={40}/>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>Create Password</p>
          <input type="password" />
        </label>
        <label>
          <p>Reenter Password</p>
          <input type="password" />
          <p>Already have an Account? <Link to="/Login">Login</Link></p>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Signup;
