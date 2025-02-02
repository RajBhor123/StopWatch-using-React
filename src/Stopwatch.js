import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure this is imported for the styles

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('stopped');

  useEffect(() => {
    let interval;
    if (status === 'running') {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (status === 'paused') {
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status]);

  const startHandler = () => {
    setTime(0);
    setStatus('running');
  };

  const stopHandler = () => {
    setTime(0);
    setStatus('stopped');
  };

  const pauseHandler = () => {
    setStatus('paused');
  };

  const resumeHandler = () => {
    setStatus('running');
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <div>
        {status === 'stopped' && (
          <button onClick={startHandler}>Start</button>
        )}
        {status === 'running' && (
          <div>
            <button onClick={pauseHandler}>Pause</button>
            <button onClick={stopHandler}>Stop</button>
          </div>
        )}
        {status === 'paused' && (
          <div>
            <button onClick={resumeHandler}>Resume</button>
            <button onClick={stopHandler}>Stop</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
