import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Results1 = () => {
  const location = useLocation();
  const { recommendations } = location.state;
  

  return (
    <div className="text-center mt-20">
      <div className="font-semibold text-3xl">
        <Typewriter
         options={{
          cursor: '', // Hide the cursor
          delay: 50, // Delay between each character
        }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Based on your search, we think you\'d like:')
              .start();
          }}
        />
      </div>
      <br />
      <div className="text-lg">
        <Typewriter
        options={{
          cursor: '', // Hide the cursor
          delay: 50, // Delay between each character
        }}
         onInit={(typewriter) => {
          typewriter
            .pauseFor(2800)
            .typeString(recommendations)
            .start();
          }}
        />
      </div>
      <br />
      <div className="mt-20">
        <p>
          Click <Link to="/Homepage" className="underline">here</Link> to return home.
        </p>
      </div>
    </div>
  );
};

export default Results1;
