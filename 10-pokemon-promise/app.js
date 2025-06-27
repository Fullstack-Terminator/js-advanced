'use strict';

/*
    Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

    После получения, получите информацию о первой его ability по
    ссылке, которая приходит при первом запросе. Там найдите
    описание на английском и выведите в консоль
*/

// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();

// request.addEventListener('load', function() {
//     const pokemons = JSON.parse(this.responseText);

//     const request = new XMLHttpRequest();
//     request.open('GET', pokemons?.abilities[0]?.ability?.url);
//     request.send();

//     request.addEventListener('load', function() {
//         const pokemonDitto = JSON.parse(this.responseText);
//         console.log(pokemonDitto?.effect_entries[1]?.effect);
//     });
// });

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