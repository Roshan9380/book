// SuccessPage.js

import React from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  // Get the bookIds from the URL parameters
  const { bookIds } = useParams();

  // Split the bookIds into an array
  const bookIdArray = bookIds.split(',');
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use the navigate function to go back to the home page
    navigate('/');
  };

  return (
    <div>
      <h2>Success!!!</h2>
      <p>Your order for the following Book ID has confirmed:</p>
      <ul>
        {bookIdArray.map((bookId, index) => (
          <li key={index}>Book ID: {bookId}</li>
        ))}
      </ul>

      <p>Thank you!!!</p>
      <Link to="/">
        <button onClick={handleGoBack}>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
