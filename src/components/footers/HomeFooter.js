import React from 'react';
import '../footers/styles/HomeFooter.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faMedium} from "@fortawesome/free-brands-svg-icons";

function HomeFooter() {
  return (
    <div className='footer-container'>
      <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              | DKiosk
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <div class='social-container'>
            <h2>Follow Us</h2>
            <div calssName="social-icons">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faMedium} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
          </div>
          <small class='website-rights'>DKiosk © 2021 We are for you</small>
    </div>
  );
}

export default HomeFooter;
