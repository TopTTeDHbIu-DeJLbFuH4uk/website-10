setInterval(function () {
    const time = document.querySelector('.display-time');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    time.textContent = hours + ':' + minutes + ':' + seconds;
})

setInterval(function () {
    const time = document.querySelector('.display-time');
    let date = new Date();
    let days = date.getDate();
    let months = date.getMonth() + 1;
    let years = date.getFullYear();

    time.textContent = days + ':' + months + ':' + years + ':';
})