import React from 'react';
import './styles/HomeFooter.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faMedium} from "@fortawesome/free-brands-svg-icons";

function HomeFooter() {
  return (
    <footer className="footer">
    <div className="brandsection"> &copy;  Digital Kiosk </div>
    <div className="SocialSection">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
    </div>
  </footer>
  );
}

export default HomeFooter;
