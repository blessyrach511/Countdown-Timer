let countdownInterval;

function startCountdown() {
  const targetInput = document.getElementById("targetDate").value;
  const targetTime = new Date(targetInput).getTime();

  if (!targetInput || isNaN(targetTime)) {
    alert("Please select a valid future date and time.");
    return;
  }

  clearInterval(countdownInterval); // Clear any previous interval

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
      alert("⏰ Time's up!");
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}
