import React from "react";
import Stopwatch from "./components/Stopwatch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="container text-center mt-5 ms-10">
      <h1 className="mb-4 custom-title">Stopwatch</h1>
      <Stopwatch />
    </div>
  );
};

export default App;
