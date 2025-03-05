var countdownInterval;
var countdownDisplay = document.getElementById('countdownDisplay');

function updateCountdown(targetDate) {
    var now = new Date();
    var difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = '';
        return;
    }

    // Calculate time units more efficiently
    var years = Math.floor(difference / 31536000000);
    var months = Math.floor((difference % 31536000000) / 2592000000);
    var days = Math.floor((difference % 2592000000) / 86400000);
    var hours = Math.floor((difference % 86400000) / 3600000);
    var minutes = Math.floor((difference % 3600000) / 60000);
    var seconds = Math.floor((difference % 60000) / 1000);

    // Use template literal for better performance
    countdownDisplay.innerHTML = 
        `<div>Years: ${years}</div>
         <div>Months: ${months}</div>
         <div>Days: ${days}</div>
         <div>Hours: ${hours}</div>
         <div>Minutes: ${minutes}</div>
         <div>Seconds: ${seconds}</div>`;
}

// Use RequestAnimationFrame for smoother updates
function startCountdown(targetDate) {
    let lastUpdate = 0;
    function update(timestamp) {
        if (timestamp - lastUpdate >= 1000) {
            updateCountdown(targetDate);
            lastUpdate = timestamp;
        }
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

var targetDate = new Date(localStorage.getItem('targetDate'));
if (!isNaN(targetDate.getTime())) {
    startCountdown(targetDate);
} else {
    countdownDisplay.innerHTML = '<span style="color: #ff0000;">Invalid target date. Please go back and try again.</span>';
}