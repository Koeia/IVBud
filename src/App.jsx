import "./index.css";
import { useState, useEffect } from "react";

function TimeAddition() {
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  // keep clock updated on page
  function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return currentTime;
  }
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
  // Show the current time on page
  const pageTime = Clock();

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
      <p className="time">
        {pageTime.toLocaleTimeString([], {
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
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
