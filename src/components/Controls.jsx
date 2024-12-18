import React from "react";

const Controls = ({ isRunning, onStart, onPause, onReset, onLap }) => {
  return (
    <div className="d-flex justify-content-center gap-3">
      {!isRunning ? (
        <button className="btn btn-success custom-btn" onClick={onStart}>
          Start
        </button>
      ) : (
        <button className="btn btn-warning custom-btn" onClick={onPause}>
          Pause
        </button>
      )}
      <button
        className="btn btn-primary custom-btn"
        onClick={onLap}
        disabled={!isRunning}
      >
        Lap
      </button>
      <button className="btn btn-danger custom-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
