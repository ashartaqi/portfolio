import React from 'react';
import { FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';
import '../components/static/footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/in/ariqaamirwaseem/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon-size" />
        </a>
        <a 
          href="https://www.behance.net/ariqaamirwaseem" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaBehance className="icon-size" />
        </a>
        <a 
          href="https://dribbble.com/ariqaamirwaseem" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaDribbble className="icon-size" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

