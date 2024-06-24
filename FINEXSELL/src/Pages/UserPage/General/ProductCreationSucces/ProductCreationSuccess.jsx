import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "./ProductCreationSuccess.css"

const ProductCreationSuccess = () => {
  return (
    <div className='ProductCreationSuccess'>
        <div className='--ProductCreationSuccess-header'>
            <div className='--ProductCreationSuccess-check'>
                <h1><IoIosCheckmarkCircleOutline color='green' /></h1>
                <h2>Product Published Successfully!!</h2>
                <button className='--ProductCreationSuccess-button'>Return To Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCreationSuccess