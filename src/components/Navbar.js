import React from 'react';
import { BsCursor, BsSun } from 'react-icons/bs'; // Bootstrap icons
import { FaPen } from 'react-icons/fa'; // Font Awesome icon
import { AiOutlineReload } from 'react-icons/ai'; // Ant Design icon
import '../components/static/navbar.css'

const RightNavbar = () => {
  return (
    <nav className="right-navbar">
      <ul className='right-navbar-ul'>
        <li><a href="#cursor"><BsCursor /> </a></li>
        <li><a href="#marker"><FaPen /> </a></li>
        <li><a href="#reset"><AiOutlineReload /> </a></li>
        <li><a href="#lightmode"><BsSun /> </a></li>
      </ul>
    </nav>
  );
};

export default RightNavbar;

