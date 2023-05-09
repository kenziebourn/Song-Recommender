import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    <div className="text-center mt-20">
      <h1 className='text-3xl font-medium mb-8'>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input className= 'rounded py-2 px-3 shadow-md mb-4' type="text" placeholder="Username"/>
        </label>
        <br></br>
        <label >
          <input className= 'rounded py-2 px-3 shadow-md' type="password" placeholder="Password" />
        </label>
        <p className='text-sm mt-5 mb-4'>No Account Yet? <Link to="/" className="underline">Create one</Link></p>
        <div>
          <button className= 'bg-white rounded py-2 px-3 shadow-md mb-4' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Login;