import React from 'react';
import { Link } from 'react-router-dom';

const Results1 = () => {
  return (
    <>
    <div>Based on your search, we think you'd like:</div>
    <div><p>Click <Link to="/Homepage">here</Link> to return home.</p></div>
    </>
  )
};

export default Results1;