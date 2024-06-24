import React from 'react';
import { Link } from 'react-router-dom';
import "./Started.css";


const Started = () => {
  return (
    <div className='started'>
      <div className='--started-header'>
        <h2>Who Are YOU</h2>
      </div>
      <div className='--started-btn'>
        <Link to="/buyerSignUp">
          <button className='--started-buyer'>Buyer</button>
        </Link>
        <Link to="/sellerSignUp">
          <button className='--started-seller'>Seller</button>
        </Link>
      </div>
    </div>
  )
}

export default Started