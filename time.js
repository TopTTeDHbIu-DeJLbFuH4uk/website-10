setInterval(function () {
    const time = document.querySelector('.taskbar-time');
    const dateTime = new Date();

    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    time.textContent = hours + ':' + minutes + ':' + seconds;
})

setInterval(function () {
    const date = document.querySelector('.taskbar-date');
    const dateTime = new Date();

    let days = dateTime.getDate();
    let months = dateTime.getMonth() + 1;
    const years = dateTime.getFullYear();

    if (days < 10) {
        days = '0' + days;
    }
    if (months < 10) {
        months = '0' + months;
    }

    date.textContent = days + '.' + months + '.' + years;
})