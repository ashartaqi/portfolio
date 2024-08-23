import React, { useContext } from 'react'
import '../components/static/table.css'
import DraggableElement from './Draggable'
import { MainPageContext } from './MainPage';

const Table = () => {

  const { enableDraggable, positions, setPositions, enableLightMode } = useContext(MainPageContext);

  const handlePositionChange = (index, newPosition) => {
    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <>
      <div className="col-10 container-fluid text-center">
          <div className='row row-class'>
            <DraggableElement
              elementType="p"
              content="I work in complex technical domains to enable users and unlock product growth"
              enableDraggable={enableDraggable}
              className={`col-12 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
              key={7}
              position={positions[7]}
              onPositionChange={(newPosition) => handlePositionChange(7, newPosition)}
            />
          </div>
          <div className='row'>
            <DraggableElement
              elementType="p"
              content="by"
              enableDraggable={enableDraggable}
              className={`col-3 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
              key={8}
              position={positions[8]}
              onPositionChange={(newPosition) => handlePositionChange(8, newPosition)}
            />
            <DraggableElement
              elementType="p"
              content="Understanding user needs and designing for behaviors that lead to success"
              enableDraggable={enableDraggable}
              className={`col-9 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
              key={9}
              position={positions[9]}
              onPositionChange={(newPosition) => handlePositionChange(9, newPosition)}
            />
          </div>
          <div className='row'>
            <DraggableElement
                elementType="p"
                content="and"
                enableDraggable={enableDraggable}
                className={`col-2 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
                key={10}
                position={positions[10]}
                onPositionChange={(newPosition) => handlePositionChange(10, newPosition)}
              />
              <DraggableElement
                elementType="p"
                content="Collaborating with engineers to ship scalable systems"
                enableDraggable={enableDraggable}
                className={`col-8 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
                key={11}
                position={positions[11]}
                onPositionChange={(newPosition) => handlePositionChange(11, newPosition)}
              />
              <DraggableElement
                elementType="p"
                content="&"
                enableDraggable={enableDraggable}
                className={`col-2 table-text ${enableLightMode ? 'dark-mode-border' : 'light-mode-border'}`}
                key={12}
                position={positions[12]}
                onPositionChange={(newPosition) => handlePositionChange(12, newPosition)}
              />
          </div>
      </div>
    </>
  )
}

export default Table