import React, { createContext, useState } from 'react'
import './static/mainpage.css';
import Navbar from './Navbar';
import UpperTextBody from './UpperTextBody';
import Table from './Table';
import Footer from './Footer';
import LowerBodyText from './LowerBodyText';

export const MainPageContext = createContext()

const MainPage = () => {

  const initialPositions = [{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 }, { x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 } ,{ x: 0, y: 0 }];

  const [enableDraggable, useEnableDraggable] = useState(true)
  const [positions, setPositions] = useState(initialPositions);
  const [enableLightMode, useEnableLIghtMode] = useState(true)

  return (
    <MainPageContext.Provider value={{enableDraggable, useEnableDraggable, positions, setPositions, initialPositions, enableLightMode, useEnableLIghtMode}}>
      <div className={`${enableLightMode ? 'base-container-dark-mode' : ''}`}>
        <Navbar />
        <div className='container'>
          <UpperTextBody />
          <Table />
          <LowerBodyText />
          <Footer />
        </div>
        
      </div>
    </MainPageContext.Provider>
  )
}

export default MainPage