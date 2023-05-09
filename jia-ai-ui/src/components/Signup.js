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
    <div className="text-center items-center mt-12">
      <BsPersonCircle size={40} className="" />
      <h1 className='text-3xl font-medium mb-8'>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input className= 'rounded py-2 px-3 shadow-md mb-4' type="text" />
        </label>
        <label>
          <p>Create Password</p>
          <input className= 'rounded py-2 px-3 shadow-md mb-4' type="password" />
        </label>
        <label>
          <p>Reenter Password</p>
          <input className= 'rounded py-2 px-3 shadow-md' type="password" />
          <p className='text-sm mt-5 mb-4' >Already have an Account? <Link to="/Login" className="underline" >Login</Link></p>
        </label>
        <div>
          <button className= 'bg-white rounded py-2 px-3 shadow-md mt-5' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Signup;
