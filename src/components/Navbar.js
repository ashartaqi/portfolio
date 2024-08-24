import React, { useContext } from 'react';
import { BsCursor, BsSun } from 'react-icons/bs';
import { FaPen, FaLock } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import '../components/static/navbar.css';
import { MainPageContext } from './MainPage';

const RightNavbar = () => {
  const { enableDraggable, setEnableDraggable, positions, setPositions, initialPositions, enableLightMode, setEnableLightMode, drawingMode, handleDrawingMode } = useContext(MainPageContext);

  const handleEnableDragging = () => {
    setEnableDraggable(!enableDraggable);
  };

  const handleCursor = () => {
    setEnableDraggable(false);
  };

  const handleEnableLightMode = () => {
    setEnableLightMode(!enableLightMode);
  };

  const resetPositions = () => {
    setPositions([...initialPositions]);
  };

  return (
    <nav className="right-navbar">
      <ul className='right-navbar-ul'>
        <li><button onClick={handleCursor}><BsCursor /></button></li>
        <li><button onClick={handleDrawingMode}><FaPen /></button></li>
        <li><button onClick={resetPositions}><AiOutlineReload /></button></li>
        <li><button onClick={handleEnableLightMode}><BsSun /></button></li>
        <li><button onClick={handleEnableDragging}><FaLock /></button></li>
      </ul>
    </nav>
  );
};

export default RightNavbar;
