import React, { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import Controls from "./Controls";
import LapList from "./LapList";

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);


  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 100); 
      }, 100);
    }
  }

  function pauseTimer() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  function resetTimer() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  function recordLap() {
    if (isRunning) {
      setLaps((prevLaps) => [...prevLaps, time]);
    }
  };

  return (
    <div className="card p-4 shadow-sm stopwatch-card">
      <TimerDisplay time={time} />
      <Controls
        isRunning={isRunning}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
        onLap={recordLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
