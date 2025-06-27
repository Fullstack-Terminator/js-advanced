'use strict';

/*
    Создать функцию race(), которая будет принимать массив Promise, и 
    возвращать первый успешно выполненный или отклоненный.
*/

function race(promises) {
    return new Promise((resolve, reject) => {
        for (const prom of promises) {
            Promise.resolve(prom).then(resolve).catch(reject)
        }
    }).then(console.log).catch(console.error)
}