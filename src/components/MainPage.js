import React, { createContext, useState } from 'react'
import './static/mainpage.css';
import Navbar from './Navbar';
import UpperTextBody from './UpperTextBody';
// import Footer from './Footer';
import Table from './Table';
import LowerBodyText from './LowerBodyText';
// import Draggable from './Draggable';

export const MainPageContext = createContext()

const MainPage = () => {

  const [enableDraggable, useEnableDraggable] = useState(true)

  return (
    <MainPageContext.Provider value={{enableDraggable, useEnableDraggable}}>
      <div className=''>
        <Navbar />
        <div className='container'>
          <UpperTextBody />
          <Table />
          <LowerBodyText />        
        </div>
        {/* <Footer /> */}
      </div>
    </MainPageContext.Provider>
  )
}

export default MainPage