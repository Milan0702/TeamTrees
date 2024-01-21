import React, { useEffect, useState } from 'react';
import './TreeCounter.css'; 

function TreeCounter() {
  const finalCount = 245136420;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const step = () => {
      if (count < finalCount) {
        setCount((prevCount) => prevCount + 10000); // You can adjust the step size here
        animationFrameId = requestAnimationFrame(step);
      }
    };
    step(); // Start the counting animation
    return () => cancelAnimationFrame(animationFrameId); // Cleanup
  }, [count, finalCount]);

  return (
    <div className="tree-counter-container">
      <span className="tree-counter-count">{count.toLocaleString()}</span>
      <span className="tree-counter-label">Trees Planted</span>
    </div>
  );
}

export default TreeCounter;
