'use strict';

const updateDateNow = setInterval(() => {
    let dateNow = new Date();
    let dateNewYear = new Date(dateNow.getFullYear() + 1, 0, 1);
    let dateDifference = dateNewYear.getTime() - dateNow.getTime();
    let dateMonth = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 30));
    let dateDay = Math.floor(dateDifference / (1000 * 60 * 60 * 24) - dateMonth * 30);
    let dateHour = Math.floor(dateDifference / (1000 * 60 * 60) - dateMonth * 30 * 24 - dateDay * 24);
    let dateMinute = Math.floor(dateDifference / (1000 * 60) - dateMonth * 30 * 24 * 60 - dateDay * 24 * 60 - dateHour * 60);
    let dateSecond = Math.floor(dateDifference / 1000 - dateMonth * 30 * 24 * 60 * 60 - dateDay * 24 * 60 * 60 - dateHour * 60 * 60 - dateMinute * 60);
    if (dateMonth > 0 || dateDay > 0 || dateHour > 0 || dateMinute > 0 || dateSecond > 0) {
        document.querySelector('.timer').textContent =`${dateMonth} ${changingString(dateMonth, ['месяцев', 'месяца', 'месяц'])}, ${dateDay} ${changingString(dateDay, ['дней', 'дня', 'день'])}, ${dateHour} ${changingString(dateHour, ['часов', 'часа', 'час'])}, ${dateMinute} ${changingString(dateMinute, ['минут', 'минуты', 'минута'])}, ${dateSecond} ${changingString(dateSecond, ['секунд', 'секунды', 'секунда'])}`;
    } else {
        document.querySelector('.timer').textContent ='С Новым Годом !!!';
    }
}, 970);

function changingString(value, array) {
    return value % 10 > 4 ? array[0] : value % 10 > 1  ? array[1] : value % 10 === 1 ? array[2] : array[0];
}