import React from 'react';
import { FiSend } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Homepage() {
  const navigate = useNavigate();

  // Function used to handle form submission //
  // Returns results page after user enters song //
  const [recommendations, setRecommendations] = useState([]); 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
     // userInput represents the song and artist the user has entered
    const userInput = document.getElementById("userInput").value;
  
    // Send request to backend with userInput
    fetch(`http://localhost:3001/Results1/${userInput}`)
      .then(response => response.json()) // response from server converted to JSON format
      // if operation successful, then function navigates to results page and passes fetched data
      .then(data => {
        navigate('/Results1', { state: { recommendations: data } });
        setRecommendations(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

    // Function used to handle form submission //
  // Returns results page after user enters song //
  const [recommendations2, setRecommendations2] = useState([]); 
  const handleSubmit2 = async (event) => {
    event.preventDefault();
  
     // Genre represents the genre the user has selected
    const Genre = document.getElementById("genre").value;
  
    // Send request to microservice with user's selected genre
    fetch(`http://localhost:3002/genre/${Genre}`)
      .then(response => response.json()) // response from server converted to JSON format
      // if operation successful, then function navigates to results page and passes fetched data
      .then(data => {
        navigate('/Results1', { state: { recommendations: data } });
        setRecommendations2(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
    
  // Function used to handle clicking on question icon //
  // Navigates user to contact form // 
  const handleClick1 = (event) => {
    event.preventDefault();
    navigate('/ContactForm');
  }

  // Function used to handling clicking on logout icon //
  // Returns user to login page // 
  const handleClick2 = (event) => {
    event.preventDefault();
    navigate('/Login');
  }
  
  return (
    <>
      <div className="font-semibold text-9xl mt-3 ml-10 text-left">
        <h1 className="text-white">Introducing</h1><h1>JIA.ai</h1>
      </div>
      <div className="border-2 border-black mt-10 ml-10 mr-10 "></div>
      <div className="mt-10 ml-10 text-left text-2xl">
        <h2>To get started, please enter a song name and artist to generate song recommendations</h2>
      </div>
      <div className="flex mt-5 ml-10 text-left text-1xl items-center">
        <form onSubmit={handleSubmit}>
          <label className="flex items-center">
            <input className="rounded py-2 px-3 shadow-md" type="text" id="userInput" name="userInput" placeholder="Ex: Paradise by Coldplay"/>
            <button className="bg-white ml-2 py-2 px-3 rounded shadow-md" type="submit">
              <FiSend size={24}/>
            </button>
          </label>
        </form>
      </div>
      <div className="mt-5 ml-10 text-left text-2xl" >
      <h2>Don't have a specific song in mind? Select a genre and we'll take it from here.</h2></div>
      <div className="flex mt-2 ml-10 text-left text-1xl items-center" >
      <form onSubmit={handleSubmit2} className="flex items-center shadow-md">
        <select className="rounded py-2 px-3 shadow-md" name="genres" id="genre">
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
          <option value="Techno">Techno</option>
          <option value="House">House</option>
          <option value="Rock">Rock</option>
          <option value="Country">Country</option>
          <option value="R&B">R&B</option>
          <option value="Latin">Latin</option>
          <option value="Classical">Classical</option>
        </select>
        <button className="rounded bg-white py-2 px-3 ml-2" type="submit">Submit</button>
      </form>
      </div>
      <div className="mt-10 ml-10 flex items-center">
        <BsQuestionCircle size={30} onClick={handleClick1} className="mr-5" />
        <MdOutlineExitToApp size={30} onClick={handleClick2}/>
      </div>
    </>
  )
};

export default Homepage;