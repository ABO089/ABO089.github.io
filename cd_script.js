function showCountdown() {
    const countdownDate = new Date("April 7, 2025 19:30:00").getTime();

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector('.countdown-wrapper').innerHTML = "<h2>Das Konzert hat begonnen!</h2>";
        }
    }, 1000);
}

function handleMouseOver() {
    document.getElementById('hoverImage').style.display = 'block';
}

function handleMouseOut() {
    document.getElementById('hoverImage').style.display = 'none';
}

function addCalendarEvent() {
    const event = {
        title: 'Twenty One Pilots Konzert in Hamburg',
        location: 'Hamburg, Deutschland',
        description: 'Genieße ein unvergessliches Konzert von Twenty One Pilots in Hamburg.',
        startDate: '20250407T173000Z',
        endDate: '20250407T223000Z'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
}

// Initiales Laden des Countdowns
window.onload = () => {
    showCountdown();
    const showText = document.getElementById('showText');
    showText.addEventListener('mouseover', handleMouseOver);
    showText.addEventListener('mouseout', handleMouseOut);
    const addCalendarButton = document.getElementById('addCalendar');
    addCalendarButton.addEventListener('click', addCalendarEvent);
};
