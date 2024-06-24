import React from 'react';
import Sidebar from '../../SellerDashboard/Sidebar/Sidebar';
import "./Products.css";

const Products = () => {
  return (
    <div className='sellerDashboard'>
        <div id='sectionOne'>
            <Sidebar/>
        </div>

        <div id='sectionTwo'>
        <div className="--content-data">
        <div className="--content-data-header">
          <h3>Product Uploaded</h3>
        </div>
        <div>
          <table className="--content-table">
            <tr className="--table-head">
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Used For</th>
              <th>Price</th>
              <th>Qty. Sold</th>
            </tr>
            <hr />
            <tr className="--table-data">
              <td><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" alt="" /></td>
              <td>Apple Iphone 15 pro</td>
              <td>1 Year</td>
              <td>$1345.00</td>
              <td>01</td>
            </tr>
            <tr className="--table-data">
              <td><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" alt="" /></td>
              <td>Apple Iphone 15 pro</td>
              <td>1 Year</td>
              <td>$1345.00</td>
              <td>01</td>
            </tr>
          </table>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Products