import './style.css';
import { imageIcons } from '@constants/imageIcons';
import { memo } from 'react';
const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="logo">
          <img src={imageIcons.logo} alt="logo" />
          Museum of <span>Art</span>
        </div>

        <img src={imageIcons.modsen} alt="modsen_logo" />
      </div>
    </footer>
  );
};

export default memo(Footer);
