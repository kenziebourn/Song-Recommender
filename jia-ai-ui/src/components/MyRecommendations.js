import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecommendationsContext } from './RecommendationsContext';

const MyRecommendations = () => {
    const { savedRecommendations } = useContext(RecommendationsContext);
    console.log(savedRecommendations);

    return (
        <div className="text-center mt-20">
          <h1 className="font-semibold text-3xl mb-5">Your Saved Recommendations:</h1>
          <ul>
            {savedRecommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
            <p className="mb-5">
                Click <Link to="/Homepage" className="underline">here</Link> to return home.
            </p>
        </div>
      );
};

export default MyRecommendations;