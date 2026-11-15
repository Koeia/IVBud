import "./App.css";
import { useState } from "react";
import createRoot from "react-dom/client";

function TimeAddition() {
  const [time, setTime] = useState("");

  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  function addTime(time) {
    newTime = time + date.getHours();
    if (newTime > 24) {
      newTime = -24;
      return `${newTime} next day`}
    else {
      return `${newTime} today`
    }
    
  }
  function handleChange(e) {
    setTime(e.target.value);
  }

  return (
    <div>
      <h3>Current time is: {showTime}</h3>
      <form className="Form">
        <label className="App">
          Enter time to add:
          <input type="text" value={time} onChange={handleChange} />
        </label>
        <p>input: {time}</p>
      </form>
    </div>
  );
}

export default TimeAddition;
