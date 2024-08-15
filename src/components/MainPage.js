import React from 'react'
import './static/mainpage.css';
import Navbar from './Navbar';
import UpperTextBody from './UpperTextBody';
// import Footer from './Footer';
import Table from './Table';
import LowerBodyText from './LowerBodyText';
// import Draggable from './Draggable';

const MainPage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='container'>
        <UpperTextBody />
        <Table />
        <LowerBodyText />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default MainPage