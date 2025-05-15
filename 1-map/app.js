'use strict';

const objectList = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

// Вариант 1

// const newObjectList = objectList.filter((value, index, list) => 
//     index === list.findIndex((t) => (
//         t.id === value.id
//     ))
// )

// console.log(newObjectList);

// Вариант 2

// const array = [];

// const uniqueObjects = objectList.map(obj => {
//     if (!array.includes(obj.id)) {
//     array.push(obj.id);
//     return obj;
//     }
//     return null;
// }).filter(Boolean);

// console.log(uniqueObjects);

// Вариант 3

const setItem = new Set();

const uniqueObjects = objectList.map(obj => {
    if (!setItem.has(obj.id)) {
        setItem.add(obj.id);
        return obj;
    }
    return null;
}).filter(Boolean);

console.log(uniqueObjects);

// Не совсем понятно зачем в этом задании нужен Set, ведь он по сути является просто вместилищем id объектов.
// Таким же образом мы можем сделать вместо Set массив пустой и туда складывать id.
// Есть ли какое-то преимущество использовать именно Set в этом примере?