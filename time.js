const dateElement = document.querySelector('.taskbar-date');
const timeElement = document.querySelector('.taskbar-time');

const formatDateTimePart = (number) => {
    return String(number).padStart(2, '0');
};

const updateDate = (date) => {
    const day = formatDateTimePart(date.getDate());
    const month = formatDateTimePart(date.getMonth() + 1);
    const year = String(date.getFullYear());

    dateElement.textContent = `${day}.${month}.${year}`;
};

const updateTime = (date) => {
    const hours = formatDateTimePart(date.getHours());
    const minutes = formatDateTimePart(date.getMinutes());
    const seconds = formatDateTimePart(date.getSeconds());

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
};

const updateDateTime = () => {
    const date = new Date();

    updateTime(date);
    updateDate(date);
};

updateDateTime();
setInterval(function () {
    updateDateTime();
}, 1000);