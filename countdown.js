var countdownInterval;

function updateCountdown(targetDate) {
    var now = new Date();
    var difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdownDisplay').innerHTML = '';
        document.getElementById('message').innerHTML = '';
        return;
    }

    // Calculate time units
    var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    difference -= years * 1000 * 60 * 60 * 24 * 365;

    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    difference -= months * 1000 * 60 * 60 * 24 * 30;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * 1000 * 60 * 60 * 24;

    var hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * 1000 * 60 * 60;

    var minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * 1000 * 60;

    var seconds = Math.floor(difference / 1000);

    // Display each item one by one
    document.getElementById('countdownDisplay').innerHTML = `
        <div>Years: ${years}</div>
        <div>Months: ${months}</div>
        <div>Days: ${days}</div>
        <div>Hours: ${hours}</div>
        <div>Minutes: ${minutes}</div>
        <div>Seconds: ${seconds}</div>
    `;
}

// Retrieve the target date from localStorage
var targetDate = new Date(localStorage.getItem('targetDate'));

// Check if the target date is valid
if (isNaN(targetDate.getTime())) {
    document.getElementById('countdownDisplay').innerHTML = '<span style="color: #ff0000;">Invalid target date. Please go back and try again.</span>';
} else {
    // Start the countdown
    updateCountdown(targetDate);
    countdownInterval = setInterval(function() {
        updateCountdown(targetDate);
    }, 1000);
}