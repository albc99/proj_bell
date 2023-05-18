let countdownElement = document.getElementById("countdown");
let countdown = 5;
let countdownTimer;

function startCountdown() {
    countdownTimer = setInterval(function () {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownTimer);
            window.location.href = 'menu.html';
        }
    }, 1000);
}

startCountdown();
