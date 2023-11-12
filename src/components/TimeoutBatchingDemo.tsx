import { useState, useRef, useEffect } from 'react';

import '../style.css';

export const TimeoutBatchingDemo = ({ title }) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const renderCountRef = useRef(0);
  const renderCountDisplayRef = useRef(null);

  const updateRenderCountDisplay = () => {
    if (renderCountDisplayRef.current) {
      renderCountDisplayRef.current.textContent = renderCountRef.current;
    }
  };

  useEffect(() => {
    renderCountRef.current++;
    updateRenderCountDisplay();
  });

  const handleUpdate = () => {
    setTimeout(() => {
      setCount((c) => c + 1); // First update
      setToggle((t) => !t); // Second update
    }, 100);
  };

  return (
    <div className='demoContainer'>
      <h2>{title}</h2>
      <div className="info">
        <p>
          <span className="label">Count:</span>
          <span className="value">{count}</span>
        </p>
        <p>
          <span className="label">Toggle:</span>
          <span className="value">{toggle.toString()}</span>
        </p>
      </div>
      <p className="renderCount">
          <span className="label">Times Component Rendered:</span>
          <span className="value" ref={renderCountDisplayRef}></span>
      </p>
      <button onClick={handleUpdate} className='button'>Update State</button>
    </div>
  );
};
