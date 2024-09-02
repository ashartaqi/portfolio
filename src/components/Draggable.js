import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const DraggableElement = React.forwardRef(
  ({ elementType: ElementType = 'p', content, src, alt, enableDraggable, className, position, onPositionChange }, ref) => {
    const [localPosition, setLocalPosition] = useState(position);

    useEffect(() => {
      setLocalPosition(position);
    }, [position]);

    const handleStop = (e, data) => {
      const newPosition = { x: data.x, y: data.y };
      setLocalPosition(newPosition);
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    };

    return (
      <Draggable
        disabled={enableDraggable}
        position={localPosition}
        onStop={handleStop}
        ref={ref}
      >
        {src ? (
          <img
            className={` ${className} ${!enableDraggable ? 'clicked' : ''}`}
            src={src}
            alt={alt}
          />
        ) : (
          <ElementType
            className={` ${className} ${!enableDraggable ? 'clicked' : ''}`}
          >
            {typeof content === 'string' && content.includes('<a') ? (
              <span dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              content
            )}
          </ElementType>
        )}
      </Draggable>
    );
  }
);

export default DraggableElement;
