import React from 'react';
import './Header.css';
import headerImage from '../../assets/header_im.png'; // adjust path if needed

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-contents">
        <h2>Order your favourite Food Here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
