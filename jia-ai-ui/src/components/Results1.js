import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Results1.css';

const Results1 = () => {
  const location = useLocation();  // Using the useLocation hook to get the current location
  const { recommendations } = location.state; // Destructuring the recommendations object from the current location state
  console.log(recommendations); // represents the response from the AI 
  
  return (
    <div className='results'>
    <div>Based on your search, we think you'd like:</div>
    <br/>
    <div className="songrecs">
      {recommendations} 
      </div>
      <br/>
    <div><p>Click <Link to="/Homepage">here</Link> to return home.</p></div>
    </div>
  )
};

export default Results1;