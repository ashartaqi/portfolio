import React, { useRef, useState, useEffect, useContext } from 'react';
import { MainPageContext } from './MainPage';

const Pen = () => {
  const { enableLock } = useContext(MainPageContext);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    const handleResize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth * 0.85;
      canvas.height = 1250;
      if (ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCanvasCoordinates = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const startDrawing = (event) => {
    const { x, y } = getCanvasCoordinates(event);
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const { x, y } = getCanvasCoordinates(event);
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    if (context) {
      context.lineWidth = 5;
      context.strokeStyle = 'black';
    }
  }, [context]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '85vw',
        height: '1250px',
      }}
      onMouseDown={!enableLock ? startDrawing : null}
      onMouseMove={!enableLock ? draw : null}
      onMouseUp={!enableLock ? stopDrawing : null}
      onMouseLeave={!enableLock ? stopDrawing : null}
    />
  );
};

export default Pen;




