import React, { createContext, useState } from 'react'
import './static/mainpage.css';
import Navbar from './Navbar';
import UpperTextBody from './UpperTextBody';
import Table from './Table';
import Footer from './Footer';
import LowerBodyText from './LowerBodyText';
import Pen from './Pen';

export const MainPageContext = createContext()

const MainPage = () => {

  const initialPositions = [{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 }, { x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 }];

  const [enableDraggable, setEnableDraggable] = useState(false)
  const [positions, setPositions] = useState(initialPositions);
  const [enableLightMode, setEnableLightMode] = useState(true);
  const [enableLock, setEnableLock] = useState(false);
  const [drawingMode, setDrawingMode] = useState(false);


  return (
    <MainPageContext.Provider value={{ enableDraggable, setEnableDraggable, positions, setPositions, initialPositions, enableLightMode, setEnableLightMode, drawingMode, setDrawingMode, enableLock, setEnableLock }} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div className={`${enableLightMode ? 'base-container-dark-mode' : 'base-container-light-mode'}`}>
        <Navbar />
        <div className='container main-body-container'>
          <UpperTextBody />
          <Table />
          <LowerBodyText />
          <Footer />
        </div>
        {drawingMode && <Pen/>}
      </div>
    </MainPageContext.Provider>
  )
}

export default MainPage