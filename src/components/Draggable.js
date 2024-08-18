import React from 'react';
import Draggable from 'react-draggable';

const DraggableElement = React.forwardRef(
  ({ elementType: ElementType = 'p', content, src, alt, enableDraggable, className }) => (
    <Draggable disabled={enableDraggable}>
      {src ? (
        <img
          className={` ${className} ${enableDraggable === false ? 'clicked': ''}`}
          src={src}
          alt={alt}
        />
      ) : (
        <ElementType
          className={` ${className} ${enableDraggable === false ? 'clicked': ''}`}
        >
          {content}
        </ElementType>
      )}
    </Draggable>
  )
);

export default DraggableElement;
