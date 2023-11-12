import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';

import '../style.css';

export const FlushSyncDemo = ({ title }) => {
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
    flushSync(() => {
      setCount((c) => c + 1); // First update
    });

    flushSync(() => {
      setToggle((t) => !t); // Second update
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <p>Toggle: {toggle.toString()}</p>
      <p>
        Component Rendered: <span ref={renderCountDisplayRef}></span> times
      </p>
      <button onClick={handleUpdate}>Update State</button>
    </div>
  );
};
