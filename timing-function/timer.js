let count = 10;          // starting countdown
let timerId = null;      // will store setInterval id

function start() {
  if (timerId === null) {   // only if not already running
    timerId = setInterval(() => {
      console.log("⏳ Count:", count);
      count--;

      if (count < 0) {
        clearInterval(timerId);
        timerId = null;
        console.log("⏰ Time's up!");
      }
    }, 1000);
  }
}

function pause() {
  clearInterval(timerId);  // stops the setInterval loop
  timerId = null;          // mark as stopped
  console.log("⏸️ Paused at:", count);
}

function reset() {
  clearInterval(timerId);  // stop the loop if running
  timerId = null;
  count = 10;              // reset back
  console.log("🔄 Reset. Count is back to:", count);
}

start()

