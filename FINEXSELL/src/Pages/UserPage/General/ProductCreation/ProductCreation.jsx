import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./ProductCreation.css";

const ProductCreation = () => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    setFileSelected(event.target.files.length > 0);
  };

  const handleSubmit = (event) => {
    if (!fileSelected) {
      event.preventDefault();
      alert("Please select a file.");
    }
  };

  return (
    <div className="productCreation">
      <div className="--productCreation-hearder">
        <div className="--productCreation-add">
          <div className="--productCreation-addFile">
            <form>
              <div className="group">
                <input type="file" name="photo" id="addPhotoInput" required onChange={handleFileChange}/>
                <label htmlFor="addPhotoInput" className="plus">
                  <AiOutlinePlusSquare />
                </label>
                <h3>Add Product Images</h3>
              </div>
              <div className="--productCreation-product-details">
                <div className="form-group">
                    <input type="text" id="productName" name="productName" placeholder="Enter Product Name" required/>
                </div>
                <div className="form-group">
                    <input type="text" id="productName" name="productName" placeholder="Product Description" required/>
                    {/* <textarea id="description" name="description" placeholder="Product Description" required></textarea> */}
                </div>
                <div className="--form-group-flex">
                    <div className="--form-group">
                        <input type="text" id="productName" name="productName" placeholder="Enter Product Usage" required/>
                        {/* <textarea id="usage" name="usage" placeholder="Enter Product Usage" required></textarea> */}
                    </div>
                    <div className="--form-group">
                        <input type="number" id="price" name="price" placeholder="Enter Product Price" required />
                    </div>
                </div>
                <div className="--form-buttons">
                    <button className="--form-buttons-first" type="submit">Submit</button>
                    <button className="--form-buttons-second" type="button" onClick={() => window.location.reload()}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
