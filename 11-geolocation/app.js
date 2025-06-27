'use strict';

/*
    Сделайте функцию получения координат пользователя, используя 
    Geolocation API, но преобразовав его в Promise
*/

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position.coords)
            }),
            (error) => {
                console.log(error);
            }
        } else {
            reject(new Error('Geolocation не поддерживается этим браузером'))
        }
    })
}

getCurrentPosition().then(coords => {
    console.log(coords.latitude, coords.longitude)
}).catch(error => {
    console.log(error);
})