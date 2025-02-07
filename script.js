function startCountdown() {
    const launchDate = new Date("2025-02-15T11:30:00").getTime();
    
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "We're Live!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        animateFlip(daysEl, days);
        animateFlip(hoursEl, hours);
        animateFlip(minutesEl, minutes);
        animateFlip(secondsEl, seconds);
    }

    function animateFlip(element, newValue) {
        if (element.innerText !== newValue.toString()) {
            element.classList.add("flip");

            setTimeout(() => {
                element.innerText = newValue;
                element.classList.remove("flip"); 
            }, 500); 
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

document.addEventListener("DOMContentLoaded", startCountdown);
