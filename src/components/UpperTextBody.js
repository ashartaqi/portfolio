import React, { useContext } from 'react';
import '../components/static/textbody.css';
import planet from '../components/static/images/planet.png';
import dog from '../components/static/images/dog.png';
import arrow from '../components/static/images/arrow.png';
import { MainPageContext } from './MainPage';
import DraggableElement from './Draggable';

const UpperTextBody = () => {

  const { enableDraggable, positions, setPositions } = useContext(MainPageContext);

  const handlePositionChange = (index, newPosition) => {
    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

    return (
    <div className="container-fluid upper-text-body col-10">
      <div className="row">
        <div className="col-8">
          <DraggableElement
            elementType="h4"
            content="Hey there,"
            enableDraggable={enableDraggable}
            className="hey-there col-4"
            key={1}
            position={positions[1]}
            onPositionChange={(newPosition) => handlePositionChange(1, newPosition)}
          />
          <DraggableElement
            elementType="p"
            content="My name is Daniel Fosco, and I'm a software designer. I create systems for people to work, build, and collaborate online."
            enableDraggable={enableDraggable}
            className="introduction-text"
            key={2}
            position={positions[2]}
            onPositionChange={(newPosition) => handlePositionChange(2, newPosition)}
          />
          <DraggableElement
            elementType="p"
            content="I currently work as a Staff Product Designer at GitHub, designing the world's largest developer platform. Before this, I worked at Miro, GitLab, Booking.com and more."
            enableDraggable={enableDraggable}
            className="introduction-text"
            key={3}
            position={positions[3]}
            onPositionChange={(newPosition) => handlePositionChange(3, newPosition)}
          />
          <DraggableElement
            elementType="p"
            content="Before this, I worked at Miro, GitLab, Booking.com and more."
            enableDraggable={enableDraggable}
            className="introduction-text"
            key={4}
            position={positions[4]}
            onPositionChange={(newPosition) => handlePositionChange(4, newPosition)}
          />
          <DraggableElement
            src={arrow}
            alt=""
            enableDraggable={enableDraggable}
            className="col-8" 
            key={5}
            content=""
            position={positions[15]}
            onPositionChange={(newPosition) => handlePositionChange(15, newPosition)}
          />
        </div>
        <div className="col-4 image-container">
          <div className="row">
            <DraggableElement
              src={planet}
              alt=""
              enableDraggable={enableDraggable}
              className=""
              key={5}
              content=""
              position={positions[5]}
              onPositionChange={(newPosition) => handlePositionChange(5, newPosition)}
            />
            <DraggableElement
              src={dog}
              alt=""
              enableDraggable={enableDraggable}
              className=""
              key={6}
              content=""
              position={positions[6]}
              onPositionChange={(newPosition) => handlePositionChange(6, newPosition)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperTextBody;