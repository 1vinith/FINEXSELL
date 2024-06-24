import React, { useState } from 'react';
import profilePhoto from "../../../../assets/profile.avif";
import { Link, useLocation } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='sidebar'>
      <div className='--sidebar-profile'>
        <img src={profilePhoto} alt="" />
        <h2>John Doe</h2>
        <p>johndoe20</p>
      </div>
      <div className='--sidebar-profile-details'>
        <div className='--sidebar-dashboard'>
          <Link to="/sellerDashboard">
          <button
            className={activeLink === "/sellerDashboard" ? "active" : ""}
            onClick={() => handleLinkClick("/sellerDashboard")}
          >
            Dashboard
          </button>
          </Link>
        </div>
        <div className='--sidebar-sell'>
          <Link to="/productCreation">
            <button
              className={activeLink === "/productCreation" ? "active" : ""}
              onClick={() => handleLinkClick("/productCreation")}
            >
              Sell
            </button>
          </Link>
        </div>
        <div className='--sidebar-products'>
          <Link to="/products">
            <button
              className={activeLink === "/products" ? "active" : ""}
              onClick={() => handleLinkClick("/products")}
            >
              Products
            </button>
          </Link>
        </div>
        <div className='--sidebar-wallet'>
          <button
            className={activeLink === "/wallet" ? "active" : ""}
            onClick={() => handleLinkClick("/wallet")}
          >
            Wallet
          </button>
        </div>
        <div className='--sidebar-switch'>
          <button
            className={activeLink === "/switch" ? "active" : ""}
            onClick={() => handleLinkClick("/switch")}
          >
            Switch
          </button>
        </div>
        <div className='--sidebar-settings'>
          <button
            className={activeLink === "/settings" ? "active" : ""}
            onClick={() => handleLinkClick("/settings")}
          >
            Settings
          </button>
        </div>
        <div className='--sidebar-logout'>
          <button
            className={activeLink === "/logout" ? "active" : ""}
            onClick={() => handleLinkClick("/logout")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
