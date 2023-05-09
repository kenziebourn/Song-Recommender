import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Results1 = () => {
  const location = useLocation();  // Using the useLocation hook to get the current location
  const { recommendations } = location.state; // Destructuring the recommendations object from the current location state
  console.log(recommendations); // represents the response from the AI 
  
  return (
    <div className="text-center mt-20">
    <div className= "font-semibold text-3xl">Based on your search, we think you'd like:</div>
    <br/>
    <div className="text-lg">
      {recommendations} 
      </div>
      <br/>
    <div className="mt-20"><p>Click <Link to="/Homepage"  className="underline">here</Link> to return home.</p></div>
    </div>
  )
};

export default Results1;