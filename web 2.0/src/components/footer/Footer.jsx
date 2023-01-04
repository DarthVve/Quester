import React from 'react';
import './footer.css';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Quester</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h2>Quester</h2>
        <p>7, Asajon way, Sangotedo, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><AiFillTwitterCircle />@parisohis</p>
        <p><RiFacebookCircleFill />@parisohis</p>
        <p><RiInstagramFill />@parisohis</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>7, Asajon way, Sangotedo</p>
        <p>08035033550</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>&copy;{new Date().getFullYear()} Quester Inc. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
