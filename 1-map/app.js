'use strict';

const objectList = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const setItem = new Set();

const uniqueObjects = objectList.map(obj => {
    if (!setItem.has(obj.id)) {
        setItem.add(obj.id);
        return obj;
    }
    return null;
}).filter(Boolean);

console.log(uniqueObjects);