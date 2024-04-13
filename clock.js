function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12; // Convert to 12-hour format
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    const hourRotation = (hour * 30) + (minute / 2); // Each hour is 30 degrees, and each minute is half a degree
    const minuteRotation = (minute * 6) + (second / 10); // Each minute is 6 degrees, and each second is 0.1 degrees
    const secondRotation = second * 6; // Each second is 6 degrees

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);

updateClock(); 
