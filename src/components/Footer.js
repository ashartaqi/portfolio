import React, { useContext } from 'react';
import { FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';
import '../components/static/footer.css';
import { MainPageContext } from './MainPage';

const Footer = () => {

  const { enableLightMode } = useContext(MainPageContext);

  return (
    <footer className="footer text-center">
      <div className={`col-12 table-text social-icons ${enableLightMode ? 'dark-mode' : 'light-mode'}`}>
        <a 
          href="https://www.linkedin.com/in/ariqaamirwaseem/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon-size" />
          <span className="icon-name">LinkedIn</span>
        </a>
        <a 
          href="https://www.behance.net/ariqaamirwaseem" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaBehance className="icon-size" />
          <span className="icon-name">Behance</span>
        </a>
        <a 
          href="https://dribbble.com/ariqaamirwaseem" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaDribbble className="icon-size" />
          <span className="icon-name">Dribbble</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
