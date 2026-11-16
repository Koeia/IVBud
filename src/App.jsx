import "./index.css";
import { useState } from "react";

function TimeAddition() {
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  // add user input time to current time
  function addTime() {
    const now = new Date();
    const mins = String(now.getMinutes()).padStart(2, "0");
    let newTime = Number(time) + now.getHours();
    if (newTime >= 24) {
      newTime -= 24;
      setResult(`${newTime}:${mins} next day`);
    } else {
      setResult(`${newTime}:${mins} today`);
    }
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addTime();
  }

  // handle input change
  function handleChange(e) {
    setTime(e.target.value);
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          Enter BUD time(hours):
          <input
            type="number"
            min="1"
            required
            max="23"
            value={time}
            onChange={handleChange}
          />
        </label>
        <button className="submit" type="submit">
          Calculate Time
        </button>
        <p className="result">result: {result}</p>
      </form>
    </div>
  );
}

export default TimeAddition;
