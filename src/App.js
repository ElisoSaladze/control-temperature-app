import React from "react";
import { useState } from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>

function App() {
  const [tempValue, setTempvalue] = useState(0);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    const newTemp = tempValue + 1;
    if (tempValue === 25) return;
    if (newTemp > -16 && newTemp < -13) {
      setTempColor("violet");
    } else if (newTemp >= -13 && newTemp < -10) {
      setTempColor("wisteria");
    } else if (newTemp >= -10 && newTemp < -8) {
      setTempColor("bluebell");
    } else if (newTemp >= -8 && newTemp < -5) {
      setTempColor("denim");
    } else if (newTemp >= -5 && newTemp < -3) {
      setTempColor("aster");
    } else if (newTemp >= -3 && newTemp < 0) {
      setTempColor("cloud-blue");
    } else if (newTemp >= 0 && newTemp < 3) {
      setTempColor("aspen");
    } else if (newTemp >= 3 && newTemp < 5) {
        setTempColor("grass-green");
    } else if (newTemp >= 5 && newTemp < 8) {
      setTempColor("citron");
    } else if (newTemp >= 8 && newTemp < 11) {
      setTempColor("safron");
    } else if (newTemp >= 11 && newTemp < 14) {
      setTempColor("sunshine");
    } else if (newTemp >= 14 && newTemp < 17) {
      setTempColor("shrimp");
    }
    setTempvalue(newTemp);
  };
  const decreaseTemp = () => {
    const newTemp = tempValue - 1;
    if (tempValue === -25) return;
    if (newTemp > -16 && newTemp < -13) {
      setTempColor("violet");
    } else if (newTemp >= -13 && newTemp < -10) {
      setTempColor("wisteria");
    } else if (newTemp >= -10 && newTemp < -8) {
      setTempColor("bluebill");
    } else if (newTemp >= -8 && newTemp < -5) {
      setTempColor("denim");
    } else if (newTemp >= -5 && newTemp < -3) {
      setTempColor("aster");
    } else if (newTemp >= -3 && newTemp < 0) {
      setTempColor("cloud-blue");
    } else if (newTemp >= 0 && newTemp < 3) {
      setTempColor("aspen");
    } else if (newTemp >= 3 && newTemp < 5) {
        setTempColor("grass-green");
    } else if (newTemp >= 5 && newTemp < 8) {
      setTempColor("citron");
    } else if (newTemp >= 8 && newTemp < 11) {
      setTempColor("safron");
    } else if (newTemp >= 11 && newTemp < 14) {
      setTempColor("sunshine");
    } else if (newTemp >= 14 && newTemp < 17) {
      setTempColor("shrimp");
    }
    setTempvalue(newTemp);
  };
  return (
    <div className="app-container">
      <div className="temperature-container1">
        <div className={`temperature-container ${tempColor}`}>
          {tempValue} °C
          </div>
      </div>
      <div className="button-div">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;
