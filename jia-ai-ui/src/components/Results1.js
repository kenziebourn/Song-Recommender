import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { RecommendationsContext } from './RecommendationsContext';

const Results1 = () => {
  const location = useLocation();
  const { recommendations } = location.state;
  const { addToSavedRecommendations } = useContext(RecommendationsContext);

  const handleSaveRecommendations = () => {
    addToSavedRecommendations(recommendations);
  };

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
        <p><button onClick={handleSaveRecommendations}>Save Recommendations</button></p>
        <p>
          Click <Link to="/Homepage" className="underline">here</Link> to return home.
        </p>
      </div>
    </div>
  );
};

export default Results1;
