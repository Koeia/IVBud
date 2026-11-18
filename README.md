I made this entirely because I will have a hard time calculating the 24h time of IV BUDs past 1400. This was made to combat this.

### purpose:

- Convert BUD to 24h time and simplify day tracking

### input:

- Whole numbers between 1-23 minutes carry from current time

### results:

- Relative to time on click, so click on compound start

```javascript
function TimeAddition() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");
```

Stores the inital state and input hours from the user. sets result to the calculated time.

```javascript
// handle form submission
function handleSubmit(e) {
  e.preventDefault();
  addTime();
}

// handle input change
function handleChange(e) {
  setHours(e.target.value);
}
```

handles the input change event from the user and updates the hours state on form submission.

```javascript
// add user input time to current time
function addTime() {
  const now = new Date();
  const mins = String(now.getMinutes()).padStart(2, "0");
  let newHours = Number(hours) + now.getHours();

  if (newHours >= 24) {
    newHours -= 24; // if newHours is >= 24, subtract 24 to get time on next day
    setResult(`${newHours}:${mins} next day`);
  } else {
    setResult(`${newHours}:${mins} today`); // if newHours is < 24, show time on same day
  }
}
```

main function of the app takes input from the user and adds it to the current time. sets the result to the calculated time.

```jsx
// Show the current time on page


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
            min="1" // minimum value for the input
            required // input is required
            max="23" // maximum value for the input
            value={hours} //sets the input value to the hours state
            onChange={handleChange}
          />
      </label>
      <button className="submit" type="submit">
        Calculate Time
      </button>
      {/*shows the result of the calculation */}
      <p className="result">result: {String(result).padStart(2, "0")}</p>
  </form>
</div>
);
}

export default TimeAddition;
```
