import React from 'react';
import "./SellerDashboard.css"
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const SellerDashboard = () => {
  return (
    <div className='sellerDashboard'>
        <div id='sectionOne'>
            <Sidebar/>
        </div>

        <div id='sectionTwo'>
            <Content/>
        </div>
    </div>
  )
}

export default SellerDashboard