import React from "react";

function LapList({ laps }) {


  const formatTime = (timeInMilliseconds) => {
    const date = new Date(timeInMilliseconds);
    return date.toISOString().substr(14, 8);
  };

  return (
    <div className="mt-4">
      <h4 className="custom-lap-heading">Lap Times</h4>
      <ul className="list-group">
        {laps.map((lap, index) => (
          <li key={index} className="list-group-item custom-lap-item">
            Lap {index + 1}:{formatTime(lap)}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default LapList;
