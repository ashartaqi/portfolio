import React, { useState, useEffect, useCallback } from 'react';
import './static/draggable.css';

const Draggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDraggable, setIsDraggable] = useState(true);

  const handleMouseDown = (e) => {
    if (isDraggable) {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    },
    [dragging, offset]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    // Add global event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Clean up the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const toggleDraggable = () => {
    setIsDraggable(!isDraggable);
  };

  return (
    <>
      <button onClick={toggleDraggable}>
        {isDraggable ? 'Disable Dragging' : 'Enable Dragging'}
      </button>
      <div
        className="draggable"
        onMouseDown={handleMouseDown}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        Drag me!
      </div>
    </>
  );
};

export default Draggable;


