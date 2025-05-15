/*
    Сделать функцию валидации возраста. На вход передается строка
    даты рождения пользователя вида "2022-01-01".
    Необходимо вывести true, если ему больше 14 лет и false, если
    меньше
*/
const date = '1996-07-17';

function ageValidation(dateOfBirth) {
    const nowDate = new Date().getTime();
    const birthDate = new Date(dateOfBirth).getTime();
    // т.к. вращение Земли занимает 365,2425 дня, то мы можем рассчитать точное количество лет
    const userAge = Math.floor((nowDate - birthDate) / (1000 * 60 * 60 * 24) / 365.2425);
    return userAge > 14;
}

console.log(ageValidation(date));