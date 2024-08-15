import React from 'react'
import '../components/static/textbody.css'
import planet from '../components/static/images/13972.png';
import arrow from '../components/static/images/arrow.png';

const UpperTextBody = () => {
  return (
    <div className='container-fluid upper-text-body col-10'>
        <div className='row'>
          <div className='col-8'>
            <h4 className='hey-there'>Hey there,</h4>
            <p className='introduction-text'>My name is Daniel Fosco, and I'm a software designer. I create systems for people to work, build, and collaborate online.</p>
            <p className='introduction-text'>I currently work as a Staff Product Designer at GitHub, designing the world's largest developer platform. Before this, I worked at Miro, GitLab, Booking.com and more.</p>
            <p className='introduction-text'> Before this, I worked at Miro, GitLab, Booking.com and more.</p>
          </div>
          <div className='col-4'>
            <div className='row'>
              <img className='planet-image' src={planet} alt=''/>
              <img className='arrow-image' src={arrow} alt=''/>
            </div>
          </div>
        </div>       
    </div>
  )
}

export default UpperTextBody