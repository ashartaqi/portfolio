import React, { useContext } from 'react';
import '../components/static/textbody.css';
import planet from '../components/static/images/planet.png';
import dolphin from '../components/static/images/dolphin.png';
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
    <div className="container-fluid upper-text-body col-11">
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
            content="My name is Ariqa Amir, and I'm a software designer. I create design systems for people to work, build, and collaborate online."
            enableDraggable={enableDraggable}
            className="introduction-text"
            key={2}
            position={positions[2]}
            onPositionChange={(newPosition) => handlePositionChange(2, newPosition)}
          />
          <DraggableElement
            elementType="p"
            content="I currently work as a Product Designer at <a href='https://www.linkedin.com/company/wizardanalytics/' target='_blank' rel='noopener noreferrer' className='draggable-link-1'>Wizard Analytics</a>, desiging catastrophe modeling data platform."
            enableDraggable={enableDraggable}
            className="introduction-text"
            key={3}
            position={positions[3]}
            onPositionChange={(newPosition) => handlePositionChange(3, newPosition)}
          />
          <DraggableElement
            elementType="p"
            content="Before this, I worked at <a href='https://www.linkedin.com/company/custom-gateway/' target='_blank' rel='noopener noreferrer' className='draggable-link-2'>Custom Gateway</a>, <a href='https://www.linkedin.com/company/custom-gateway/' target='_blank' rel='noopener noreferrer' className='draggable-link-3'>Ittehad</a> and more."
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
              src={dolphin}
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