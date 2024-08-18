import React, { useContext } from 'react';
import { BsCursor, BsSun } from 'react-icons/bs'; // Bootstrap icons
import { FaPen } from 'react-icons/fa'; // Font Awesome icon
import { AiOutlineReload } from 'react-icons/ai'; // Ant Design icon
import '../components/static/navbar.css';
import { MainPageContext } from './MainPage';

const RightNavbar = () => {

  const { enableDraggable, useEnableDraggable } = useContext(MainPageContext);
  const HandleEnableDragging = () => {
    useEnableDraggable(!enableDraggable);
  };

  return (
    <nav className="right-navbar">
      <ul className='right-navbar-ul'>
        <li><button onClick={HandleEnableDragging}><BsCursor /></button></li>
        <li><button><FaPen /></button></li>
        <li><button><AiOutlineReload /></button></li>
        <li><button><BsSun /></button></li>
      </ul>
    </nav>
  );
};

export default RightNavbar;


