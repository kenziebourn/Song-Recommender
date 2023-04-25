import React from 'react';
import { FiSend } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  // Function used to handle form submission //
  // Returns results page after user enters song or selects genre // 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Results1');
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

  return(
    <>
    <div className="welcome">
    <h1>WELCOME TO JIA AI</h1>
    <h2>To get started, please enter a song name and artist to generate song recommendations </h2>
    <div/>
    <div className="submit">
    <form onSubmit={handleSubmit}>
    <label>
      <input type="text" id="userInput" name="userInput" placeholder="Ex: Paradise by Coldplay"/>
      <button type="submit">
        <FiSend/>
      </button>
    </label> 
    </form>
    </div>
    <h2>Don't have a specific song in mind?
      Select a genre and we'll take it from here.
    </h2>
    <form onSubmit={handleSubmit}>
       <select>
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
     <button type="submit">Submit</button>
     </form>
     <div className="icons">
     <BsQuestionCircle onClick={handleClick1}/>
     <MdOutlineExitToApp onClick={handleClick2}/>
     </div>
    </div>
    </>
  );
}


export default Homepage;