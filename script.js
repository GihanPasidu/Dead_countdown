function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Hide the notification after 3 seconds
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000); // Changed from 2000 to 3000
}

function startCountdown() {
    var birthDateInput = document.getElementById('birthdayInput');
    var agreeCheckbox = document.getElementById('agreeCheckbox');

    // Check if the date input is empty
    if (!birthDateInput.value) {
        showNotification("Please select a date.");
        return;
    }

    // Check if the checkbox is checked
    if (!agreeCheckbox.checked) {
        showNotification("Please agree to the terms and conditions.");
        return;
    }

    var birthDate = new Date(birthDateInput.value);
    var today = new Date();

    // Check if the selected date is in the future
    if (birthDate > today) {
        showNotification("Please enter a past date.");
        return;
    }

    // Generate a random number of years between 0 and 80
    var randomYears = Math.floor(Math.random() * 80); // 0 to 79 years
    var randomSeconds = Math.floor(Math.random() * 60); // 0 to 59 seconds

    // Set the target date
    var targetDate = new Date(birthDate);
    targetDate.setFullYear(birthDate.getFullYear() + randomYears);
    targetDate.setSeconds(birthDate.getSeconds() + randomSeconds);

    // Adjust for leap years (e.g., February 29th)
    if (birthDate.getMonth() === 1 && birthDate.getDate() === 29) {
        if (!isLeapYear(targetDate.getFullYear())) {
            targetDate = new Date(targetDate.getFullYear(), 1, 28); // Set to February 28th
        }
    }

    // Save the target date to localStorage
    localStorage.setItem('targetDate', targetDate.toISOString());

    // Clear input fields
    birthDateInput.value = '';
    agreeCheckbox.checked = false;

    // Redirect to the countdown page
    window.location.href = 'countdown.html';
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}