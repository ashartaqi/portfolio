import React, { useContext } from 'react';
import { BsCursor, BsSun } from 'react-icons/bs';
import { FaPen, FaLock } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import '../components/static/navbar.css';
import { MainPageContext } from './MainPage';

const RightNavbar = () => {

  const { enableDraggable, useEnableDraggable, positions, setPositions, initialPositions, enableLightMode, useEnableLIghtMode } = useContext(MainPageContext);

  const HandleEnableDragging = () => {
    useEnableDraggable(!enableDraggable);
  };

  const HandleCursor = () => {
    useEnableDraggable(false);
  };

  const HandleEnableLightMode = () => {
    useEnableLIghtMode(!enableLightMode);
  }
  
  const resetPositions = () => {
    setPositions([...initialPositions]);
    console.log(positions)
  };

  return (
    <nav className="right-navbar">
      <ul className='right-navbar-ul'>
        <li><button onClick={HandleCursor}><BsCursor /></button></li>
        <li><button><FaPen /></button></li>
        <li><button onClick={resetPositions}><AiOutlineReload /></button></li>
        <li><button onClick={HandleEnableLightMode}><BsSun /></button></li>
        <li><button onClick={HandleEnableDragging}><FaLock /></button></li>
      </ul>
    </nav>
  );
};

export default RightNavbar;


