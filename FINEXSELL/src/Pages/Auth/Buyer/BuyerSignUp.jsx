import React from 'react';
import "./BuyerSignUp.css"

const BuyerSignUp = () => {
  return (
    <div className='buyerSignUp'>
      <div className='--buyerSignUp-header'>
        <h2>Sign Up</h2>
        <div className='--buyerSignUp-btnOne'>
          <button>Connect Your X</button>
        </div>
        <div className='--buyerSignUp-btnTwo'>
          <button>Connect Your Wallet</button>
        </div>
      </div>
    </div>
  )
}

export default BuyerSignUp