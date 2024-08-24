import React, { useRef, useEffect, useState } from 'react';

const Pen = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    const navbar = document.querySelector('.navbar'); 
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.getBoundingClientRect().height);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    context.beginPath();
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (y < navbarHeight) return;

    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
    />
  );
};

export default Pen;

  