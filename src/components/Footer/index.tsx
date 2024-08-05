import React from 'react';
import logo from '../../assets/images/logo.svg';
import './style.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="logo">
          <img src={logo} alt="logo" />
          Museum of <span>Art</span>
        </div>

        <div className="logo">Modsen</div>
      </div>
    </footer>
  );
};

export default Footer;
