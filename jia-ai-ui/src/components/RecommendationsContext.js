import React, { createContext, useState } from 'react';
// manages state of saved recommendations 
export const RecommendationsContext = createContext();

export const RecommendationsProvider = ({ children }) => {
  const [savedRecommendations, setSavedRecommendations] = useState([]);

  const addToSavedRecommendations = (recommendation) => {
    setSavedRecommendations((prevRecommendations) => [...prevRecommendations, recommendation]);
  };

  return (
    <RecommendationsContext.Provider value={{ savedRecommendations, addToSavedRecommendations }}>
      {children}
    </RecommendationsContext.Provider>
  );
};
