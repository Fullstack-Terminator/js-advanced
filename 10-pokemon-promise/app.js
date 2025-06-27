'use strict';

/*
    Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

    После получения, получите информацию о первой его ability по
    ссылке, которая приходит при первом запросе. Там найдите
    описание на английском и выведите в консоль
*/

const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(({ abilities }) => {
        const url = abilities[0]?.ability?.url
        if (url) {
            return fetch(url)
                .then(res => res.json());
        } else {
            throw new Error('URL не найден')
        }
    }).then((res) => {
        console.log(res?.effect_entries[1]?.effect)
    }).catch(error => console.log(error));