import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './Login.css';

//This is the Login page//

function Login() {
    
  const navigate = useNavigate();
  // Function used to handle form submission //
  // Puts user at homepage upon logging in // 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Homepage');
  }

  return(
    <div className="login-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Username"/>
        </label>
        <br></br>
        <label >
          <input type="password" placeholder="Password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Login;