import "./index.css";
import { useState, useEffect } from "react";

// keep clock updated on page
function useClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return currentTime;
}

function TimeAddition() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");

  // Show the current time on page
  const pageTime = useClock();

  // add user input time to current time
  function addTime() {
    const now = new Date();
    const mins = String(now.getMinutes()).padStart(2, "0");
    let newHours = Number(hours) + now.getHours();

    if (newHours >= 24) {
      newHours -= 24; // if newHours is >= 24, subtract 24 to get time on next day
      setResult(`${String(newHours).padStart(2, "0")}:${mins} next day`);
    } else {
      setResult(`${String(newHours).padStart(2, "0")}:${mins} today`); // if newHours is < 24, show time on same day
    }
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addTime();
  }

  // handle input change
  function handleChange(e) {
    setHours(e.target.value);
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
          Enter BUD time (hours):
          <input
            type="number"
            min="1"
            required
            max="23"
            value={hours}
            onChange={handleChange}
          />
        </label>
        <button className="submit" type="submit">
          Calculate Time
        </button>
        <p className="result">result: {result}</p>
      </form>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <a>https://github.com/Koeia/IVBud</a>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </div>
  );
}

export default TimeAddition;
