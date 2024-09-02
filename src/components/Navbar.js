import React, { useContext, useState } from 'react';
import { BsCursor, BsSun } from 'react-icons/bs';
import { FaPen, FaLock } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import '../components/static/navbar.css';
import { MainPageContext } from './MainPage';

const RightNavbar = () => {
  const { 
    enableDraggable, 
    setEnableDraggable, 
    setPositions, 
    initialPositions, 
    enableLightMode, 
    setEnableLightMode, 
    drawingMode, 
    setDrawingMode, 
    enableLock, 
    setEnableLock
  } = useContext(MainPageContext);

  const [activeButton, setActiveButton] = useState('cursor');

  const handleLock = () => {
    setEnableLock(!enableLock)
    setEnableDraggable(!enableDraggable);
    setActiveButton('dragging');
  };

  const handleCursor = () => {
    setEnableDraggable(false);
    setDrawingMode(false)
    setActiveButton('cursor');
  };

  const handleEnableLightMode = () => {
    setEnableLightMode(!enableLightMode);
    setActiveButton('lightMode');
  };

  const resetPositions = () => {
    setPositions([...initialPositions]);
    setDrawingMode(false)
    setActiveButton('reset');
  };

  const handleDrawingModeClick = () => {
    setDrawingMode(!drawingMode)
    console.log(drawingMode)
    setActiveButton('drawing');
  };

  return (
    <nav className="right-navbar">
      <ul className='right-navbar-ul'>
        <li>
          <button 
            onClick={handleCursor} 
            className={activeButton === 'cursor' ? 'active' : ''}
          >
            <BsCursor />
          </button>
        </li>
        <li>
          <button 
            onClick={handleDrawingModeClick} 
            className={activeButton === 'drawing' ? 'active' : ''}
          >
            <FaPen />
          </button>
        </li>
        <li>
          <button 
            onClick={resetPositions} 
            className={activeButton === 'reset' ? 'active' : ''}
          >
            <AiOutlineReload />
          </button>
        </li>
        <li>
          <button 
            onClick={handleEnableLightMode} 
            className={activeButton === 'lightMode' ? 'active' : ''}
          >
            <BsSun />
          </button>
        </li>
        <li>
          <button 
            onClick={handleLock} 
            className={activeButton === 'dragging' ? 'active' : ''}
          >
            <FaLock />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default RightNavbar;


