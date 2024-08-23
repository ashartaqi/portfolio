import React, { useContext } from 'react'
import '../components/static/textbody.css'
import DraggableElement from './Draggable'
import { MainPageContext } from './MainPage';

const LowerBodyText = () => {

  const { enableDraggable, positions, setPositions } = useContext(MainPageContext);

  const handlePositionChange = (index, newPosition) => {
    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <div className='container-fluid col-10 lower-text-body'>
      <DraggableElement
        elementType="p"
        content="This site is part portfolio part hand-crafted whiteboard, full work in progress"
        enableDraggable={enableDraggable}
        className=""
        key={13}
        position={positions[13]}
        onPositionChange={(newPosition) => handlePositionChange(13, newPosition)}
      />
      <DraggableElement
        elementType="p"
        content="If you want to hear about my work in depth, hit the links below and get in touch."
        enableDraggable={enableDraggable}
        className=""
        key={14}
        position={positions[14]}
        onPositionChange={(newPosition) => handlePositionChange(14, newPosition)}
      />
    </div>
  )
}

export default LowerBodyText