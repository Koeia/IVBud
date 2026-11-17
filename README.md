I made this entirely because I will have a hard time calculating the time of IV BUDs when it is in hours, especially past 1400.

```Javascript
  function addTime() {
	// gives the current time on each form submit
    const now = new Date();
    const mins = String(now.getMinutes()).padStart(2, "0");
    let newTime = Number(time) + now.getHours();

	// if output is > 24 subtract 24 to give time that will be on the next day
    if (newTime >= 24) {
      newTime -= 24;
      setResult(`${newTime}:${mins} next day`);
	// if output < 24 it is today
    } else {
      setResult(`${newTime}:${mins} today`);
    }
  }
```

```html
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          Enter BUD time(hours):
          <input
            type="number"
            min="1"
            required
            max="23"
            <!-- Sets the input to the "time" variable --->
            value={time}
            onChange={handleChange}
          />
        </label>
        <button className="submit" type="submit">
          Calculate Time
        </button>
        <!-- Calls the result of addTime function from useState --->
        <p className="result">result: {result}</p>
      </form>
```

this takes input from user as a number, max 23 hours and adds it to 24h formatted "current time"

```javascript
const [time, setTime] = useState("");
const [result, setResult] = useState("");
```

these store the input hours and the output result

```javascript
// handle form submission
function handleSubmit(e) {
  e.preventDefault();
  addTime();
}

// handle input change
function handleChange(e) {
  setTime(e.target.value);
}
```

`handleSubmit(e)` calls the `addTime()` function for the input time

`handleChange(e)` sets the time variable for the `addTime()` function to use
