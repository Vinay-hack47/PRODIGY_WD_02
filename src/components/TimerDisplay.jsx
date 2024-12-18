import React from "react";

const TimerDisplay = ({ time }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) /10); 
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <h2 className="display-4 mb-4 custom-timer-display">{formatTime(time)}</h2>
  );
};

export default TimerDisplay;
