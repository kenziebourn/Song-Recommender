import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { RecommendationsContext } from './RecommendationsContext';

const Results1 = () => {
  // Access the current location and extract the recommendations from the state
  const location = useLocation();
  const { recommendations } = location.state;
  const { addToSavedRecommendations } = useContext(RecommendationsContext);

  // State variable to control the visibility of the text
  const [showText, setShowText] = useState(false); 

  // Function called when user clicks save button
  const handleSaveRecommendations = () => {
    addToSavedRecommendations(recommendations);
    setShowText(true);
  };

  // Render the component
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
      <div className="mt-10">
        <div><button className="bg-white ml-2 py-2 px-3 rounded shadow-md hover:bg-ocean" onClick={handleSaveRecommendations}>Save Recommendations</button>
        {showText && <p>✓ Saved</p>}
        </div>
        <p className="mt-10">
          Click <Link to="/Homepage" className="underline">here</Link> to return home.
        </p>
      </div>
    </div>
  );
};

export default Results1;
