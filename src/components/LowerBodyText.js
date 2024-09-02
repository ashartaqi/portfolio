import React, { useContext } from 'react'
import '../components/static/textbody.css'
import DraggableElement from './Draggable'
import { MainPageContext } from './MainPage';
import { Link } from 'react-router-dom';

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
        className="lower-body-text col-10"
        key={13}
        position={positions[13]}
        onPositionChange={(newPosition) => handlePositionChange(13, newPosition)}
      />
      <p>To explore my work in detail, click on the <Link to='/portfolio' className='portfolio-redirect'>full portfolio link</Link> and feel free to connect using the links below</p>

    </div>
  )
}

export default LowerBodyText