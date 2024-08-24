import React, { createContext, useState } from 'react';
import './static/mainpage.css';
import Navbar from './Navbar';
import UpperTextBody from './UpperTextBody';
import Table from './Table';
import Footer from './Footer';
import LowerBodyText from './LowerBodyText';
import Pen from './Pen';

export const MainPageContext = createContext();

const MainPage = () => {
  const initialPositions = new Array(16).fill({ x: 0, y: 0 });

  const [enableDraggable, setEnableDraggable] = useState(false);
  const [positions, setPositions] = useState(initialPositions);
  const [enableLightMode, setEnableLightMode] = useState(true);
  const [drawingMode, setDrawingMode] = useState(false);

  const handleDrawingMode = () => {
    setDrawingMode(prevMode => !prevMode);
  };

  return (
    <MainPageContext.Provider value={{ enableDraggable, setEnableDraggable, positions, setPositions, initialPositions, enableLightMode, setEnableLightMode, drawingMode, handleDrawingMode }}>
      <div className={`${enableLightMode ? 'base-container-dark-mode' : ''}`}>
        <Navbar />
        <div className='container'>
          <UpperTextBody />
          <Table />
          <LowerBodyText />
          <Footer />
        </div>
        {drawingMode && <Pen />}
      </div>
    </MainPageContext.Provider>
  );
};

export default MainPage;

