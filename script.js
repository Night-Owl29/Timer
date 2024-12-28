function updateCountdown() {
    const targetDate = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').textContent = "O tempo chegou!!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
