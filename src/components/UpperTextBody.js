import React, { useContext } from 'react';
import '../components/static/textbody.css';
import planet from '../components/static/images/13972.png';
import arrow from '../components/static/images/arrow.png';
import { MainPageContext } from './MainPage';
import DraggableElement from './Draggable';

const UpperTextBody = () => {
  const { enableDraggable } = useContext(MainPageContext);

  return (
    <div className="container-fluid upper-text-body col-10">
      <div className="row">
        <div className="col-8">
          <DraggableElement
            elementType="h4"
            content="Hey there,"
            enableDraggable={enableDraggable}
            className="hey-there col-4"
          />
          <DraggableElement
            elementType="p"
            content="My name is Daniel Fosco, and I'm a software designer. I create systems for people to work, build, and collaborate online."
            enableDraggable={enableDraggable}
            className="introduction-text"
          />
          <DraggableElement
            elementType="p"
            content="I currently work as a Staff Product Designer at GitHub, designing the world's largest developer platform. Before this, I worked at Miro, GitLab, Booking.com and more."
            enableDraggable={enableDraggable}
            className="introduction-text"
          />
          <DraggableElement
            elementType="p"
            content="Before this, I worked at Miro, GitLab, Booking.com and more."
            enableDraggable={enableDraggable}
            className="introduction-text"
          />
        </div>
        <div className="col-4 image-container">
          <div className="row">
            <DraggableElement
              src={planet}
              alt=""
              enableDraggable={enableDraggable}
              className="planet-image"
            />
            <DraggableElement
              src={arrow}
              alt=""
              enableDraggable={enableDraggable}
              className="arrow-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperTextBody;
